import Link from "next/link";
export default function Hero({
  title, subtitle, primary, secondary,
}: {
  title: string; subtitle: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string; tel?: boolean };
}) {
  return (
    <section className="hero">
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
