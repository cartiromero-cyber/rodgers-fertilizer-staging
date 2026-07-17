import type { MetadataRoute } from "next";
import { SITE_URL, IS_STAGING } from "@/lib/env";
export default function robots(): MetadataRoute.Robots {
  // Staging: disallow all crawling. Production: allow + point to sitemap.
  if (IS_STAGING) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE_URL}/sitemap.xml` };
}
