import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { buildMetadata } from "@/lib/seo";
import { ARTICLES } from "@/content/articles";
export function generateStaticParams() { return ARTICLES.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) return {};
  return buildMetadata({ title: a.metaTitle, description: a.metaDescription, path: `/resources/${a.slug}` });
}
export default function Page({ params }: { params: { slug: string } }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) notFound();
  return <ArticlePage a={a} />;
}
