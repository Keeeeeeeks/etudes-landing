export default function ForDevs() {
  return (
    <div
      id="devs"
      className="bg-dev-bg border-t border-b border-dev-border px-6 py-12 max-[700px]:px-5 max-[700px]:py-9 max-[420px]:px-4 max-[420px]:py-7"
    >
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-extrabold text-2xl tracking-[-0.02em] mb-1.5 text-mint">
          Built by builders, for builders
        </h2>
        <p className="text-sm text-mint-sub mb-5 leading-relaxed">
          Etudes is a Claude Code skill for shipping-focused 5-day sprints. It
          turns ideas into scoped tasks, keeps daily check-ins tight, and helps
          you finish instead of drift. Pip is the mobile companion for capture,
          tracking, and momentum between terminal sessions.
        </p>
        <div className="bg-ground border border-dev-border rounded-[10px] p-4 font-mono text-[13px] text-dev-text leading-relaxed max-[700px]:text-[11px]">
          <span className="text-[#666]">$</span>{" "}
          <span className="text-cream">npx skills add keeeeeeeks/etudes</span>
          <br />
          <span className="text-[#666]">$</span>{" "}
          <span className="text-cream">/etudes</span>
          <br />
          <span className="text-sage">
            → What are you working on? Describe the idea, point me at the
            code...
          </span>
        </div>
      </div>
    </div>
  );
}
