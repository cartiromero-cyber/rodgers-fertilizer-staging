import { notFound } from "next/navigation";
import CommercialPage from "@/components/CommercialPage";
import { buildMetadata } from "@/lib/seo";
import { getLeaves, getPage } from "@/content/pages";
const SECTION = "equipment";
export function generateStaticParams() { return getLeaves(SECTION).map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getPage(SECTION, params.slug);
  if (!p) return {};
  return buildMetadata({ title: p.metaTitle, description: p.metaDescription, path: `/${SECTION}/${p.slug}` });
}
export default function Page({ params }: { params: { slug: string } }) {
  const p = getPage(SECTION, params.slug);
  if (!p) notFound();
  return <CommercialPage page={p} />;
}
