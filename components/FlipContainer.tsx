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
import BrandMark from "./BrandMark";

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
              <BrandMark />
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
