import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
export const metadata = buildMetadata({ title: "Contact & Directions", description: "Call, visit, or get directions to Rodgers Fertilizer at 409 N Main St, Saluda, SC. Open Mon–Fri 8–5.", path: "/contact" });
export default function Page() {
  const a = site.address;
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">Contact &amp; directions</p>
        <h1>Call, visit, or request a quote</h1>
        <hr className="hr" />
        <div className="cp-grid" style={{ marginTop: 22 }}>
          <div className="stack">
            <div><b>Address</b><div>{a.street}, {a.city}, {a.state} {a.zip}</div></div>
            <div><b>Phone</b><div><a href={site.phoneHref} data-track="call_click">{site.phone}</a> · <a href={site.phoneAltHref} data-track="call_click">{site.phoneAlt}</a></div></div>
            <div><b>Hours</b><div>{site.hours}</div><div className="help" style={{ color: "var(--muted)", fontSize: ".85rem" }}>Hours shown per our records — please call to confirm holiday hours.</div></div>
            <a className="btn btn-primary" data-track="directions_click" target="_blank" rel="noopener noreferrer" href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`}>Get Directions</a>
          </div>
          <aside className="aside-card">
            <h4>Ready to order?</h4>
            <Link className="btn btn-gold btn-block btn-lg" href="/request-a-quote">Request a Quote</Link>
            <Link className="btn btn-ghost btn-block" href="/reorder">Quick Reorder</Link>
            <Link className="btn btn-ghost btn-block" href="/parts/request-a-part">Request a Part</Link>
          </aside>
        </div>
      </div>
    </>
  );
}
