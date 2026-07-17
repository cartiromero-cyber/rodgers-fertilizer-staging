import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { buildMetadata } from "@/lib/seo";
import { sectionMeta } from "@/content/site";
export function generateMetadata(): Metadata {
  const s = sectionMeta["seed-farm-supplies"];
  return buildMetadata({ title: s.title, description: s.blurb, path: "/seed-farm-supplies" });
}
export default function Page() { return <HubPage section="seed-farm-supplies" />; }
