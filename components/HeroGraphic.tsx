// Subtle "capabilities flow" graphic for the hero: Blend -> Bag -> Pallet ->
// Truck -> Field. Line-based, brand colors, on-dark. The connecting line draws
// once on load (via CSS class `flow`); disabled under reduced-motion. Decorative.
const NODES = ["Blend", "Bag", "Pallet", "Truck", "Field"];

export default function HeroGraphic() {
  const xs = [60, 195, 330, 465, 600];
  const cy = 38;
  return (
    <svg className="hero-graphic" viewBox="0 0 660 96" width="100%" role="img"
      aria-label="How Rodgers works: blend, bag, palletize, deliver, to your field">
      <path className="flow glyph" d="M60 38 H600" pathLength={1} />
      {xs.map((x, i) => (
        <g className="node" key={NODES[i]}>
          <circle cx={x} cy={cy} r="17" className="glyph" />
          <circle cx={x} cy={cy} r="3.5" className="dot" />
          <text x={x} y="80" textAnchor="middle">{NODES[i]}</text>
        </g>
      ))}
    </svg>
  );
}
