import Link from "next/link";
import Jsonld from "./Jsonld";
import { breadcrumbSchema } from "@/lib/schema";
export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        {all.map((it, i) => (
          <span key={it.path}>
            {i < all.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span>{it.name}</span>}
            {i < all.length - 1 ? " / " : ""}
          </span>
        ))}
      </nav>
      <Jsonld data={breadcrumbSchema(all)} />
    </>
  );
}
