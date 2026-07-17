// Phase 4 — automatic lead classification, priority scoring, deal-value band, and
// follow-up urgency. Pure function used by /api/lead so every submission is
// classified for the CRM. Heuristic and transparent (returns `reasons`).
export type LeadType = "Fertilizer" | "Delivery" | "Equipment" | "Parts" | "Seed" | "Commercial" | "General";
export type ValueBand = "$" | "$$" | "$$$" | "$$$$";
export interface LeadClass {
  type: LeadType; priority: number; valueBand: ValueBand;
  urgency: "High" | "Medium" | "Low"; reasons: string[];
}
const TYPE_MAP: Record<string, LeadType> = {
  fertilizer: "Fertilizer", delivery: "Delivery", equipment: "Equipment",
  parts: "Parts", reorder: "Fertilizer", commercial: "Commercial",
};
export function classifyLead(formType: string, f: Record<string, string> = {}): LeadClass {
  const type = TYPE_MAP[formType] ?? "General";
  const reasons: string[] = [];
  const base: Record<LeadType, number> = { Commercial: 30, Equipment: 25, Fertilizer: 20, Delivery: 20, Parts: 15, Seed: 8, General: 5 };
  let score = 40 + base[type];
  const has = (k: string) => !!(f[k] && String(f[k]).trim());
  const num = (k: string) => parseFloat(String(f[k] || "").replace(/[^0-9.]/g, "")) || 0;
  const pack = (f.packaging || "") + " " + (f.quantity || "");

  if (num("acreage") >= 50) { score += 12; reasons.push("50+ acres"); }
  else if (has("acreage")) score += 5;
  if (has("quantity")) { score += 6; reasons.push("quantity specified"); }
  if (/bulk|ton|tote|pallet/i.test(pack)) { score += 8; reasons.push("bulk/volume"); }
  if (f.fulfillment === "Delivery" || formType === "delivery") { score += 6; reasons.push("delivery"); }
  if (has("soilTest")) { score += 6; reasons.push("soil test provided"); }
  if (formType === "commercial") { score += 10; reasons.push("commercial account"); }
  if (has("repeatRef") || formType === "reorder") { score += 8; reasons.push("repeat customer"); }
  if (has("model") || has("partNumber")) { score += 5; reasons.push("specific part/model"); }
  if (/10,?000\+|\$10/.test(f.budget || "")) { score += 12; reasons.push("high budget"); }
  score = Math.max(1, Math.min(100, score));

  let valueBand: ValueBand = "$";
  if (type === "Commercial" || /bulk|ton|tote/i.test(pack) || num("acreage") >= 100) valueBand = "$$$$";
  else if (type === "Equipment" || num("acreage") >= 30 || /pallet/i.test(pack)) valueBand = "$$$";
  else if (["Fertilizer", "Delivery", "Parts"].includes(type)) valueBand = "$$";

  let urgency: "High" | "Medium" | "Low" = "Medium";
  const dt = (f.preferredDate || f.neededDate || "").toLowerCase();
  if (/asap|today|tomorrow|this week|urgent/.test(dt) || formType === "parts") urgency = "High";
  else if (dt) urgency = "Medium"; else urgency = "Low";
  if (score >= 75) urgency = urgency === "Low" ? "Medium" : "High";

  return { type, priority: score, valueBand, urgency, reasons };
}
