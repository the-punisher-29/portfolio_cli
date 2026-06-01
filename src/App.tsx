import Terminal from "./components/Terminal";
import { SpeedInsights } from '@vercel/speed-insights/react';
export default function App() {
  return (
    <div>
      <Terminal />
      {/* Subtle CRT scanlines + vignette overlay (non-interactive) */}
      <div className="crt-overlay" aria-hidden="true" />
      <SpeedInsights />
      <div className="text-white text-center pb-2">
        @soumen-2025
      </div>
    </div>
  );
}
