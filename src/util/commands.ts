// Terminal input helpers: Tab-completion (ghost text) and "did you mean?".
// The command list itself lives in ../commands/registry.

import { COMMAND_NAMES } from "../commands/registry";

export { HISTORY_KEY, HISTORY_LIMIT } from "./constants";

/**
 * Tab-completion target for a typed prefix.
 * Returns the longest common prefix of all matches if that extends the input,
 * otherwise the first match — matching the inline ghost suggestion.
 */
export function completeCommand(prefix: string): string | null {
  const p = prefix.toLowerCase().trim();
  if (!p || p.includes(" ")) return null;
  const matches = COMMAND_NAMES.filter((n) => n.startsWith(p));
  if (matches.length === 0) return null;
  if (matches.length === 1) return matches[0];

  let lcp = matches[0];
  for (const m of matches) {
    while (!m.startsWith(lcp)) lcp = lcp.slice(0, -1);
  }
  return lcp.length > p.length ? lcp : matches[0];
}

/** The remainder shown as ghost text after what the user has typed. */
export function ghostSuggestion(input: string): string {
  const p = input.toLowerCase().trim();
  if (!p || p.includes(" ")) return "";
  const match = COMMAND_NAMES.find((n) => n.startsWith(p) && n !== p);
  return match ? match.slice(p.length) : "";
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[m][n];
}

/** Closest command to an unknown input, or null if nothing is close enough. */
export function suggestCommand(input: string): string | null {
  const word = input.toLowerCase().trim().split(/\s+/)[0];
  if (!word) return null;
  let best: string | null = null;
  let bestDistance = Infinity;
  for (const name of COMMAND_NAMES) {
    const d = levenshtein(word, name);
    if (d < bestDistance) {
      bestDistance = d;
      best = name;
    }
  }
  const threshold = Math.max(2, Math.floor(word.length / 2));
  return best !== null && bestDistance <= threshold ? best : null;
}
