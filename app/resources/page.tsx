import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteBanner from "@/components/QuoteBanner";
import { buildMetadata } from "@/lib/seo";
import { ARTICLES, type Center } from "@/content/articles";
export const metadata = buildMetadata({ title: "Resources & Guides", description: "Fertilizer, equipment, and seed guides for South Carolina growers — plus calculators and planning tools.", path: "/resources" });
const CENTERS: { key: Center; blurb: string }[] = [
  { key: "Fertilizer", blurb: "N-P-K, custom vs. standard blends, timing, lime, soil testing, and buying guides." },
  { key: "Equipment", blurb: "Choosing and sizing rotary cutters, no-till drills, maintenance, and safety." },
  { key: "Seed", blurb: "Ryegrass and millet planting, food-plot calendars, and SC seeding schedules." },
];
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">Resource Center</p>
        <h1>Guides &amp; tools for South Carolina growers</h1>
        <hr className="hr" />
        <p className="lead">Practical, no-nonsense guidance on fertilizer, equipment, and seed — written to help you make the right call. Plus free calculators and planning tools.</p>

        <div className="pill-row" style={{ marginTop: 16 }}>
          <Link className="pill" href="/tools">Calculators &amp; Tools →</Link>
          <Link className="pill" href="/resources/faq">FAQ Hub →</Link>
          <Link className="pill" href="/service-area">Service Areas →</Link>
        </div>

        {CENTERS.map((c) => (
          <div className="center-group" key={c.key}>
            <h2>{c.key} Guides</h2>
            <p style={{ color: "var(--muted)" }}>{c.blurb}</p>
            <div className="grid grid-3" style={{ marginTop: 14 }}>
              {ARTICLES.filter((a) => a.center === c.key).map((a) => (
                <Link key={a.slug} href={`/resources/${a.slug}`} className="card card--link">
                  <h3 style={{ fontSize: "1.05rem" }}>{a.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".88rem" }}>{a.metaDescription}</p>
                  <span className="card-cta">Read →</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner /></div>
    </>
  );
}
