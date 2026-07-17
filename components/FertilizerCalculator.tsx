"use client";
import { useState } from "react";
export default function FertilizerCalculator() {
  const [acres, setAcres] = useState("1");
  const [rate, setRate] = useState("200");
  const a = parseFloat(acres) || 0;
  const r = parseFloat(rate) || 0;
  const totalLbs = Math.round(a * r);
  const bags = Math.ceil(totalLbs / 50) || 0;

  const [pctN, setPctN] = useState("10");
  const [targetN, setTargetN] = useState("50");
  const pn = parseFloat(pctN) || 0;
  const tn = parseFloat(targetN) || 0;
  const productPerAcre = pn > 0 ? Math.round((tn / (pn / 100))) : 0;

  return (
    <div className="calc">
      <h3>Fertilizer Calculator</h3>
      <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>Estimate how much product you need.</p>
      <div className="form-grid" style={{ marginTop: 12 }}>
        <div className="field"><label>Acres</label><input type="number" min="0" step="0.1" value={acres} onChange={(e) => setAcres(e.target.value)} /></div>
        <div className="field"><label>Rate (lbs of product per acre)</label><input type="number" min="0" step="1" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
      </div>
      <div className="out">
        <b>{totalLbs.toLocaleString()} lbs</b>
        <span>≈ {bags} × 50-lb bags for {a || 0} acre(s) at {r || 0} lbs/acre</span>
      </div>
      <p className="subhead" style={{ marginTop: 18 }}>Nitrogen helper</p>
      <p style={{ color: "var(--muted)", fontSize: ".88rem" }}>How many pounds of product per acre to hit a nitrogen target.</p>
      <div className="form-grid" style={{ marginTop: 10 }}>
        <div className="field"><label>% Nitrogen (first N-P-K number)</label><input type="number" min="0" step="1" value={pctN} onChange={(e) => setPctN(e.target.value)} /></div>
        <div className="field"><label>Target lbs N per acre</label><input type="number" min="0" step="1" value={targetN} onChange={(e) => setTargetN(e.target.value)} /></div>
      </div>
      <div className="out"><b>{productPerAcre.toLocaleString()} lbs/acre</b><span>of product to deliver {tn || 0} lbs N/acre at {pn || 0}% N</span></div>
      <p className="disc">Estimates only. A soil test is the reliable guide to rates — bring yours to us and we&rsquo;ll build the blend.</p>
    </div>
  );
}
