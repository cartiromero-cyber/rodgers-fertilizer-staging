import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteBanner from "@/components/QuoteBanner";
import TrustBand from "@/components/TrustBand";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
export const metadata = buildMetadata({ title: "About", description: "Family-owned in Saluda, SC since 1976 - custom fertilizer blending, distribution, and authorized Bush Hog equipment & parts.", path: "/about" });
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">About Rodgers Fertilizer</p>
        <h1>Serving Saluda and the Southeast since {site.since}</h1>
        <hr className="hr" />
        {/* Migrated verbatim intent from the live About page. */}
        <p className="lead">
          Rodgers Fertilizer LLC is a family-owned and operated business in Saluda, South Carolina. We opened
          our doors in {site.since} to serve the local community by providing fertilizer and lime to farmers
          and backyard growers.
        </p>
        <div style={{ marginTop: 18 }} className="stack">
          <p>
            Today we blend and deliver custom fertilizer, lime, seed, and feed, and our bagging operation
            serves communities across the Southeast with bagged fertilizer. We&rsquo;re also an authorized
            Bush Hog dealer for agricultural equipment and parts, and we carry Great Plains equipment.
          </p>
          <p>
            From custom bulk blends and flatbed delivery to seasonal food-plot seed, our goal every day is
            simple: provide the best customer service by helping our customers any way we can.
          </p>
          <p className="placeholder-note">
            Migrated from the company&rsquo;s current About page and public listings. Additional details
            &mdash; generations involved, milestones, staff, and facility/operations photography &mdash; are
            owner-confirm items (nothing here is invented).
          </p>
        </div>
        <div style={{ marginTop: 24 }}><TrustBand /></div>
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner /></div>
    </>
  );
}
