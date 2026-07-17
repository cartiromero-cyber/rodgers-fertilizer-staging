import Link from "next/link";
import { site, primaryNav } from "@/content/site";
export default function Footer() {
  const a = site.address;
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <b className="brand-f">RODGERS FERTILIZER</b>
            <p style={{ marginTop: 8 }}>Custom-blended fertilizer, bulk &amp; bagged distribution, and Bush Hog equipment &amp; parts. Family-owned in Saluda since {site.since}.</p>
          </div>
          <div>
            <h4>Shop</h4>
            {primaryNav.slice(0, 5).map((l) => (
              <div key={l.href}><Link href={l.href}>{l.label}</Link></div>
            ))}
          </div>
          <div>
            <h4>Do business</h4>
            <div><Link href="/request-a-quote">Request a Quote</Link></div>
            <div><Link href="/reorder">Quick Reorder</Link></div>
            <div><Link href="/parts/request-a-part">Request a Part</Link></div>
            <div><Link href="/about">About</Link></div>
            <div><Link href="/resources">Resources & Guides</Link></div>
            <div><Link href="/tools">Calculators</Link></div>
            <div><Link href="/service-area">Areas We Serve</Link></div>
          </div>
          <div>
            <h4>Visit &amp; call</h4>
            <div>{a.street}</div>
            <div>{a.city}, {a.state} {a.zip}</div>
            <div style={{ marginTop: 6 }}>
              <a href={site.phoneHref} data-track="call_click"><b>{site.phone}</b></a>
            </div>
            <div><a href={site.phoneAltHref} data-track="call_click">{site.phoneAlt}</a></div>
            <div style={{ marginTop: 6 }}>{site.hours}</div>
            <div style={{ marginTop: 6 }}>
              <a data-track="directions_click" target="_blank" rel="noopener noreferrer"
                 href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`}>Get directions</a>
            </div>
          </div>
        </div>
        <div className="base">
          <span>© {new Date().getFullYear()} {site.legalName} · Saluda, South Carolina</span>
          <span>Authorized Bush Hog dealer</span>
        </div>
      </div>
    </footer>
  );
}
