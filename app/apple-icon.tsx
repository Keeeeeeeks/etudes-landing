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
          <path d="M32 14c0 0-7 9-7 18s3 14 7 18c4-4 7-9 7-18s-7-18-7-18z" fill="#fafaf8" opacity="0.92" />
          <path d="M24 32c5-2 11-2 16 0" stroke="#fafaf8" strokeWidth="2" fill="none" opacity="0.65" />
        </svg>
      </div>
    ),
    size,
  );
}
