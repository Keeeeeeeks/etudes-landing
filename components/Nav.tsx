import TogglePill from "./TogglePill";
import { siteConfig } from "@/lib/siteConfig";

interface NavProps {
  activeView: "humans" | "agents";
  onToggle: (view: "humans" | "agents") => void;
}

export default function Nav({ activeView, onToggle }: NavProps) {
  return (
    <nav aria-label="Primary navigation" className="flex items-center px-6 py-3.5 border-b border-border sticky top-0 bg-[rgba(22,22,22,0.92)] backdrop-blur-[12px] z-10 gap-6">
      <div className="flex items-center gap-2.5">
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="14" cy="14" r="14" fill="#4a7a4a" />
          <path
            d="M14 6c0 0-3 4-3 8s1.5 6 3 8c1.5-2 3-4 3-8s-3-8-3-8z"
            fill="#fafaf8"
            opacity="0.9"
          />
          <path
            d="M10 14c2-1 6-1 8 0"
            stroke="#fafaf8"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
          />
        </svg>
        <span className="font-extrabold text-lg tracking-tight">pip</span>
      </div>

      <div className="flex gap-5 text-[13px] text-muted max-[700px]:hidden">
        <a href="#features" className="hover:text-cream transition-colors">
          Features
        </a>
        <a href="#devs" className="hover:text-cream transition-colors">
          For Devs
        </a>
      </div>

      <div className="flex gap-2.5 items-center ml-auto">
        <TogglePill activeView={activeView} onToggle={onToggle} />
        <a
          href={siteConfig.testFlightUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Join Pip beta on TestFlight (opens in a new tab)"
          className="px-4 py-2 rounded-[9px] font-bold text-[13px] bg-sage text-cream cursor-pointer border-none font-[inherit] no-underline"
        >
          Join Beta
        </a>
      </div>
    </nav>
  );
}
