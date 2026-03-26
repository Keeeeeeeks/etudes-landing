import PhoneMockup from "./PhoneMockup";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section
      className="text-center px-6 pt-12 pb-10 max-[700px]:px-5 max-[700px]:pt-9 max-[700px]:pb-8"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,122,74,0.12), transparent 70%)",
      }}
    >
      <h1 className="font-extrabold text-[42px] tracking-[-0.04em] mb-2 max-[700px]:text-[32px] max-[420px]:text-[26px]">
        Ship the thing.
      </h1>
      <p className="text-base text-muted max-w-[440px] mx-auto mb-6 leading-relaxed max-[700px]:text-sm">
        Voice-powered task board for builders with shipping paralysis. Say it.
        See it. Ship it.
      </p>
      <div className="flex gap-2.5 justify-center flex-wrap mb-8">
        <a
          href={siteConfig.testFlightUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Join Pip on TestFlight (opens in a new tab)"
          className="px-6 py-3 rounded-[9px] font-bold text-[15px] bg-sage text-cream cursor-pointer border-none font-[inherit] no-underline"
        >
          Join TestFlight
        </a>
        <a
          href={siteConfig.skillUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Etudes skill page (opens in a new tab)"
          className="px-6 py-3 rounded-[9px] font-bold text-[15px] bg-cream text-ground cursor-pointer border-none font-[inherit] flex items-center gap-1.5 no-underline"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            <path d="M12 8v8" />
            <path d="M8 12l4-4 4 4" />
          </svg>
          Skill Link
        </a>
      </div>
      <PhoneMockup />
      <div className="text-[11px] text-[#666] mt-3">
        iOS 17+ · iPhone 14 or newer
      </div>
    </section>
  );
}
