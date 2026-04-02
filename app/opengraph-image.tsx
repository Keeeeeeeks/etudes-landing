import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,122,74,0.25), transparent 70%), #161616",
          color: "#fafaf8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "999px",
              background: "#4a7a4a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 16c-3.8 4.8-6.4 9.4-6.4 15 0 5.5 2.3 10 6.4 14 4.1-4 6.4-8.5 6.4-14 0-5.6-2.6-10.2-6.4-15z" fill="#fafaf8" />
              <path d="M32 20.8V41" stroke="#dbead8" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M25.4 30.8c2.2-1.2 4.4-1.8 6.6-1.8 2.2 0 4.4 0.6 6.6 1.8" stroke="#dbead8" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
              <path d="M43 15.2l1.6 3.2 3.6 0.5-2.6 2.6 0.7 3.6-3.3-1.7-3.3 1.7 0.7-3.6-2.6-2.6 3.6-0.5 1.6-3.2z" fill="#e8c87a" />
            </svg>
          </div>
          <div style={{ fontSize: "38px", fontWeight: 800, letterSpacing: "-0.03em" }}>pip</div>
        </div>
        <div style={{ fontSize: "84px", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "14px" }}>
          Ship the thing.
        </div>
        <div style={{ fontSize: "34px", color: "#aaaaaa", maxWidth: "960px" }}>
          Voice-powered task board for builders with shipping paralysis.
        </div>
      </div>
    ),
    size,
  );
}
