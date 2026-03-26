import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pip",
    short_name: "Pip",
    description:
      "Voice-powered task board for builders with shipping paralysis. Say it. See it. Ship it.",
    start_url: "/",
    display: "standalone",
    background_color: "#161616",
    theme_color: "#161616",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
