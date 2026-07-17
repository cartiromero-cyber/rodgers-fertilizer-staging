import FormsHub from "@/components/FormsHub";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { FormId } from "@/content/forms";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Request a Quote", description: "Request a fertilizer quote, delivery pricing, equipment info, a part, a reorder, or a commercial account. A request — not a binding order.", path: "/request-a-quote" });
const VALID: FormId[] = ["fertilizer", "delivery", "equipment", "parts", "reorder", "commercial"];
export default function Page({ searchParams }: { searchParams: { form?: string } }) {
  const f = searchParams?.form && VALID.includes(searchParams.form as FormId) ? (searchParams.form as FormId) : "fertilizer";
  return (
    <>
      <Breadcrumbs items={[{ name: "Request a Quote", path: "/request-a-quote" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">Do business with us</p>
        <h1>Request a Quote</h1>
        <hr className="hr" />
        <p className="lead">Pick the request that fits. Everything here is a request — not a binding order — and we never publish prices online.</p>
        <div style={{ marginTop: 24 }}><FormsHub initial={f} /></div>
      </div>
    </>
  );
}
