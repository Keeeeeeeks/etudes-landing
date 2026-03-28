"use client";

import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import ForDevs from "./ForDevs";
import Footer from "./Footer";
import AgentReference from "./AgentReference";
import TogglePill from "./TogglePill";

export default function FlipContainer() {
  const [activeView, setActiveView] = useState<"humans" | "agents">("humans");

  const handleToggle = (view: "humans" | "agents") => {
    setActiveView(view);
  };

  return (
    <div className={`scene ${activeView === "agents" ? "flipped" : ""}`}>
      <p className="sr-only" aria-live="polite">
        {activeView === "agents" ? "For Agents view active" : "For Humans view active"}
      </p>
      <div className="flipper">
        <div className="face face-front">
          <Nav activeView={activeView} onToggle={handleToggle} />
          <Hero />
          <HowItWorks />
          <Features />
          <ForDevs />
          <Footer />
        </div>

        <div className="face face-back">
          <nav aria-label="Agent view navigation" className="flex items-center px-6 py-3.5 border-b border-dev-border sticky top-0 bg-[rgba(13,17,23,0.92)] backdrop-blur-[12px] z-10 gap-6">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" aria-hidden="true" focusable="false">
                <circle cx="14" cy="14" r="14" fill="#4a7a4a" />
                <path d="M14 6c0 0-3 4-3 8s1.5 6 3 8c1.5-2 3-4 3-8s-3-8-3-8z" fill="#fafaf8" opacity="0.9" />
                <path d="M10 14c2-1 6-1 8 0" stroke="#fafaf8" strokeWidth="1.2" fill="none" opacity="0.6" />
              </svg>
              <span className="font-extrabold text-lg tracking-tight text-cream">pip</span>
            </div>

            <div className="flex gap-5 text-[13px] text-muted max-[700px]:hidden">
              <span className="text-dev-text">Agent Reference</span>
            </div>

            <div className="flex gap-2.5 items-center ml-auto">
              <TogglePill activeView={activeView} onToggle={handleToggle} />
              <div className="w-[86px] max-[700px]:hidden" aria-hidden="true" />
            </div>
          </nav>
          <AgentReference />
        </div>
      </div>
    </div>
  );
}
