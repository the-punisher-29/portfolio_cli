import { Command } from "../components/CommandArea";
import { findCommand } from "../commands/registry";
import { suggestCommand } from "./commands";

export function GetOutput(
  command: string,
  setCommandList: React.Dispatch<React.SetStateAction<Command[]>>
): JSX.Element | "" {
  const raw = command.trim();
  const arg = raw.toLowerCase();
  if (!arg) return ""; // empty Enter → just a fresh prompt line

  const def = findCommand(arg);
  if (def) return def.run({ raw, arg, setCommandList });

  const suggestion = suggestCommand(arg);
  return (
    <div>
      <p className="text-[var(--love)]">Command not found: {arg}</p>
      {suggestion && (
        <p>
          Did you mean <span className="text-[var(--gold)]">{suggestion}</span>?
        </p>
      )}
      <p>
        Try <span className="text-[var(--gold)]">help</span> to see available
        commands
      </p>
    </div>
  );
}
