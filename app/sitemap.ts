import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/env";
import { PAGES } from "@/content/pages";
import { ARTICLES } from "@/content/articles";
import { AREAS } from "@/content/serviceAreas";
export default function sitemap(): MetadataRoute.Sitemap {
  const statics = ["", "/fertilizer", "/delivery", "/equipment", "/parts", "/seed-farm-supplies",
    "/resources", "/resources/faq", "/tools", "/service-area", "/about", "/contact",
    "/request-a-quote", "/reorder", "/parts/request-a-part"];
  const leaves = PAGES.map((p) => `/${p.section}/${p.slug}`);
  const articles = ARTICLES.map((a) => `/resources/${a.slug}`);
  const areas = AREAS.map((a) => `/service-area/${a.slug}`);
  return [...statics, ...leaves, ...articles, ...areas].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date() }));
}
