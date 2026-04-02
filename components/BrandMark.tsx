interface BrandMarkProps {
  className?: string;
  variant?: "default" | "muted";
}

export default function BrandMark({
  className = "w-7 h-7",
  variant = "default",
}: BrandMarkProps) {
  const palette =
    variant === "default"
      ? {
          bg: "#4a7a4a",
          leaf: "#fafaf8",
          vein: "#dbead8",
          star: "#e8c87a",
        }
      : {
          bg: "#666666",
          leaf: "#111111",
          vein: "#2a2a2a",
          star: "#8e8e8e",
        };

  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="14" cy="14" r="14" fill={palette.bg} />
      <path d="M14 7c-1.6 2-2.8 4-2.8 6.4 0 2.4 1 4.4 2.8 6.2 1.8-1.8 2.8-3.8 2.8-6.2C16.8 11 15.6 9 14 7z" fill={palette.leaf} />
      <path d="M14 8.8v9" stroke={palette.vein} strokeWidth="1" strokeLinecap="round" />
      <path d="M10.9 13.2c1.1-.6 2-.8 3.1-.8 1.1 0 2 .2 3.1.8" stroke={palette.vein} strokeWidth="0.9" strokeLinecap="round" opacity="0.85" />
      <path d="M19.2 7.3l0.7 1.4 1.5 0.2-1.1 1.1 0.3 1.5-1.4-0.7-1.4 0.7 0.3-1.5-1.1-1.1 1.5-0.2 0.7-1.4z" fill={palette.star} />
    </svg>
  );
}
