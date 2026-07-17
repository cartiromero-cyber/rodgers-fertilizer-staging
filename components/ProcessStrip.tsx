// Process-transparency / trust element: shows how easy it is to do business.
export default function ProcessStrip() {
  const steps = [
    { n: 1, h: "Tell us what you need", p: "Your crop and goal, tonnage or product, and pickup or delivery — by form or a quick call." },
    { n: 2, h: "We build & quote it", p: "We blend to spec (or pull your part / spec your equipment) and get you a straight quote — no posted-price guesswork." },
    { n: 3, h: "Pick up or we deliver", p: "Grab it at our Saluda store, or we deliver — up to 24-ton flatbed loads, and we can even spread it." },
  ];
  return (
    <div className="process">
      {steps.map((s) => (
        <div className="step" key={s.n}>
          <div className="n">{s.n}</div>
          <h3>{s.h}</h3>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>{s.p}</p>
        </div>
      ))}
    </div>
  );
}
