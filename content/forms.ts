// Six purpose-built lead workflows (Phase 2I). Fields match the Phase 1 spec.
// Each form declares its intent so customers know it is NOT a binding order.
export type FieldType = "text" | "tel" | "email" | "textarea" | "select" | "checkbox" | "file" | "number";
export type Field = {
  name: string; label: string; type: FieldType;
  required?: boolean; options?: string[]; placeholder?: string; help?: string;
};
export type FormSchema = {
  id: FormId; title: string;
  intent: "Quote request" | "Delivery request" | "Order request" | "Availability inquiry";
  description: string; fields: Field[]; consent: string; event: string;
};
export type FormId = "fertilizer" | "delivery" | "equipment" | "parts" | "reorder" | "commercial";

const contact: Field[] = [
  { name: "contactName", label: "Your name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "(864) 555-0123" },
  { name: "email", label: "Email", type: "email", required: false },
];
const consent = "By submitting, you agree we may contact you about this request. This is a request — not a binding order or a published price.";

export const FORMS: Record<FormId, FormSchema> = {
  fertilizer: {
    id: "fertilizer", title: "Fertilizer Quote", intent: "Quote request", event: "quote_submit",
    description: "Tell us your crop and target blend — we'll build a quote. Not a binding order.",
    fields: [
      { name: "customerType", label: "Customer type", type: "select", required: true, options: ["Commercial farm", "Pasture / cattle", "Hay producer", "Food plot / hunting", "Landscaper", "Homeowner / garden", "Dealer / reseller"] },
      { name: "businessName", label: "Business or farm name", type: "text" },
      ...contact,
      { name: "billingAddress", label: "Billing address", type: "text" },
      { name: "deliveryAddress", label: "Delivery address (if different)", type: "text" },
      { name: "cropUse", label: "Crop or intended use", type: "text", required: true },
      { name: "acreage", label: "Acreage", type: "number" },
      { name: "blend", label: "Desired analysis or blend", type: "text", help: "e.g. 10-10-10, or describe your goal" },
      { name: "quantity", label: "Quantity", type: "text", required: true },
      { name: "packaging", label: "Packaging", type: "select", options: ["50-lb bags", "Pallets", "One-ton totes", "Bulk", "Not sure"] },
      { name: "fulfillment", label: "Pickup or delivery", type: "select", required: true, options: ["Pickup", "Delivery", "Spread by Rodgers"] },
      { name: "preferredDate", label: "Preferred date", type: "text" },
      { name: "soilTest", label: "Soil test (optional upload)", type: "file" },
      { name: "repeatRef", label: "Repeat order? Previous blend/reference", type: "text" },
      { name: "contactMethod", label: "Preferred contact method", type: "select", options: ["Phone", "Email", "Text"] },
      { name: "notes", label: "Notes", type: "textarea" },
    ], consent,
  },
  delivery: {
    id: "delivery", title: "Delivery & Spreading Request", intent: "Delivery request", event: "delivery_request_submit",
    description: "Tell us what to bring and where. We'll quote delivery. Not a binding order.",
    fields: [
      { name: "product", label: "Product", type: "text", required: true },
      { name: "quantity", label: "Quantity", type: "text", required: true },
      { name: "acreage", label: "Acreage (if spreading)", type: "number" },
      { name: "deliveryAddress", label: "Delivery address", type: "text", required: true },
      { name: "fieldAccess", label: "Field access", type: "text", help: "Gate width, ground conditions" },
      { name: "spreading", label: "Spreading requested?", type: "select", options: ["No — deliver only", "Yes — spreader truck", "I'll use your pull-behind spreader"] },
      { name: "preferredDate", label: "Desired date", type: "text" },
      ...contact,
      { name: "notes", label: "Access notes", type: "textarea" },
    ], consent,
  },
  equipment: {
    id: "equipment", title: "Equipment Inquiry", intent: "Availability inquiry", event: "equipment_inquiry_submit",
    description: "Tell us your tractor and job — we'll recommend the right machine and confirm details.",
    fields: [
      { name: "equipmentType", label: "Equipment type", type: "select", required: true, options: ["Rotary cutter", "Hay equipment", "Implement", "Great Plains", "Not sure"] },
      { name: "brand", label: "Brand", type: "select", options: ["Bush Hog", "Great Plains", "No preference"] },
      { name: "model", label: "Model (if known)", type: "text" },
      { name: "tractorHp", label: "Tractor horsepower", type: "text" },
      { name: "intendedUse", label: "Intended use", type: "text" },
      { name: "width", label: "Width needed", type: "text" },
      { name: "condition", label: "New or used", type: "select", options: ["New", "Open to used"], help: "Used availability confirmed by our team." },
      { name: "budget", label: "Budget range", type: "select", options: ["Not sure yet", "Under $2,000", "$2,000-$5,000", "$5,000-$10,000", "$10,000+"] },
      { name: "timeframe", label: "Timeframe", type: "select", options: ["Just researching", "Within a month", "This season", "ASAP"] },
      ...contact,
      { name: "notes", label: "Notes", type: "textarea" },
    ], consent,
  },
  parts: {
    id: "parts", title: "Parts Request", intent: "Availability inquiry", event: "parts_request_submit",
    description: "Tell us your model and part — we'll identify it and confirm. Photos help.",
    fields: [
      { name: "brand", label: "Manufacturer / brand", type: "select", required: true, options: ["Bush Hog", "Great Plains", "Other"] },
      { name: "equipmentType", label: "Equipment type", type: "text" },
      { name: "model", label: "Model", type: "text", required: true },
      { name: "serial", label: "Serial number", type: "text" },
      { name: "partNumber", label: "Part number (if known)", type: "text" },
      { name: "description", label: "Part description", type: "textarea", required: true },
      { name: "quantity", label: "Quantity", type: "number" },
      { name: "photos", label: "Photos (upload)", type: "file" },
      { name: "fulfillment", label: "Pickup or shipping", type: "select", options: ["Pickup", "Shipping (if available)"] },
      ...contact,
    ], consent,
  },
  reorder: {
    id: "reorder", title: "Quick Reorder", intent: "Order request", event: "reorder_submit",
    description: "Existing customer? Reorder your blend fast. We'll confirm and schedule.",
    fields: [
      { name: "businessName", label: "Business or customer name", type: "text", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "priorBlend", label: "Previous product or blend", type: "text", required: true },
      { name: "priorRef", label: "Previous order reference (if any)", type: "text" },
      { name: "quantity", label: "Quantity", type: "text", required: true },
      { name: "fulfillment", label: "Pickup or delivery", type: "select", required: true, options: ["Pickup", "Delivery"] },
      { name: "neededDate", label: "Needed date", type: "text" },
      { name: "notes", label: "Notes", type: "textarea" },
    ], consent,
  },
  commercial: {
    id: "commercial", title: "Commercial Account Inquiry", intent: "Availability inquiry", event: "commercial_account_submit",
    description: "For volume buyers. Tell us about your operation — our team confirms account options.",
    fields: [
      { name: "businessName", label: "Business", type: "text", required: true },
      ...contact,
      { name: "taxExempt", label: "Tax-exempt?", type: "select", options: ["Yes", "No", "Not sure"] },
      { name: "estVolume", label: "Estimated purchase volume", type: "text" },
      { name: "categories", label: "Categories purchased", type: "text", help: "Fertilizer, lime, seed, feed, equipment, parts…" },
      { name: "deliveryNeeds", label: "Delivery needs", type: "text" },
      { name: "states", label: "States served", type: "text" },
      { name: "creditRequest", label: "Requesting a credit/account?", type: "select", options: ["Yes", "No"] },
      { name: "notes", label: "Notes", type: "textarea" },
    ], consent,
  },
};
