// Resource-center stubs (Phase 2E §9). DRAFT — expertise review required before
// production. Titles map to the Phase 1 content clusters.
export type Resource = { title: string; slug: string; cluster: string; status: "DRAFT" };
export const RESOURCES: Resource[] = [
  { title: "Understanding N-P-K", slug: "understanding-npk", cluster: "Custom Fertilizer & N-P-K", status: "DRAFT" },
  { title: "Custom vs. Standard Fertilizer Blends", slug: "custom-vs-standard", cluster: "Custom Fertilizer & N-P-K", status: "DRAFT" },
  { title: "How Much Fertilizer per Acre", slug: "fertilizer-per-acre", cluster: "Custom Fertilizer & N-P-K", status: "DRAFT" },
  { title: "Bulk vs. Bagged Fertilizer", slug: "bulk-vs-bagged", cluster: "Bulk Delivery & Spreading", status: "DRAFT" },
  { title: "Pasture & Hay Fertility in South Carolina", slug: "pasture-hay-fertility", cluster: "Pasture & Hay", status: "DRAFT" },
  { title: "Lime Timing for Pasture", slug: "lime-timing-pasture", cluster: "Pasture & Hay", status: "DRAFT" },
  { title: "South Carolina Food-Plot Guide", slug: "sc-food-plot-guide", cluster: "Food Plots", status: "DRAFT" },
  { title: "Choosing a Rotary Cutter by Horsepower", slug: "rotary-cutter-by-hp", cluster: "Bush Hog Buying Guide", status: "DRAFT" },
];
