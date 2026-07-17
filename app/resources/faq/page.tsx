import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteBanner from "@/components/QuoteBanner";
import Jsonld from "@/components/Jsonld";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { FAQ_GROUPS, FAQ_COUNT } from "@/content/faqs";
export const metadata = buildMetadata({ title: "Frequently Asked Questions", description: "Answers about custom fertilizer blending, bulk & bagged product, delivery, seed, Bush Hog equipment and parts, ordering, and more.", path: "/resources/faq" });
export default function Page() {
  const all = FAQ_GROUPS.flatMap((g) => g.items);
  return (
    <>
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }, { name: "FAQ", path: "/resources/faq" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">FAQ Hub</p>
        <h1>Answers to {FAQ_COUNT}+ common questions</h1>
        <hr className="hr" />
        <p className="lead">Fertilizer, blending, bulk &amp; delivery, lime &amp; soil, seed &amp; food plots, equipment, parts, ordering, and local questions.</p>
        {FAQ_GROUPS.map((g) => (
          <div className="faq-cat" key={g.title}>
            <h2>{g.title}</h2>
            <div className="faq">
              {g.items.map((f) => (
                <details key={f.q}><summary>{f.q}</summary><div className="a">{f.a}</div></details>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner /></div>
      <Jsonld data={faqSchema(all)} />
    </>
  );
}
