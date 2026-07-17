import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteBanner from "@/components/QuoteBanner";
import { buildMetadata } from "@/lib/seo";
import { AREAS, getArea } from "@/content/serviceAreas";
import { site } from "@/content/site";
export function generateStaticParams() { return AREAS.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArea(params.slug);
  if (!a) return {};
  return buildMetadata({ title: `Fertilizer & Farm Supply Near ${a.city}, SC`, description: `Custom fertilizer blends, bulk & bagged product, lime, seed, and Bush Hog equipment & parts for growers around ${a.city} and ${a.county}. Family-owned in Saluda since 1976.`, path: `/service-area/${a.slug}` });
}
export default function Page({ params }: { params: { slug: string } }) {
  const a = getArea(params.slug);
  if (!a) notFound();
  return (
    <>
      <Breadcrumbs items={[{ name: "Areas We Serve", path: "/service-area" }, { name: `${a.city}, SC`, path: `/service-area/${a.slug}` }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <div className="article">
          <p className="eyebrow">Near {a.city}, {a.county}</p>
          <h1>Fertilizer &amp; Farm Supply Near {a.city}, SC</h1>
          <hr className="hr" />
          <p className="lead">{a.intro}</p>
          <div style={{ marginTop: 16 }} className="stack">
            {a.local.map((p) => <p key={p}>{p}</p>)}
          </div>
          <h2 style={{ marginTop: 24 }}>What we offer</h2>
          <ul className="checklist" style={{ margin: "10px 0 14px" }}>
            <li>Custom-blended fertilizer, plus standard blends (bags, pallets, one-ton totes, bulk)</li>
            <li>Agricultural lime and soil products</li>
            <li>Seasonal seed, including food-plot and grass seed</li>
            <li>Authorized Bush Hog dealer — equipment and parts; plus Great Plains equipment</li>
            <li>Customer pickup at our Saluda store, and delivery options</li>
          </ul>
          <div className="rc-note"><b>Note.</b> We&rsquo;re located at {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}. Tell us your location and we&rsquo;ll talk through pickup and delivery options for your operation.</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <Link className="btn btn-gold" href="/request-a-quote">Request a Quote</Link>
            <a className="btn btn-ghost" href={site.phoneHref} data-track="call_click">Call {site.phone}</a>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner /></div>
    </>
  );
}
