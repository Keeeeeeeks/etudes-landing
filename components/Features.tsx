export default function Features() {
  const features = [
    {
      title: "Voice-to-Kanban",
      desc: 'Say "fix auth bug, 30 min, done when tests pass" and it appears on your board. WhisperKit runs locally \u2014 your voice never leaves your phone.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <rect x="3" y="18" width="18" height="4" rx="1" />
        </svg>
      ),
    },
    {
      title: "Pip Companion",
      desc: "A sprout who grows with you. Levels up when you ship. Nudges when you drift. Never nags. Cosmetics for premium.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Widgets + Live Activity",
      desc: "Glanceable progress on your Lock Screen and Home Screen. Always know what\u2019s next without opening the app.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="px-6 py-12 max-w-[800px] mx-auto max-[700px]:px-5 max-[700px]:py-9"
    >
      <h2 className="font-extrabold text-2xl tracking-[-0.02em] mb-1.5">
        Features
      </h2>
      <p className="text-sm text-muted mb-6 leading-relaxed">
        Just what you need. Nothing you don&apos;t.
      </p>
      <ul className="flex gap-3.5 justify-center max-[700px]:flex-col list-none">
        {features.map((feat) => (
          <li
            key={feat.title}
            className="flex-1 bg-surface border border-border rounded-[14px] p-5 text-left max-[420px]:p-4"
          >
            <div className="w-8 h-8 text-sage mb-2.5">{feat.icon}</div>
            <h3 className="font-bold text-[15px] mb-1">{feat.title}</h3>
            <p className="text-xs text-[#888] leading-snug">{feat.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
