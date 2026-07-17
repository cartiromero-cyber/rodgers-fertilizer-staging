"use client";
import Script from "next/script";
import { useEffect } from "react";
import { GA4_ID, IS_STAGING } from "@/lib/env";
import { track, type RfEvent } from "@/lib/analytics";
// Loads GA4 in production only (never on staging). Also delegates click tracking
// for any element carrying data-track="<event>".
export default function Analytics() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-track]");
      if (el) track(el.getAttribute("data-track") as RfEvent);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  if (!GA4_ID || IS_STAGING) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
      </Script>
    </>
  );
}
