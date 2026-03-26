export default function HowItWorks() {
  const steps = [
    {
      title: "Speak",
      desc: "Tap the mic and describe your task. WhisperKit transcribes on-device. No cloud. No lag.",
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
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      title: "Shape",
      desc: "AI parses your voice into a structured task with time estimate and done-definition.",
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
          <path d="M12 3l1.912 5.813h6.112l-4.968 3.587 1.912 5.813L12 14.626l-4.968 3.587 1.912-5.813L4 8.813h6.112z" />
        </svg>
      ),
    },
    {
      title: "Ship",
      desc: "Drag to done. Pip celebrates. Repeat daily until it\u2019s in front of a real person.",
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
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how"
      className="px-6 py-12 max-w-[800px] mx-auto max-[700px]:px-5 max-[700px]:py-9"
    >
      <h2 className="font-extrabold text-2xl tracking-[-0.02em] mb-1.5">
        How It Works
      </h2>
      <p className="text-sm text-muted mb-6 leading-relaxed">
        Three steps. No setup. No project management theater.
      </p>
      <ul className="flex gap-4 justify-center max-[700px]:flex-col list-none">
        {steps.map((step) => (
          <li
            key={step.title}
            className="flex-1 bg-surface border border-border rounded-[14px] p-5 text-left max-[420px]:p-4"
          >
            <div className="w-10 h-10 mb-2.5 text-sage">{step.icon}</div>
            <div className="font-bold text-[15px] mb-1">{step.title}</div>
            <div className="text-xs text-[#888] leading-snug">{step.desc}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
