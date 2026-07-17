import { IS_STAGING } from "@/lib/env";
export default function StagingBanner() {
  if (!IS_STAGING) return null;
  return (
    <div className="staging-banner" role="status">
      STAGING — not for public use · noindex · form submissions route to a test inbox only
    </div>
  );
}
