import Link from "next/link";
import { site } from "@/content/site";
export default function QuoteBanner({
  title = "Ready to talk fertilizer, delivery, equipment, or parts?",
  cta = { label: "Request a Quote", href: "/request-a-quote" },
}: { title?: string; cta?: { label: string; href: string } }) {
  return (
    <div className="quote-banner">
      <div>
        <h2>{title}</h2>
        <p>Tell us what you need — we&rsquo;ll get you a quote or a callback. Or call {site.phone}.</p>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link className="btn btn-gold btn-lg" href={cta.href}>{cta.label}</Link>
        <a className="btn btn-dark btn-lg" href={site.phoneHref} data-track="call_click">Call {site.phone}</a>
      </div>
    </div>
  );
}
