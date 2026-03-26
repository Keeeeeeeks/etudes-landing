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
          <div className="flex justify-end items-center px-6 py-3.5 border-b border-dev-border sticky top-0 bg-[rgba(13,17,23,0.92)] backdrop-blur-[12px] z-10">
            <TogglePill activeView={activeView} onToggle={handleToggle} />
          </div>
          <AgentReference />
        </div>
      </div>
    </div>
  );
}
