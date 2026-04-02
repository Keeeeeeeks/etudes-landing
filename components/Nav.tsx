import TogglePill from "./TogglePill";
import { siteConfig } from "@/lib/siteConfig";
import BrandMark from "./BrandMark";

interface NavProps {
  activeView: "humans" | "agents";
  onToggle: (view: "humans" | "agents") => void;
}

export default function Nav({ activeView, onToggle }: NavProps) {
  return (
    <nav aria-label="Primary navigation" className="flex items-center px-6 py-3.5 border-b border-border sticky top-0 bg-[rgba(22,22,22,0.92)] backdrop-blur-[12px] z-10 gap-6">
      <div className="flex items-center gap-2.5">
        <BrandMark />
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
