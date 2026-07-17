import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import FAQ from "./FAQ";
import QuoteBanner from "./QuoteBanner";
import Jsonld from "./Jsonld";
import { SITE_URL } from "@/lib/env";
import type { Article } from "@/content/articles";

export default function ArticlePage({ a }: { a: Article }) {
  const path = `/resources/${a.slug}`;
  return (
    <article>
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }, { name: a.title, path }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <div className="article">
          <p className="eyebrow">{a.center} Resource</p>
          <h1>{a.title}</h1>
          <hr className="hr" />
          <p className="rc-meta">Educational guide · updated {a.updated}</p>
          <p className="lead" style={{ marginBottom: 8 }}>{a.intro}</p>

          {a.blocks.map((b, i) => {
            if (b.t === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.t === "p") return <p key={i}>{b.text}</p>;
            if (b.t === "note") return <div key={i} className="rc-note"><b>Note.</b> {b.text}</div>;
            return <ul key={i} className="checklist" style={{ margin: "10px 0 14px" }}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
          })}

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "22px 0" }}>
            <Link className="btn btn-gold" href={a.cta.href}>{a.cta.label}</Link>
          </div>

          {a.related?.length ? (
            <p style={{ marginTop: 8 }}>
              <strong>Related:</strong>{" "}
              {a.related.map((r, i) => <span key={r.href}>{i > 0 ? " · " : ""}<Link href={r.href}>{r.label}</Link></span>)}
            </p>
          ) : null}

          <div style={{ marginTop: 30 }}><FAQ items={a.faqs} /></div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner cta={a.cta} /></div>
      <Jsonld data={{
        "@context": "https://schema.org", "@type": "Article",
        headline: a.title, description: a.metaDescription,
        datePublished: a.updated, dateModified: a.updated,
        author: { "@type": "Organization", name: "Rodgers Fertilizer LLC" },
        publisher: { "@type": "Organization", name: "Rodgers Fertilizer LLC" },
        mainEntityOfPage: `${SITE_URL}${path}`,
      }} />
    </article>
  );
}
