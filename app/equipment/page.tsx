import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { buildMetadata } from "@/lib/seo";
import { sectionMeta } from "@/content/site";
export function generateMetadata(): Metadata {
  const s = sectionMeta["equipment"];
  return buildMetadata({ title: s.title, description: s.blurb, path: "/equipment" });
}
export default function Page() { return <HubPage section="equipment" />; }
