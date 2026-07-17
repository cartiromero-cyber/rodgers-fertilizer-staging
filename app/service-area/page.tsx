import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteBanner from "@/components/QuoteBanner";
import { buildMetadata } from "@/lib/seo";
import { AREAS } from "@/content/serviceAreas";
export const metadata = buildMetadata({ title: "Areas We Serve", description: "Fertilizer, lime, seed, and Bush Hog equipment for growers around Saluda, Newberry, Greenwood, and Lexington, South Carolina.", path: "/service-area" });
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Areas We Serve", path: "/service-area" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">Areas we serve</p>
        <h1>Serving growers across the Midlands from Saluda</h1>
        <hr className="hr" />
        <p className="lead">We&rsquo;re based in Saluda and work with farmers, landowners, and food-plot managers across the surrounding area. Tell us where you are and we&rsquo;ll talk through pickup and delivery options.</p>
        <div className="grid grid-2" style={{ marginTop: 22 }}>
          {AREAS.map((a) => (
            <Link key={a.slug} href={`/service-area/${a.slug}`} className="card card--link">
              <h3>{a.city}, SC</h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>{a.county}</p>
              <span className="card-cta">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner /></div>
    </>
  );
}
