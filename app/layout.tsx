import type { Metadata } from "next";
import "./globals.css";
import StagingBanner from "@/components/StagingBanner";
import CallBar from "@/components/CallBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Analytics from "@/components/Analytics";
import Jsonld from "@/components/Jsonld";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL, IS_STAGING } from "@/lib/env";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${site.name} — Custom Fertilizer, Bulk Distribution & Bush Hog Equipment | Saluda, SC`, template: `%s | ${site.name}` },
  description: "Custom-blended fertilizer, bulk & bagged distribution, delivery, and authorized Bush Hog equipment & parts. Family-owned in Saluda, SC since 1976.",
  robots: IS_STAGING ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StagingBanner />
        <CallBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <Analytics />
        <Jsonld data={organizationSchema()} />
      </body>
    </html>
  );
}
