import { site } from "@/content/site";
// Verified proof only. Photo/review slots are clearly marked placeholders.
export default function TrustBand() {
  const items = [
    { b: `Since ${site.since}`, s: "Family-owned and operated in Saluda, SC" },
    { b: "Authorized Bush Hog dealer", s: "Equipment & parts support" },
    { b: "Custom blending", s: "Bulk, bags, pallets & one-ton totes" },
    { b: "Real people", s: `${site.phone} · ${site.hours}` },
  ];
  return (
    <div className="stack">
      <div className="trust">
        {items.map((it) => (
          <div className="item" key={it.b}><b>{it.b}</b><span>{it.s}</span></div>
        ))}
      </div>
      <p className="placeholder-note">
        Placeholder — reviews, staff, facility, blending/bagging, and delivery-truck photography to be added from
        the company (owner to provide). Testimonials and review counts are not shown until approved and verified.
      </p>
    </div>
  );
}
