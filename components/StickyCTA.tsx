import { site } from "@/content/site";
// Mobile-only sticky conversion bar. Always one tap from calling or quoting.
export default function StickyCTA() {
  return (
    <div className="sticky-cta" aria-label="Quick actions">
      <a className="call" href={site.phoneHref} data-track="call_click">Call {site.phone}</a>
      <a className="quote" href="/request-a-quote">Request a Quote</a>
    </div>
  );
}
