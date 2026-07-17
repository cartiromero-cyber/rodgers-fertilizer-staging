import type { Metadata } from "next";
import { SITE_URL, IS_STAGING } from "@/lib/env";
import { site } from "@/content/site";

export function buildMetadata(opts: {
  title: string; description: string; path: string;
}): Metadata {
  const fullTitle = `${opts.title} | ${site.name} — Saluda, SC`;
  return {
    title: fullTitle,
    description: opts.description,
    alternates: { canonical: `${SITE_URL}${opts.path}` },
    // Staging is never indexable. Production flips this via NEXT_PUBLIC_SITE_ENV.
    robots: IS_STAGING ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle, description: opts.description,
      url: `${SITE_URL}${opts.path}`, siteName: site.name, type: "website",
    },
  };
}
