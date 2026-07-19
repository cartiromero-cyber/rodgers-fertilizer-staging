"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Global scroll-reveal. Mounted once in the layout. SSR-safe: it only adds the
// `reveal-on` class (which enables the hidden initial state in CSS) when motion
// is allowed, so without JS or under reduced-motion all content is visible.
// Re-scans on route change so client-navigated pages reveal correctly.
const SELECTOR =
  "[data-reveal], .grid > .card, .trust .item, .quote-banner, .process, .section > .container > h2";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave everything visible; no motion

    document.documentElement.classList.add("reveal-on");
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
