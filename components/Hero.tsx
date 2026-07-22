import Link from "next/link";
import HeroOps from "./HeroOps";

// Agricultural hero backdrop: branded farmland SVG + drop-in photo slot
// (/public/media/hero.jpg overrides the graphic automatically when present).
function HeroField() {
  return (
    <svg className="hero-field" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="hf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16120e" />
          <stop offset="1" stopColor="#221a12" />
        </linearGradient>
        <radialGradient id="hf-sun" cx="0.72" cy="0.42" r="0.6">
          <stop offset="0" stopColor="#c79a4e" stopOpacity="0.42" />
          <stop offset="1" stopColor="#c79a4e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#hf-sky)" />
      <rect width="1600" height="900" fill="url(#hf-sun)" />
      <path d="M0 470 Q400 432 800 460 T1600 452 V900 H0 Z" fill="#2a422b" />
      <path d="M0 470 Q400 432 800 460 T1600 452" fill="none" stroke="#d9b873" strokeOpacity="0.32" strokeWidth="2" />
      <path d="M0 545 Q520 505 1010 548 T1600 538 V900 H0 Z" fill="#2f5d34" />
      <path d="M0 648 Q450 616 900 654 T1600 644 V900 H0 Z" fill="#234826" />
      <g stroke="#193420" strokeWidth="3" opacity="0.5">
        <path d="M810 654 L100 900" /><path d="M810 654 L340 900" /><path d="M810 654 L580 900" />
        <path d="M810 654 L840 900" /><path d="M810 654 L1090 900" /><path d="M810 654 L1340 900" />
      </g>
    </svg>
  );
}

// Renders the approved headline with a single restrained gold accent on
// "Custom-Blended" and an intentional line break after the first sentence.
function Headline({ title }: { title: string }) {
  const parts = title.split(". ");
  const first = parts[0] || title;
  const rest = parts.slice(1).join(". ");
  const accent = "Custom-Blended";
  const firstJsx = first.startsWith(accent) ? (
    <><span className="hl-accent">{accent}</span>{first.slice(accent.length)}.</>
  ) : (
    <>{first}.</>
  );
  return (
    <h1 className="hero-h">
      {firstJsx}
      {rest ? <><br />{rest}</> : null}
    </h1>
  );
}

const TRUST = ["Since 1976", "Family-owned", "Authorized Bush Hog dealer", "Saluda, SC"];

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
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Rodgers Fertilizer · Saluda, South Carolina</p>
          <Headline title={title} />
          <p className="hero-sub">{subtitle}</p>
          <div className="cta-row">
            <Link className="btn btn-gold btn-lg" href={primary.href}>{primary.label}</Link>
            {secondary && (
              secondary.tel
                ? <a className="btn btn-dark btn-lg" href={secondary.href} data-track="call_click">{secondary.label}</a>
                : <Link className="btn btn-dark btn-lg" href={secondary.href}>{secondary.label}</Link>
            )}
          </div>
          <ul className="hero-trust">
            {TRUST.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div className="hero-visual">
          <HeroOps />
        </div>
      </div>
    </section>
  );
}
