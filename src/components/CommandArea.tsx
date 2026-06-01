import { useEffect, useRef, useState } from "react";
import handleKeyDown from "../util/Keybind";
import Header from "./Header";
import { ghostSuggestion, HISTORY_KEY } from "../util/commands";

export interface Command {
  command: string;
  output: JSX.Element | "";
}

function loadHistory(): string[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}

export default function CommandArea() {
  const [commandList, setCommandList] = useState<Command[]>([]);
  const [history, setHistory] = useState<string[]>(loadHistory);
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    const focusInput = () => {
      inputRef.current?.focus();
    };

    window.addEventListener("keydown", focusInput);

    return () => {
      window.removeEventListener("keydown", focusInput);
    };
  }, [commandList]);

  const ghost = ghostSuggestion(currentCommand);

  return (
    <div className="flex-grow overflow-y-auto overflow-x-hidden space-y-2 max-h-[calc(100vh-100px)] px-4 pb-20 lg:pb-6">
      <Header />
      {commandList.map((item, index) => (
        <div key={index} className="animate-cmd">
          <div className="flex mb-2">
            <p className="mr-2">
              <span className="text-[var(--rose)]">guest</span>@
              <span className="text-[var(--rose)]">soumen:~$</span>
            </p>
            <p>{item.command}</p>
          </div>
          <div className="lg:mx-6 mx-4">
            {item.output}
          </div>
        </div>
      ))}
      <div className="flex items-center">
        <p className="mr-2">
          <span className="text-[var(--prompt-a)]">guest</span>@
          <span className="text-[var(--prompt-b)]">soumen:~$</span>
        </p>
        <div className="relative flex-grow">
          {/* Inline ghost-text autocomplete hint (press Tab to accept) */}
          {ghost && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 whitespace-pre select-none opacity-40"
            >
              <span className="invisible">{currentCommand}</span>
              {ghost}
            </span>
          )}
          <input
            id="terminal-input"
            aria-label="Terminal command input"
            className="relative w-full bg-transparent outline-none caret-[var(--gold)]"
            autoFocus
            ref={inputRef}
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            type="text"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                currentCommand,
                history,
                currentIndex,
                setCommandList,
                setHistory,
                setCurrentCommand,
                setCurrentIndex
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
