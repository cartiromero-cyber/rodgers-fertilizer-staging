// ---------------------------------------------------------------------------
// Owner-editable catalog data model (Phase 2J) + migrated content (Phase 2.5).
// Records below are MIGRATED from the live rodgersfertilizer.com catalog via the
// public search index (subpages are JS-rendered, so full detail/images require a
// browser render or an owner/CMS export). verified:true = name + description
// confirmed from a real source; `source` cites the origin URL. No pricing is
// stored (Quote/Call only). No records are invented.
// ---------------------------------------------------------------------------
export type PriceStatus = "Quote" | "Call for price" | "In-store";
export type ProductType = "fertilizer" | "equipment" | "part" | "seed" | "feed" | "chemical" | "supply";
export type CatalogGate = "READY FOR STAGING" | "READY FOR OWNER REVIEW" | "READY FOR COMPLIANCE REVIEW";

export interface ProductBase {
  id: string; type: ProductType; category: string; subcategory?: string;
  name: string; slug: string; description: string; intendedUse?: string;
  packaging?: string[]; minQuantity?: string; seasonality?: string;
  pickup: boolean; delivery: boolean; serviceArea?: string;
  brand?: string; manufacturer?: string; images?: string[];
  priceStatus: PriceStatus; quoteRequired: boolean;
  relatedProducts?: string[]; relatedResources?: string[];
  seoTitle?: string; seoDescription?: string;
  schemaType: "Product" | "Service";
  lastVerified: string; gate: CatalogGate; verified: boolean; source?: string;
  npk?: string; analysis?: string; bagWeight?: string; palletQty?: string; toteAvailable?: boolean; bulkAvailable?: boolean; application?: string;
  model?: string; width?: string; hpRange?: string; condition?: "new" | "used"; availability?: string;
  partNumber?: string; fitment?: string; shipping?: string;
  label?: string; sds?: string; restrictedUse?: boolean; complianceNote?: string;
}

