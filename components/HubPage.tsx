import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import PathwayCards from "./PathwayCards";
import QuoteBanner from "./QuoteBanner";
import { sectionMeta } from "@/content/site";
import { getLeaves } from "@/content/pages";
import { CATALOG, type ProductType } from "@/content/catalog";

// Which catalog product types belong on each section hub.
const SECTION_TYPES: Record<string, ProductType[]> = {
  fertilizer: ["fertilizer"],
  "seed-farm-supplies": ["seed", "feed", "supply"],
  equipment: ["equipment"],
  parts: ["part"],
  delivery: [],
};

export default function HubPage({ section }: { section: string }) {
  const sec = sectionMeta[section];
  const leaves = getLeaves(section);
  const items = leaves.map((l) => ({ label: l.h1, href: `/${l.section}/${l.slug}`, blurb: l.metaDescription }));
  const types = SECTION_TYPES[section] ?? [];
  const products = CATALOG.filter((p) => types.includes(p.type));

  return (
    <>
      <Breadcrumbs items={[{ name: sec?.title ?? section, path: `/${section}` }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">{sec?.title ?? section}</p>
        <h1>{sec?.title ?? section}</h1>
        <hr className="hr" />
        <p className="lead">{sec?.blurb}</p>
        <div style={{ marginTop: 28 }}><PathwayCards items={items} cols={3} /></div>

        {products.length > 0 && (
          <div style={{ marginTop: 44 }}>
            <h2>Products we carry</h2>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>
              A selection migrated from our current catalog. Ask us for anything you don&rsquo;t see — the full
              lineup is available in-store and by phone.
            </p>
            <div className="grid grid-3" style={{ marginTop: 18 }}>
              {products.map((p) => (
                <div className="card" key={p.id}>
                  <h3 style={{ fontSize: "1.08rem" }}>{p.name}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".92rem" }}>{p.description}</p>
                  {p.packaging?.length ? (
                    <p style={{ fontSize: ".82rem", color: "var(--faint)" }}>{p.packaging.join(" · ")}</p>
                  ) : null}
                  <Link className="card-cta" href="/request-a-quote">Request a quote →</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner /></div>
    </>
  );
}
