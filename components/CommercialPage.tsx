import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import GateBadge from "./GateBadge";
import FAQ from "./FAQ";
import QuoteBanner from "./QuoteBanner";
import Jsonld from "./Jsonld";
import { site, sectionMeta } from "@/content/site";
import { serviceSchema } from "@/lib/schema";
import type { Page } from "@/content/pages";

export default function CommercialPage({ page }: { page: Page }) {
  const sec = sectionMeta[page.section];
  const path = `/${page.section}/${page.slug}`;
  return (
    <article>
      <Breadcrumbs items={[{ name: sec?.title ?? page.section, path: `/${page.section}` }, { name: page.h1, path }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <GateBadge gate={page.gate} deps={page.ownerDeps} />
        <p className="eyebrow">{sec?.title ?? page.section}</p>
        <h1>{page.h1}</h1>
        <hr className="hr" />
        <p className="lead">{page.positioning}</p>

        <div className="cp-grid" style={{ marginTop: 26 }}>
          <div>
            <p className="subhead">Who it&rsquo;s for</p>
            <p>{page.audience}</p>

            <p className="subhead">What we offer</p>
            <ul className="checklist">{page.fulfillment.map((f) => <li key={f}>{f}</li>)}</ul>

            <p className="subhead">How it works</p>
            <ol className="steps">{page.process.map((s) => <li key={s}>{s}</li>)}</ol>

            {page.quoteInfo && (
              <>
                <p className="subhead">What to include on your request</p>
                <ul className="checklist">{page.quoteInfo.map((q) => <li key={q}>{q}</li>)}</ul>
              </>
            )}
          </div>

          <aside className="aside-card">
            <Link className="btn btn-gold btn-block btn-lg" href={page.primaryCta.href}>{page.primaryCta.label}</Link>
            <a className="btn btn-ghost btn-block" href={site.phoneHref} data-track="call_click">Call {site.phone}</a>
            {page.related?.length ? (
              <div>
                <h4>Related</h4>
                {page.related.map((r) => <div key={r.href} style={{ marginTop: 4 }}><Link href={r.href}>{r.label}</Link></div>)}
              </div>
            ) : null}
            {page.resources?.length ? (
              <div>
                <h4>Guides</h4>
                {page.resources.map((r) => <div key={r.label} style={{ marginTop: 4 }}><Link href={r.href}>{r.label}</Link></div>)}
              </div>
            ) : null}
          </aside>
        </div>

        <div style={{ marginTop: 36 }}><FAQ items={page.faq} /></div>
      </div>

      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner cta={page.primaryCta} /></div>
      <Jsonld data={serviceSchema(page.h1, page.metaDescription, path)} />
    </article>
  );
}