const D = "2026-07-17";
export const CATALOG: ProductBase[] = [
  { id: "fert-10-10-10", type: "fertilizer", category: "Fertilizer", subcategory: "Standard Blends",
    name: "10-10-10 Fertilizer", slug: "10-10-10",
    description: "Balanced all-purpose blend for lawns, gardens, and pastures. Available in 50-lb bags or bulk tons, with pickup or delivery.",
    npk: "10-10-10", packaging: ["50-lb bags", "Pallets", "One-ton totes", "Bulk"], bulkAvailable: true, toteAvailable: true,
    pickup: true, delivery: true, priceStatus: "Quote", quoteRequired: true, schemaType: "Product",
    lastVerified: D, gate: "READY FOR STAGING", verified: true, source: "rodgersfertilizer.com (product catalog)" },
  { id: "fert-10-10-10-premium", type: "fertilizer", category: "Fertilizer", subcategory: "Standard Blends",
    name: "10-10-10 Premium", slug: "10-10-10-premium",
    description: "Premium 10-10-10 balanced blend. Confirm the specific premium formulation with the store.",
    npk: "10-10-10", packaging: ["50-lb bags", "Bulk"], bulkAvailable: true,
    pickup: true, delivery: true, priceStatus: "Quote", quoteRequired: true, schemaType: "Product",
    lastVerified: D, gate: "READY FOR OWNER REVIEW", verified: true, source: "rodgersfertilizer.com/product/131/101010-premium" },
  { id: "fert-17-17-17", type: "fertilizer", category: "Fertilizer", subcategory: "Standard Blends",
    name: "17-17-17 Fertilizer", slug: "17-17-17",
    description: "Higher-analysis balanced blend for stronger feeding across lawns, gardens, and pastures.",
    npk: "17-17-17", packaging: ["50-lb bags", "Pallets", "One-ton totes", "Bulk"], bulkAvailable: true, toteAvailable: true,
    pickup: true, delivery: true, priceStatus: "Quote", quoteRequired: true, schemaType: "Product",
    lastVerified: D, gate: "READY FOR STAGING", verified: true, source: "rodgersfertilizer.com/product/34/171717-bagged-fertilizer" },
  { id: "fert-0-0-60", type: "fertilizer", category: "Fertilizer", subcategory: "Nutrients",
    name: "0-0-60 (Potash)", slug: "0-0-60",
    description: "Muriate of potash (0-0-60) for potassium. Available bagged or bulk.",
    npk: "0-0-60", packaging: ["50-lb bags", "Bulk"], bulkAvailable: true,
    pickup: true, delivery: true, priceStatus: "Quote", quoteRequired: true, schemaType: "Product",
    lastVerified: D, gate: "READY FOR STAGING", verified: true, source: "rodgersfertilizer.com/product/1/0060" },
  { id: "seed-oregon-ryegrass", type: "seed", category: "Seed", subcategory: "Grass / Cover Seed",
    name: "Oregon Annual Ryegrass", slug: "oregon-ryegrass",
    description: "Annual ryegrass seed in 50-lb bags. Typically planted September 1 - November 1 in South Carolina.",
    seasonality: "Fall planting (approx. Sep 1 - Nov 1 in SC)", packaging: ["50-lb bags"],
    pickup: true, delivery: true, priceStatus: "Quote", quoteRequired: false, schemaType: "Product",
    lastVerified: D, gate: "READY FOR STAGING", verified: true, source: "rodgersfertilizer.com/product/3/oregon-ryegrass" },
  { id: "seed-browntop-millet", type: "seed", category: "Seed", subcategory: "Food-Plot / Wildlife",
    name: "Browntop Millet", slug: "browntop-millet",
    description: "A leafy annual grass that grows 2-3 feet tall - great for quail and doves.",
    seasonality: "Warm-season", packaging: ["Bagged"],
    pickup: true, delivery: true, priceStatus: "Quote", quoteRequired: false, schemaType: "Product",
    lastVerified: D, gate: "READY FOR STAGING", verified: true, source: "rodgersfertilizer.com/product/73/browntop-millet" },
  { id: "eq-gp-1006nt", type: "equipment", category: "Equipment", subcategory: "Great Plains",
    name: "Great Plains 1006NT No-Till Drill (10 ft)", slug: "great-plains-1006nt-no-till-drill",
    description: "Great Plains 1006NT 10-foot no-till drill. Confirm current availability and configuration with the store.",
    brand: "Great Plains", manufacturer: "Great Plains", model: "1006NT", width: "10 ft",
    pickup: true, delivery: false, priceStatus: "Quote", quoteRequired: true, schemaType: "Product",
    lastVerified: D, gate: "READY FOR OWNER REVIEW", verified: true, availability: "Confirm with store",
    source: "rodgersfertilizer.com/product/32/1006nt-great-plains-drill" },
  { id: "sup-gates", type: "supply", category: "Farm Supplies", subcategory: "Hardware",
    name: "Gates", slug: "gates",
    description: "Farm gates. Sizes and styles confirmed in-store.",
    pickup: true, delivery: false, priceStatus: "In-store", quoteRequired: false, schemaType: "Product",
    lastVerified: D, gate: "READY FOR OWNER REVIEW", verified: true, source: "rodgersfertilizer.com/product/53/gates" },
];

// Seen in the index but ambiguous — held out of the public catalog (DATA REQUIRED).
export const CATALOG_UNRESOLVED = [
  { ref: "rodgersfertilizer.com/product/22/candor", note: "Title 'XLRR-I', slug 'candor' - meaning unclear; confirm what this SKU is." },
];

export const IMPORT_CSV_HEADER = [
  "id","type","category","subcategory","name","slug","description","intendedUse",
  "packaging","minQuantity","seasonality","pickup","delivery","brand","manufacturer",
  "priceStatus","quoteRequired","npk","bagWeight","palletQty","toteAvailable","bulkAvailable",
  "model","width","hpRange","condition","partNumber","fitment","shipping",
  "label","sds","restrictedUse","complianceNote","seoTitle","seoDescription","gate","verified","source","lastVerified",
].join(",");
export const catalogByType = (t: ProductType) => CATALOG.filter((p) => p.type === t);
