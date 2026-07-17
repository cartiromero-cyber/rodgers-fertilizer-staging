import { IS_STAGING } from "@/lib/env";
const MAP: Record<string, { cls: string }> = {
  "READY FOR STAGING": { cls: "gate--ready" },
  "READY FOR OWNER REVIEW": { cls: "gate--owner" },
  "READY FOR COMPLIANCE REVIEW": { cls: "gate--comp" },
  "BLOCKED BY DATA": { cls: "gate--data" },
  "BLOCKED BY OWNER APPROVAL": { cls: "gate--hold" },
};
// Internal-only publication indicator. Renders on staging only; never on production.
export default function GateBadge({ gate, deps }: { gate: string; deps?: string[] }) {
  if (!IS_STAGING) return null;
  const m = MAP[gate] ?? { cls: "gate--data" };
  return (
    <div className="gate-note">
      <span className={"gate " + m.cls}>{gate}</span>
      {deps && deps.length > 0 && (
        <span> — internal note: {deps.join("; ")}.</span>
      )}
    </div>
  );
}
