"use client";
// Analytics event map (Phase 2L). Events fire to GA4 (window.gtag) when an ID
// is configured; otherwise they no-op. No PII is sent.
export type RfEvent =
  | "call_click" | "email_click" | "directions_click"
  | "quote_start" | "quote_submit"
  | "delivery_request_submit" | "equipment_inquiry_submit"
  | "parts_request_submit" | "reorder_submit" | "commercial_account_submit"
  | "form_error";

export function track(event: RfEvent, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", event, params);
  else if (process.env.NODE_ENV !== "production") console.debug("[analytics]", event, params);
}
