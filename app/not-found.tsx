import Link from "next/link";
import { site } from "@/content/site";
export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: "center" }}>
      <p className="eyebrow">Page not found</p>
      <h1>We couldn&rsquo;t find that page.</h1>
      <hr className="hr" style={{ marginInline: "auto" }} />
      <p className="lead" style={{ marginInline: "auto" }}>Try the fertilizer catalog, or tell us what you need and we&rsquo;ll help.</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
        <Link className="btn btn-primary" href="/fertilizer">Browse Fertilizer</Link>
        <Link className="btn btn-ghost" href="/request-a-quote">Request a Quote</Link>
        <a className="btn btn-ghost" href={site.phoneHref} data-track="call_click">Call {site.phone}</a>
      </div>
    </div>
  );
}
