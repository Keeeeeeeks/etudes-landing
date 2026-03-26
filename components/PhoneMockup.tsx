export default function PhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Preview of Pip app showing three tasks and a voice input button"
      className="w-[220px] h-[420px] rounded-[32px] bg-surface border-[3px] border-[#3a3a3a] mx-auto flex flex-col overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] max-[420px]:w-[180px] max-[420px]:h-[340px]"
    >
      <div className="w-20 h-2 bg-[#3a3a3a] rounded mx-auto mt-2 mb-1.5" />
      <div className="flex-1 mx-1.5 mb-1.5 rounded-[20px] bg-ground p-3.5 overflow-hidden">
        <div className="text-[11px] text-sage font-bold mb-2">
          TODAY — Day 3
        </div>
        <div className="text-[11px] text-cream bg-surface border border-border rounded-lg px-2.5 py-2 mb-1.5 flex justify-between items-center">
          Fix auth bug
          <span className="text-[10px] text-[#666]">30m</span>
        </div>
        <div className="text-[11px] text-cream bg-surface border border-border rounded-lg px-2.5 py-2 mb-1.5 flex justify-between items-center">
          Add onboarding flow
          <span className="text-[10px] text-[#666]">45m</span>
        </div>
        <div className="text-[11px] text-[#666] line-through bg-surface border border-border rounded-lg px-2.5 py-2 mb-1.5 flex justify-between items-center">
          Setup CI pipeline
          <span className="text-[10px] text-[#666]">15m</span>
        </div>
        <div className="text-[10px] text-[#666] text-center mt-2 mb-1">
          tap to speak
        </div>
        <div className="w-11 h-11 bg-sage rounded-full mx-auto flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fafaf8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="22" />
          </svg>
        </div>
      </div>
    </div>
  );
}
