import { site } from "@/content/site";
export default function CallBar() {
  return (
    <div className="callbar">
      <div className="container wrap">
        <span className="muted">Family-owned in Saluda since {site.since}</span>
        <span>
          Call to order:{" "}
          <a href={site.phoneHref} data-track="call_click">{site.phone}</a>
          <span className="muted"> · {site.hours}</span>
        </span>
      </div>
    </div>
  );
}
