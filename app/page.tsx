import Link from "next/link";
import Hero from "@/components/Hero";
import CapabilityBand from "@/components/CapabilityBand";
import PathwayCards from "@/components/PathwayCards";
import TrustBand from "@/components/TrustBand";
import ProcessStrip from "@/components/ProcessStrip";
import QuoteBanner from "@/components/QuoteBanner";
import Jsonld from "@/components/Jsonld";
import { site } from "@/content/site";
import { RESOURCES } from "@/content/resources";
import { localBusinessSchema } from "@/lib/schema";

const CAPS = ["Custom blends", "Bulk fertilizer", "50-lb bags", "Pallets", "One-ton totes", "24-ton flatbed delivery", "Spreader-truck service"];
const PATHS = [
  { label: "Fertilizer", href: "/fertilizer", blurb: "Custom blends, bulk, bagged, pallets & totes." },
  { label: "Delivery & Spreading", href: "/delivery", blurb: "Pickup, flatbed delivery, spreader-truck service." },
  { label: "Equipment", href: "/equipment", blurb: "Authorized Bush Hog & Great Plains." },
  { label: "Parts", href: "/parts", blurb: "Bush Hog & rotary-cutter parts, fast." },
  { label: "Seed & Farm Supplies", href: "/seed-farm-supplies", blurb: "Food-plot & pasture seed, feed, supplies." },
  { label: "Quick Reorder", href: "/reorder", blurb: "Existing customer? Reorder in a minute." },
];
const SEGMENTS = ["Commercial farms", "Pasture & cattle", "Hay producers", "Hunters & food plots", "Landscapers", "Gardeners"];

export default function Home() {
  return (
    <>
      <Hero
        title={site.headline}
        subtitle={site.subheadline}
        primary={{ label: "Request a Fertilizer Quote", href: "/request-a-quote" }}
        secondary={{ label: `Call ${site.phone}`, href: site.phoneHref, tel: true }}
      />
      <CapabilityBand items={CAPS} />

      <section className="section">
        <div className="container">
          <p className="eyebrow">Find what you need</p>
          <h2>Built for farmers and buyers who need fast answers</h2>
          <hr className="hr" />
          <div style={{ marginTop: 22 }}><PathwayCards items={PATHS} cols={3} /></div>
        </div>
      </section>

      <section className="section section--field">
        <div className="container cp-grid">
          <div>
            <p className="eyebrow">Custom fertilizer blending</p>
            <h2>Fertilizer built for your fields — not the closest bag</h2>
            <hr className="hr" />
            <p className="lead" style={{ marginTop: 10 }}>
              Tell us your crop, acreage, and target analysis (or send a soil test) and we&rsquo;ll blend to spec —
              bagged, palletized, in one-ton totes, or bulk. Pick it up, we&rsquo;ll deliver it, or we&rsquo;ll spread it.
            </p>
          </div>
          <aside className="aside-card">
            <h4>What to send us</h4>
            <ul className="checklist">
              <li>Crop or intended use</li><li>Acreage</li><li>Target analysis or goal</li>
              <li>Quantity &amp; packaging</li><li>Pickup or delivery</li>
            </ul>
            <Link className="btn btn-gold btn-block btn-lg" href="/request-a-quote?form=fertilizer">Request a Custom Blend</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Delivery &amp; fulfillment</p>
          <h2>Pickup, delivery, or we spread it</h2>
          <hr className="hr" />
          <div className="grid grid-3" style={{ marginTop: 20 }}>
            <div className="card"><h3>Pickup or delivery</h3><p>Customer pickup, or up to 24-ton flatbed delivery of bulk, totes, and pallets.</p></div>
            <div className="card"><h3>Spreader-truck service</h3><p>We bring our spreader truck to your property — or use our pull-behind spreaders with your tractor.</p></div>
            <div className="card"><h3>Packaging options</h3><p>50-lb bags, pallets, one-ton totes, or bulk — whatever fits your operation.</p></div>
          </div>
          <p className="placeholder-note" style={{ marginTop: 14 }}>Delivery areas and minimums are confirmed with our team — service radius and state coverage are not published until confirmed.</p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <p className="eyebrow">Equipment &amp; parts division</p>
          <h2>Authorized Bush Hog &amp; Great Plains — plus the parts to keep running</h2>
          <hr className="hr" />
          <div className="grid grid-4" style={{ marginTop: 20 }}>
            {[
              { l: "Rotary Cutters", h: "/equipment/rotary-cutters" },
              { l: "Bush Hog Equipment", h: "/equipment/bush-hog" },
              { l: "Great Plains", h: "/equipment/great-plains" },
              { l: "Bush Hog Parts", h: "/parts/bush-hog" },
            ].map((c) => (
              <Link key={c.h} href={c.h} className="card card--link"><h3>{c.l}</h3><span className="card-cta">View →</span></Link>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <Link className="btn btn-gold" href="/request-a-quote?form=equipment">Request Equipment Info</Link>
            <Link className="btn btn-dark" href="/parts/request-a-part">Request a Part</Link>
          </div>
        </div>
      </section>

      <section className="section section--field">
        <div className="container">
          <p className="eyebrow">Who we serve</p>
          <h2>One dependable source for the whole operation</h2>
          <hr className="hr" />
          <div className="grid grid-3" style={{ marginTop: 18 }}>
            {SEGMENTS.map((s) => <div className="card" key={s}><h3>{s}</h3></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Rodgers</p>
          <h2>Established, dependable, and easy to do business with</h2>
          <hr className="hr" />
          <div style={{ marginTop: 18 }}><TrustBand /></div>
        </div>
      </section>

      <section className="section section--field">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h2>Seasonal &amp; commercial guides</h2>
          <hr className="hr" />
          <div className="grid grid-4" style={{ marginTop: 18 }}>
            {RESOURCES.slice(0, 4).map((r) => (
              <Link key={r.slug} href="/resources" className="card card--link">
                <h3 style={{ fontSize: "1.05rem" }}>{r.title}</h3>
                <span className="tag" style={{ background: "var(--sand)", color: "var(--muted)", alignSelf: "flex-start" }}>Draft</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--field"><div className="container">
        <p className="eyebrow">Easy to do business with</p>
        <h2>How it works</h2><hr className="hr" />
        <div style={{ marginTop: 18 }}><ProcessStrip /></div>
      </div></section>

      <section className="section"><div className="container"><QuoteBanner /></div></section>
      <Jsonld data={localBusinessSchema()} />
    </>
  );
}
