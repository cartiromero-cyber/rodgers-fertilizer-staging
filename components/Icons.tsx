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
  field: (<><path d="M3 16c4-2 14-2 18 0" /><path d="M3 12c4-1.6 14-1.6 18 0" /><path d="M3 20c4-2 14-2 18 0" /></>),
  equipment: (<><rect x="3.5" y="8" width="17" height="7" rx="1" /><path d="M7 15v3M12 15v3M17 15v3M12 8V5" /></>),
  parts: (<><circle cx="12" cy="12" r="3.2" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2 2M15.8 15.8l2 2M17.8 6.2l-2 2M8.2 15.8l-2 2" /></>),
  seed: (<><path d="M12 21v-8" /><path d="M12 13c0-3.2 2.2-5.4 5.4-5.4C17.4 10.8 15.2 13 12 13z" /><path d="M12 13c0-3.2-2.2-5.4-5.4-5.4C6.6 10.8 8.8 13 12 13z" /></>),
  reorder: (<><path d="M4 10a7 7 0 0111.5-4.3L18 8" /><path d="M20 14a7 7 0 01-11.5 4.3L6 16" /><path d="M18 4v4h-4M6 20v-4h4" /></>),
  soil: (<><path d="M3 9h18M3 14h18" /><path d="M7 9V6M13 14v3M17 9V7" /></>),
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

// Direct icon by name (for the hero operations graphic).
export function RfIcon({ name }: { name: string }) {
  return svg(name);
}

// Map a buyer-pathway card label to an icon.
export function pathIconName(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("fertilizer")) return "blend";
  if (l.includes("delivery") || l.includes("spreading")) return "truck";
  if (l.includes("equipment")) return "equipment";
  if (l.includes("part")) return "parts";
  if (l.includes("seed") || l.includes("supplies")) return "seed";
  if (l.includes("reorder")) return "reorder";
  return "dot";
}
export function PathIcon({ label }: { label: string }) {
  return svg(pathIconName(label));
}
