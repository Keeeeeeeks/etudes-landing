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
              color: "#fafaf8",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            p
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
