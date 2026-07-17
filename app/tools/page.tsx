import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteBanner from "@/components/QuoteBanner";
import FertilizerCalculator from "@/components/FertilizerCalculator";
import LimeCalculator from "@/components/LimeCalculator";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Calculators & Planning Tools", description: "Free fertilizer and lime calculators, plus printable pasture, hay, and equipment planning worksheets.", path: "/tools" });
const PRINTABLES = [
  { t: "Pasture Planning Worksheet", h: "/resources/pasture-planning-worksheet" },
  { t: "Hay Field Improvement Checklist", h: "/resources/hay-field-improvement-checklist" },
  { t: "Equipment Maintenance Checklist", h: "/resources/equipment-maintenance-checklist" },
];
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Tools", path: "/tools" }]} />
      <div className="container section" style={{ paddingTop: 8 }}>
        <p className="eyebrow">Calculators &amp; tools</p>
        <h1>Free planning tools for growers</h1>
        <hr className="hr" />
        <p className="lead">Estimate your fertilizer and lime, and print planning worksheets. Estimates only — a soil test is the reliable guide, and we&rsquo;re glad to help.</p>
        <div className="grid grid-2" style={{ marginTop: 22, alignItems: "start" }}>
          <FertilizerCalculator />
          <LimeCalculator />
        </div>
        <h2 style={{ marginTop: 34 }}>Printable worksheets &amp; checklists</h2>
        <div className="grid grid-3" style={{ marginTop: 14 }}>
          {PRINTABLES.map((p) => (
            <Link key={p.h} href={p.h} className="card card--link"><h3 style={{ fontSize: "1.05rem" }}>{p.t}</h3><span className="card-cta">Open &amp; print →</span></Link>
          ))}
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 56 }}><QuoteBanner /></div>
    </>
  );
}
