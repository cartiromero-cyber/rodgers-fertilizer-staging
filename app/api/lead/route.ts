import { NextResponse } from "next/server";
import { IS_STAGING } from "@/lib/env";
import { classifyLead } from "@/lib/leadScoring";

// Central lead intake for all six workflows + Phase 4 auto-classification.
// STAGING: routes to a test inbox only (or logs to console if no email provider).
export async function POST(req: Request) {
  let body: any;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 }); }
  const { formType, title, fields, meta } = body || {};
  if (!formType || !fields) return NextResponse.json({ ok: false, error: "Missing form data" }, { status: 400 });
  if (fields.company_website) return NextResponse.json({ ok: true }); // honeypot

  const testInbox = process.env.LEAD_TEST_INBOX || "staging-test@example.com";
  const emailKey = process.env.EMAIL_API_KEY;
  const classification = classifyLead(formType, fields);

  const lead = {
    receivedAt: new Date().toISOString(),
    formType, title,
    // --- CRM classification (Phase 4) ---
    leadType: classification.type,
    priority: classification.priority,
    valueBand: classification.valueBand,
    urgency: classification.urgency,
    reasons: classification.reasons,
    // --- attribution ---
    source: meta?.sourceUrl, utm: meta?.utm || {},
    fields,
    // --- routing / pipeline ---
    assignedOwner: "UNASSIGNED (see Owner Review Packet §6)",
    status: "New",
  };

  if (!emailKey) console.log("[LEAD]", JSON.stringify(lead));
  else console.log("[LEAD->email]", testInbox, JSON.stringify(lead));

  return NextResponse.json({ ok: true, staging: IS_STAGING, classification });
}
