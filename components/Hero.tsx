import Link from "next/link";

// Agricultural hero backdrop: a branded, lightweight SVG of rolling farmland
// with a gold horizon glow and furrow lines — in the site palette. A drop-in
// photo slot (`/public/media/hero.jpg`) overrides the graphic automatically when
// a real Rodgers photo is added (no code change needed).
function HeroField() {
  return (
    <svg className="hero-field" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="hf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16120e" />
          <stop offset="1" stopColor="#221a12" />
        </linearGradient>
        <radialGradient id="hf-sun" cx="0.74" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#c79a4e" stopOpacity="0.45" />
          <stop offset="1" stopColor="#c79a4e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#hf-sky)" />
      <rect width="1600" height="900" fill="url(#hf-sun)" />
      <path d="M0 470 Q400 432 800 460 T1600 452 V900 H0 Z" fill="#2a422b" />
      <path d="M0 470 Q400 432 800 460 T1600 452" fill="none" stroke="#d9b873" strokeOpacity="0.35" strokeWidth="2" />
      <path d="M0 545 Q520 505 1010 548 T1600 538 V900 H0 Z" fill="#2f5d34" />
      <path d="M0 648 Q450 616 900 654 T1600 644 V900 H0 Z" fill="#234826" />
      <g stroke="#193420" strokeWidth="3" opacity="0.55">
        <path d="M810 654 L100 900" />
        <path d="M810 654 L340 900" />
        <path d="M810 654 L580 900" />
        <path d="M810 654 L840 900" />
        <path d="M810 654 L1090 900" />
        <path d="M810 654 L1340 900" />
      </g>
    </svg>
  );
}

export default function Hero({
  title, subtitle, primary, secondary,
}: {
  title: string; subtitle: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string; tel?: boolean };
}) {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <HeroField />
        <div className="hero-photo" />
        <div className="hero-scrim" />
      </div>
      <div className="container">
        <p className="eyebrow">Rodgers Fertilizer · Saluda, South Carolina</p>
        <h1 style={{ marginTop: 10 }}>{title}</h1>
        <p>{subtitle}</p>
        <div className="cta-row">
          <Link className="btn btn-gold btn-lg" href={primary.href}>{primary.label}</Link>
          {secondary && (
            secondary.tel
              ? <a className="btn btn-dark btn-lg" href={secondary.href} data-track="call_click">{secondary.label}</a>
              : <Link className="btn btn-dark btn-lg" href={secondary.href}>{secondary.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
