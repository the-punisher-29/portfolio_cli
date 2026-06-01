import { useRef, useState } from "react";
import CommandArea from "./CommandArea";

export default function Terminal() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [minimized, setMinimized] = useState(false);

  const handleKeyPress = (key: string) => {
    // Dispatch on the input itself so the event bubbles up to React's root
    // delegated listener and triggers the input's onKeyDown handler.
    // Dispatching on `window` never reaches it (window is above the root).
    const input = document.getElementById("terminal-input");
    if (!input) return;
    input.focus();
    input.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      rootRef.current?.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <div
      ref={rootRef}
      className="font-mono text-[var(--text)] bg-[var(--bg)] flex justify-center lg:w-screen  lg:h-screen w-screen h-screen text-sm lg:text-base md:text-base "
    >
      <div
        className={
          "lg:w-8/12 m-4 w-11/12 md:w-10/12 border-white border border-b-4  rounded-2xl " +
          (minimized ? "self-start" : "")
        }
      >
        <div
          className="rounded-t-2xl px-4 py-3  border border-b-pink-200
         w-full flex items-center"
          onClick={() => minimized && setMinimized(false)}
          title={minimized ? "Click to restore" : undefined}
        >
          {/* buttons */}
          <div className="flex items-center gap-2 ml-2">
            <div
              className="w-3.5 h-3.5 rounded-full bg-[var(--btn-close)] hover:bg-red-500 cursor-pointer"
              title="Close"
              onClick={(e) => {
                e.stopPropagation();
                setMinimized(true);
              }}
            ></div>
            <div
              className="w-3.5 h-3.5 rounded-full bg-[var(--btn-min)] hover:bg-yellow-500 cursor-pointer"
              title="Minimize"
              onClick={(e) => {
                e.stopPropagation();
                setMinimized((m) => !m);
              }}
            ></div>
            <div
              className="w-3.5 h-3.5 rounded-full bg-[var(--btn-max)] hover:bg-green-500 cursor-pointer"
              title="Maximize (fullscreen)"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
            ></div>
          </div>
          {/* title */}
          <p className="absolute left-1/2 transform -translate-x-1/2">
            <span>soumen kumar</span>
            <span>@portfolio</span>
            <span>:~</span>
            <span>$</span>
          </p>

          {/* Spacer to align buttons and prevent shifting */}
          <div className="w-3.5 h-3.5 invisible"></div>
        </div>

        {/* Hidden (not unmounted) when minimized so command history survives */}
        <div className={minimized ? "hidden" : ""}>
          <CommandArea />
        </div>
      </div>

      {!minimized && (
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            className="bg-[var(--iris)] text-[var(--bg)] px-3 py-2 rounded-md"
            title="Up Arrow"
            onClick={() => handleKeyPress("ArrowUp")}
          >
            ↑
          </button>
          <button
            className="bg-[var(--iris)] text-[var(--bg)] px-3 py-2 rounded-md"
            title="Down Arrow"
            onClick={() => handleKeyPress("ArrowDown")}
          >
            ↓
          </button>
          <button
            className="bg-[var(--iris)] text-[var(--bg)] px-3 py-2 rounded-md"
            title="Tab"
            onClick={() => handleKeyPress("Tab")}
          >
            Tab
          </button>
        </div>
      )}
    </div>
  );
}
