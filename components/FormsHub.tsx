"use client";
import { useState } from "react";
import { FORMS, type FormId, type Field } from "@/content/forms";
import { track, type RfEvent } from "@/lib/analytics";

const ORDER: FormId[] = ["fertilizer", "delivery", "equipment", "parts", "reorder", "commercial"];

export default function FormsHub({ initial = "fertilizer" }: { initial?: FormId }) {
  const [active, setActive] = useState<FormId>(ORDER.includes(initial) ? initial : "fertilizer");
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  const schema = FORMS[active];
  const set = (name: string, v: string) => setValues((s) => ({ ...s, [name]: v }));

  function switchForm(id: FormId) {
    setActive(id); setValues({}); setStatus("idle"); setMsg("");
    if (id === "fertilizer") track("quote_start");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // honeypot
    if (values["company_website"]) { setStatus("ok"); return; }
    const missing = schema.fields.filter((f) => f.required && !values[f.name]?.trim());
    if (missing.length) { setStatus("err"); setMsg(`Please complete: ${missing.map((m) => m.label).join(", ")}.`); track("form_error", { form: active }); return; }
    setStatus("sending"); setMsg("");
    const utm: Record<string, string> = {};
    try {
      new URLSearchParams(window.location.search).forEach((v, k) => { if (k.startsWith("utm_")) utm[k] = v; });
    } catch {}
    try {
      const res = await fetch("/api/lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: active, intent: schema.intent, title: schema.title,
          fields: values, meta: { sourceUrl: window.location.href, utm, timestamp: new Date().toISOString() },
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("ok"); setValues({}); track(schema.event as RfEvent, { form: active });
      } else { setStatus("err"); setMsg(data.error || "Something went wrong. Please call us."); }
    } catch { setStatus("err"); setMsg("Network error. Please call us at the number above."); }
  }

  return (
    <div className="form-wrap">
      <div className="form-tabs" role="tablist" aria-label="Choose a request">
        {ORDER.map((id) => (
          <button key={id} type="button" className="form-tab" aria-pressed={active === id} onClick={() => switchForm(id)}>
            {FORMS[id].title}
          </button>
        ))}
      </div>

      <h2>{schema.title}</h2>
      <p style={{ color: "var(--muted)", margin: "6px 0 4px" }}>{schema.description}</p>
      <p className="eyebrow" style={{ color: "var(--info)" }}>{schema.intent}</p>

      {status === "ok" && (
        <div className="form-status form-status--ok" role="status">
          Thanks — your {schema.title.toLowerCase()} was received. We&rsquo;ll follow up. (Staging: routed to test inbox only.)
        </div>
      )}
      {status === "err" && <div className="form-status form-status--err" role="alert">{msg}</div>}

      <form onSubmit={onSubmit} noValidate>
        <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
          name="company_website" value={values["company_website"] || ""} onChange={(e) => set("company_website", e.target.value)} />
        <div className="form-grid">
          {schema.fields.map((f) => <FieldRow key={f.name} f={f} value={values[f.name] || ""} onChange={(v) => set(f.name, v)} />)}
        </div>
        <p className="consent">{schema.consent}</p>
        <button className="btn btn-gold btn-lg" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : `Submit ${schema.title}`}
        </button>
      </form>
    </div>
  );
}

function FieldRow({ f, value, onChange }: { f: Field; value: string; onChange: (v: string) => void }) {
  const id = `f_${f.name}`;
  const full = f.type === "textarea" || f.type === "file";
  return (
    <div className={"field" + (full ? " field--full" : "")}>
      <label htmlFor={id}>{f.label} {f.required && <span className="req">*</span>}</label>
      {f.type === "textarea" ? (
        <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : f.type === "select" ? (
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Select…</option>
          {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : f.type === "file" ? (
        <input id={id} type="file" onChange={(e) => onChange(e.target.files?.[0]?.name || "")} />
      ) : (
        <input id={id} type={f.type} value={value} placeholder={f.placeholder}
          onChange={(e) => onChange(e.target.value)} />
      )}
      {f.help && <span className="help">{f.help}</span>}
    </div>
  );
}
