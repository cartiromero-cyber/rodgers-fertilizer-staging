import Jsonld from "./Jsonld";
import { faqSchema } from "@/lib/schema";
export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  if (!items?.length) return null;
  return (
    <div className="faq">
      <h2 style={{ marginBottom: 14 }}>Frequently asked</h2>
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <div className="a">{f.a}</div>
        </details>
      ))}
      <Jsonld data={faqSchema(items)} />
    </div>
  );
}
