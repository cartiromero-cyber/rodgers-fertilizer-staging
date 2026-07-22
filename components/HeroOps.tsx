import { RfIcon } from "./Icons";

// "From blend to field" operations graphic — a stylized commercial capabilities
// visualization (blend -> bagged/totes -> pallet -> flatbed -> field). Thin gold
// route line draws once; nodes stagger in. Decorative but labeled for a11y.
const STAGES: { icon: string; label: string }[] = [
  { icon: "blend", label: "Custom blend" },
  { icon: "bag", label: "Bagged & totes" },
  { icon: "pallet", label: "Palletized" },
  { icon: "truck", label: "Flatbed delivery" },
  { icon: "field", label: "To your field" },
];

export default function HeroOps() {
  return (
    <div className="hero-ops" role="img"
      aria-label="Rodgers operation: custom blend, bagged and totes, palletized, flatbed delivery, to your field">
      <span className="ops-eyebrow">From blend to field</span>
      <ol className="ops-track">
        {STAGES.map((s) => (
          <li className="ops-node" key={s.label}>
            <span className="ops-ico"><RfIcon name={s.icon} /></span>
            <span className="ops-label">{s.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
