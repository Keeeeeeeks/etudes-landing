"use client";

interface TogglePillProps {
  activeView: "humans" | "agents";
  onToggle: (view: "humans" | "agents") => void;
}

export default function TogglePill({ activeView, onToggle }: TogglePillProps) {
  return (
    <div
      className="inline-flex rounded-full bg-surface border border-border overflow-hidden select-none"
      role="tablist"
      aria-label="Audience view toggle"
    >
      <button
        type="button"
        onClick={() => onToggle("humans")}
        role="tab"
        aria-selected={activeView === "humans"}
        aria-label="Switch to For Humans view"
        className={`px-[18px] min-h-11 text-[13px] font-bold transition-colors duration-200 ease-in-out ${
          activeView === "humans"
            ? "bg-cream text-ground rounded-full"
            : "text-[#666]"
        }`}
      >
        For Humans
      </button>
      <button
        type="button"
        onClick={() => onToggle("agents")}
        role="tab"
        aria-selected={activeView === "agents"}
        aria-label="Switch to For Agents view"
        className={`px-[18px] min-h-11 text-[13px] font-bold transition-colors duration-200 ease-in-out ${
          activeView === "agents"
            ? "bg-cream text-ground rounded-full"
            : "text-[#666]"
        }`}
      >
        For Agents
      </button>
    </div>
  );
}
