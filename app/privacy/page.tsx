import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pip handles your data, voice processing, and AI coaching privacy.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-ground text-cream">
      <nav className="flex items-center px-6 py-3.5 border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 no-underline text-cream">
          <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" aria-hidden="true" focusable="false">
            <circle cx="14" cy="14" r="14" fill="#4a7a4a" />
            <path d="M14 6c0 0-3 4-3 8s1.5 6 3 8c1.5-2 3-4 3-8s-3-8-3-8z" fill="#fafaf8" opacity="0.9" />
            <path d="M10 14c2-1 6-1 8 0" stroke="#fafaf8" strokeWidth="1.2" fill="none" opacity="0.6" />
          </svg>
          <span className="font-extrabold text-lg tracking-tight">pip</span>
        </Link>
      </nav>

      <main className="max-w-[720px] mx-auto px-6 py-12">
        <h1 className="font-extrabold text-[32px] tracking-[-0.04em] mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted mb-2">Last updated: March 25, 2026</p>

        <div className="space-y-6 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Overview</h2>
            <p>Pip is an iOS application developed by Resoworks. We are committed to protecting your privacy. This policy describes how we collect, use, and protect your information.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Voice Data</h2>
            <p>Pip uses WhisperKit for voice transcription. All voice processing happens on-device. Your audio recordings are never transmitted to our servers or any third-party service. Voice data is processed locally and discarded immediately after transcription.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">AI Coaching</h2>
            <p>When you use AI coaching features, the text of your tasks and sprint data may be sent to our AI service provider for processing. We do not send voice audio — only the transcribed text. AI responses are generated in real-time and are not stored by the AI provider beyond the session.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Data Storage</h2>
            <p>Your sprint data, task lists, and coaching history are stored locally on your device. No account is required to use Pip. If you choose to create an account for sync purposes, your data will be encrypted in transit and at rest.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Analytics</h2>
            <p>Pip does not include any third-party analytics, tracking, or advertising SDKs at launch. We may add privacy-respecting analytics in the future, and this policy will be updated accordingly.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Third-Party Services</h2>
            <p>Pip does not share your personal data with third parties for marketing or advertising purposes. The only external service communication is for AI coaching functionality as described above.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Children&apos;s Privacy</h2>
            <p>Pip is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the date above.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-cream mb-2">Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a href={`mailto:${siteConfig.privacyEmail}`} className="text-cream hover:text-mint-sub">
                {siteConfig.privacyEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="text-center px-6 py-6 border-t border-border text-xs text-[#666]">
        <div>&copy; Resoworks, 2026 · <Link href="/privacy" className="text-[#666] no-underline hover:text-muted">Privacy Policy</Link> · <Link href="/terms" className="text-[#666] no-underline hover:text-muted">Terms of Service</Link></div>
      </footer>
    </div>
  );
}
