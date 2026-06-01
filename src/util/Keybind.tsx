import { Command } from "../components/CommandArea";
import { GetOutput } from "./GetOutput";
import { completeCommand, HISTORY_KEY, HISTORY_LIMIT } from "./commands";

export default function handleKeyDown(
  e: React.KeyboardEvent<HTMLInputElement>,
  currentCommand: string,
  history: string[],
  currentIndex: number,
  setCommandList: React.Dispatch<React.SetStateAction<Command[]>>,
  setHistory: React.Dispatch<React.SetStateAction<string[]>>,
  setCurrentCommand: React.Dispatch<React.SetStateAction<string>>,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
) {
  if (e.key === "Enter") {
    const trimmed = currentCommand.trim();
    const newCommand: Command = {
      command: currentCommand.toLowerCase(),
      output: GetOutput(currentCommand, setCommandList),
    };
    if (newCommand.command.trim() !== "clear")
      setCommandList((prev) => [...prev, newCommand]);

    // Record history (skip empties and consecutive duplicates) and persist it.
    if (trimmed.length > 0) {
      setHistory((prev) => {
        if (prev[prev.length - 1] === trimmed) return prev;
        const next = [...prev, trimmed].slice(-HISTORY_LIMIT);
        try {
          localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
        } catch {
          /* localStorage may be unavailable — ignore */
        }
        return next;
      });
    }

    setCurrentCommand("");
    setCurrentIndex(-1);
  } else if (e.key === "ArrowUp") {
    if (history.length > 0) {
      if (currentIndex === -1) {
        setCurrentIndex(history.length - 1);
        setCurrentCommand(history[history.length - 1]);
      } else if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setCurrentCommand(history[currentIndex - 1]);
      }
    }
  } else if (e.key === "ArrowDown") {
    if (history.length > 0 && currentIndex !== -1) {
      if (currentIndex < history.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentCommand(history[currentIndex + 1]);
      } else {
        setCurrentIndex(-1);
        setCurrentCommand("");
      }
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const completed = completeCommand(currentCommand);
    if (completed) setCurrentCommand(completed);
  }
}
