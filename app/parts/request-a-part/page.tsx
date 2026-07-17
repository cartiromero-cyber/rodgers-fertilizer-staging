import FormsHub from "@/components/FormsHub";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Request a Part", description: "Tell us your model and part number (photos help) and we'll identify and confirm the exact Bush Hog part.", path: "/parts/request-a-part" });
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Parts", path: "/parts" }, { name: "Request a Part", path: "/parts/request-a-part" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">Parts</p>
        <h1>Request a Part</h1>
        <hr className="hr" />
        <p className="lead">Send your model and part number — or a photo — and we&rsquo;ll identify the exact part and confirm availability.</p>
        <div style={{ marginTop: 24 }}><FormsHub initial="parts" /></div>
      </div>
    </>
  );
}
