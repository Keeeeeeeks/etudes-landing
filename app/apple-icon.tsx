import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4a7a4a",
          borderRadius: 36,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 16c-3.8 4.8-6.4 9.4-6.4 15 0 5.5 2.3 10 6.4 14 4.1-4 6.4-8.5 6.4-14 0-5.6-2.6-10.2-6.4-15z" fill="#fafaf8" />
          <path d="M32 20.8V41" stroke="#dbead8" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M25.4 30.8c2.2-1.2 4.4-1.8 6.6-1.8 2.2 0 4.4 0.6 6.6 1.8" stroke="#dbead8" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
          <path d="M43 15.2l1.6 3.2 3.6 0.5-2.6 2.6 0.7 3.6-3.3-1.7-3.3 1.7 0.7-3.6-2.6-2.6 3.6-0.5 1.6-3.2z" fill="#e8c87a" />
        </svg>
      </div>
    ),
    size,
  );
}
