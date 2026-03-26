import type { Metadata, Viewport } from "next";
import { Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pip.resoworks.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pip — Ship the thing.",
    template: "%s | Pip",
  },
  description:
    "Voice-powered task board for builders with shipping paralysis. Say it. See it. Ship it.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pip — Ship the thing.",
    description:
      "Voice-powered task board for builders with shipping paralysis. Say it. See it. Ship it.",
    url: "/",
    siteName: "Pip",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pip app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pip — Ship the thing.",
    description:
      "Voice-powered task board for builders with shipping paralysis. Say it. See it. Ship it.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#161616",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
