import { useEffect, useState } from "react";

const BOOT_LINES = [
  "guest@soumen:~$ ./portfolio.sh --boot",
  "loading modules: about projects skills experiences ... ok",
  "establishing session for guest@soumen ... ready",
];

export default function Header() {
  const [typed, setTyped] = useState("");
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const full = BOOT_LINES.join("\n");
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i < full.length) {
        timer = setTimeout(tick, full[i] === "\n" ? 170 : 13);
      } else {
        setBooted(true);
      }
    };
    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Boot log — types out on first load */}
      <pre className="text-[var(--pine)] text-xs lg:text-sm whitespace-pre-wrap mb-2 min-h-[3.5rem]">
        {typed}
        {!booted && <span className="cursor-blink">▋</span>}
      </pre>

      {/* Banner + welcome — revealed once the boot log finishes */}
      <div
        className={
          "w-full h-1/3 pb-2 text-sm lg:text-base transition-opacity duration-700 " +
          (booted ? "opacity-100" : "opacity-0")
        }
      >
        {/* prettier-ignore */}
        <pre className="whitespace-pre text-[var(--iris)] text-xs mx-auto lg:text-xl ">
            {`
  ____
 / ___|  ___  _   _ _ __ ___   ___ _ __
 \\___ \\ / _ \\| | | | '_ \` _ \\ / _ \\ '_ \\
  ___) | (_) | |_| | | | | | |  __/ | | |
 |____/ \\___/ \\__,_|_| |_| |_|\\___|_| |_|

`}
          </pre>
        <p>Welcome to my portfolio!</p>
        <p>
          Type <span className="text-[var(--gold)]">help</span> to get a list of
          available commands.
        </p>
        <p>
          Use <span className="text-[var(--gold)]">↑</span> and{" "}
          <span className="text-[var(--gold)]">↓</span> to navigate command history.
        </p>
      </div>
    </div>
  );
}
