export default function Header() {
  return (
    <div>
      <div className="w-full h-1/3 pb-2 text-sm lg:text-base">
        {/* prettier-ignore */}
        <pre className="whitespace-pre text-[#c4a7e7] text-xs mx-auto lg:text-xl ">
            {`
  ____                                    
 / ___|  ___  _   _ _ __ ___   ___ _ __  
 \\___ \\ / _ \| | | | '_ '_ \\ / _ \\ '_ \\ 
  ___) | (_) | |_| | | | | | |  __/ | | |
 |____/ \\___/ \\__,_|_| |_| |_|\\___|_| |_|

`}
          </pre>
        <p>Welcome to my portfolio!</p>
        <p>
          Type <span className="text-[#f6c177]">help</span> to get a list of
          available commands.
        </p>
        <p>
          Use <span className="text-[#f6c177]">↑</span> and{" "}
          <span className="text-[#f6c177]">↓</span> to navigate command history.
        </p>
      </div>
    </div>
  );
}
