"use client";
import { useState } from "react";
export default function LimeCalculator() {
  const [acres, setAcres] = useState("1");
  const [tonsPerAcre, setTonsPerAcre] = useState("1");
  const a = parseFloat(acres) || 0;
  const t = parseFloat(tonsPerAcre) || 0;
  const total = Math.round(a * t * 10) / 10;
  return (
    <div className="calc">
      <h3>Lime Calculator</h3>
      <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>Estimate total lime from your soil-test recommendation.</p>
      <div className="form-grid" style={{ marginTop: 12 }}>
        <div className="field"><label>Acres</label><input type="number" min="0" step="0.1" value={acres} onChange={(e) => setAcres(e.target.value)} /></div>
        <div className="field"><label>Lime rate (tons per acre, from soil test)</label><input type="number" min="0" step="0.1" value={tonsPerAcre} onChange={(e) => setTonsPerAcre(e.target.value)} /></div>
      </div>
      <div className="out"><b>{total.toLocaleString()} tons</b><span>total lime for {a || 0} acre(s) at {t || 0} tons/acre</span></div>
      <p className="disc">Use the rate from your soil-test recommendation. Lime is slow to act — apply ahead of the season. We&rsquo;ll help you source and schedule it.</p>
    </div>
  );
}
