// Single source of truth for the terminal's commands.
// Used by `help`, `ls`, Tab-completion (ghost text), and "did you mean?".

export interface CommandMeta {
  name: string;
  desc: string;
}

export const COMMANDS: CommandMeta[] = [
  { name: "about", desc: "Learn more about me" },
  { name: "experiences", desc: "Where I've worked & researched" },
  { name: "projects", desc: "A glimpse into my work" },
  { name: "skills", desc: "Checkout my technical skills" },
  { name: "achievements", desc: "Achievements & competitive-programming profiles" },
  { name: "socials", desc: "You can find me here!" },
  { name: "resume", desc: "Download my resume" },
  { name: "goals", desc: "What I'm currently exploring" },
  { name: "blogs", desc: "A collection of my thoughts and occasional rants" },
  { name: "neofetch", desc: "System info, terminal-style" },
  { name: "whoami", desc: "Print the current user" },
  { name: "ls", desc: "List available commands" },
  { name: "date", desc: "Show the current date & time" },
  { name: "echo", desc: "Print a line of text" },
  { name: "history", desc: "Show command history" },
  { name: "theme", desc: "Switch color theme (try 'theme dracula')" },
  { name: "clear", desc: "Clear the terminal" },
  { name: "help", desc: "List all available commands" },
];

export const COMMAND_NAMES = COMMANDS.map((c) => c.name);

export const HISTORY_KEY = "portfolio-history";
export const HISTORY_LIMIT = 100;

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
