import type { ReactNode } from "react";

// Minimal, brand-aligned line icons (stroke = currentColor). Server-rendered,
// lightweight, consistent. Used in the capability strip and elsewhere. These are
// graphics, not photos — owner photography can complement them later.
const P: Record<string, ReactNode> = {
  blend: (<><circle cx="12" cy="12" r="8" /><path d="M8 13c1.5 1.5 2.5 1.5 4 0s2.5-1.5 4 0" /><path d="M9 9.5h.01M14.5 10.5h.01" /></>),
  bulk: (<><path d="M3 19h18" /><path d="M5 19l7-11 7 11" /><path d="M9 19l3-4 3 4" /></>),
  bag: (<><path d="M8 8c0-1.5 1.8-3 4-3s4 1.5 4 3" /><rect x="6.5" y="8" width="11" height="12" rx="1.5" /><path d="M9.5 12h5" /></>),
  pallet: (<><rect x="3.5" y="6" width="17" height="4" rx="1" /><rect x="3.5" y="12" width="17" height="4" rx="1" /><path d="M6 18v2M12 18v2M18 18v2" /></>),
  tote: (<><rect x="5" y="6" width="14" height="14" rx="1.5" /><path d="M9 4h6l-1 2H10z" /><path d="M5 11h14" /></>),
  truck: (<><path d="M2 16V8h11v8" /><path d="M13 11h5l3 3v2h-8" /><circle cx="7" cy="18" r="1.8" /><circle cx="17.5" cy="18" r="1.8" /></>),
  spreader: (<><path d="M2 15V9h10v6" /><path d="M12 11h4l3 3v1h-7" /><circle cx="6.5" cy="17.5" r="1.6" /><circle cx="16" cy="17.5" r="1.6" /><path d="M4 20h.01M8 20.5h.01M12 20h.01" /></>),
  dot: (<circle cx="12" cy="12" r="4" />),
};

function svg(name: string) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name] ?? P.dot}
    </svg>
  );
}

// Map a capability label to the right icon.
export function capIconName(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("blend")) return "blend";
  if (l.includes("bulk")) return "bulk";
  if (l.includes("bag")) return "bag";
  if (l.includes("pallet")) return "pallet";
  if (l.includes("tote")) return "tote";
  if (l.includes("spreader")) return "spreader";
  if (l.includes("delivery") || l.includes("truck") || l.includes("flatbed")) return "truck";
  return "dot";
}

export function CapIcon({ label }: { label: string }) {
  return svg(capIconName(label));
}
