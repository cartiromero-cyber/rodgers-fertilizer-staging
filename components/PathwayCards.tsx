import Link from "next/link";
export default function PathwayCards({
  heading, items, cols = 3,
}: {
  heading?: string;
  items: { label: string; href: string; blurb: string }[];
  cols?: 2 | 3 | 4;
}) {
  return (
    <div>
      {heading && <h2 style={{ marginBottom: 16 }}>{heading}</h2>}
      <div className={`grid grid-${cols}`}>
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="card card--link">
            <h3>{it.label}</h3>
            <p style={{ color: "var(--muted)" }}>{it.blurb}</p>
            <span className="card-cta">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
