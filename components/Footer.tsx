import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="text-center px-6 py-6 border-t border-border text-xs text-[#666]">
      <div className="flex items-center justify-center gap-1.5 mb-1.5">
        <svg width="16" height="16" viewBox="0 0 28 28" fill="#666" aria-hidden="true" focusable="false">
          <circle cx="14" cy="14" r="14" />
          <path
            d="M14 6c0 0-3 4-3 8s1.5 6 3 8c1.5-2 3-4 3-8s-3-8-3-8z"
            fill="#0e0e0e"
            opacity="0.5"
          />
        </svg>
        <span>Made by Resoworks</span>
      </div>
      <div>
        &copy; Resoworks, 2026 ·{" "}
        <Link href="/privacy" className="text-[#666] no-underline hover:text-muted">
          Privacy Policy
        </Link>{" "}
        ·{" "}
        <Link href="/terms" className="text-[#666] no-underline hover:text-muted">
          Terms of Service
        </Link>{" "}
        ·{" "}
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Etudes GitHub repository (opens in a new tab)"
          className="text-[#666] no-underline hover:text-muted"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
