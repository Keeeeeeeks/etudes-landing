import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="text-center px-6 py-6 border-t border-border text-xs text-[#666]">
      <div className="flex items-center justify-center gap-1.5 mb-1.5">
        <BrandMark className="w-4 h-4" variant="muted" />
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
