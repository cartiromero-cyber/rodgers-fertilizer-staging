import FormsHub from "@/components/FormsHub";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Quick Reorder", description: "Existing customer? Reorder your blend fast — we'll confirm and schedule.", path: "/reorder" });
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Quick Reorder", path: "/reorder" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">Existing customers</p>
        <h1>Quick Reorder</h1>
        <hr className="hr" />
        <p className="lead">Reorder your previous blend in under a minute. We&rsquo;ll confirm and schedule pickup or delivery.</p>
        <div style={{ marginTop: 24 }}><FormsHub initial="reorder" /></div>
      </div>
    </>
  );
}
