// Verified NAP + navigation. Facts here are VERIFIED from the live site/public
// listings unless annotated. Hours per official website (a directory listing
// differs — reconcile with owner before production).
export const site = {
  name: "Rodgers Fertilizer",
  legalName: "Rodgers Fertilizer LLC",
  since: 1976,
  headline: "Custom-Blended Fertilizer. Bulk, Bagged & Delivered.", // OWNER APPROVAL REQUIRED
  subheadline:
    "Family-owned in Saluda since 1976 — fertilizer built for your fields, plus Bush Hog equipment and parts.", // OWNER APPROVAL REQUIRED
  phone: "864-445-2104",
  phoneAlt: "800-753-7294",
  phoneHref: "tel:+18644452104",
  phoneAltHref: "tel:+18007537294",
  address: { street: "409 N Main St", city: "Saluda", state: "SC", zip: "29138" },
  hours: "Mon–Fri, 8:00 AM – 5:00 PM", // VERIFIED (website); directory discrepancy noted
  mapsQuery: "Rodgers Fertilizer, 409 N Main St, Saluda, SC 29138",
} as const;

export const primaryNav: { label: string; href: string }[] = [
  { label: "Fertilizer", href: "/fertilizer" },
  { label: "Delivery & Spreading", href: "/delivery" },
  { label: "Equipment", href: "/equipment" },
  { label: "Parts", href: "/parts" },
  { label: "Seed & Farm Supplies", href: "/seed-farm-supplies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const utilityNav: { label: string; href: string }[] = [
  { label: "Quick Reorder", href: "/reorder" },
  { label: "Contact", href: "/contact" },
];

export const sectionMeta: Record<string, { title: string; blurb: string }> = {
  fertilizer: { title: "Fertilizer", blurb: "Custom blends, bulk, bagged, pallets, one-ton totes, and crop-specific fertility." },
  delivery: { title: "Delivery & Spreading", blurb: "Pickup, flatbed delivery, and spreader-truck service." },
  equipment: { title: "Equipment", blurb: "Authorized Bush Hog & Great Plains — rotary cutters, hay equipment, implements." },
  parts: { title: "Parts", blurb: "Bush Hog parts and rotary-cutter parts — get the exact part fast." },
  "seed-farm-supplies": { title: "Seed & Farm Supplies", blurb: "Food-plot and pasture seed, feed, minerals, and farm supplies." },
};
