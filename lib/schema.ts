import { site } from "@/content/site";
import { SITE_URL } from "@/lib/env";

const url = (p = "") => `${SITE_URL}${p}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org", "@type": "Organization",
    name: site.legalName, url: url("/"),
    telephone: site.phone, foundingDate: String(site.since),
    address: {
      "@type": "PostalAddress", streetAddress: site.address.street,
      addressLocality: site.address.city, addressRegion: site.address.state,
      postalCode: site.address.zip, addressCountry: "US",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org", "@type": "Store",
    name: site.name, url: url("/"), telephone: site.phone,
    address: {
      "@type": "PostalAddress", streetAddress: site.address.street,
      addressLocality: site.address.city, addressRegion: site.address.state,
      postalCode: site.address.zip, addressCountry: "US",
    },
    openingHours: "Mo-Fr 08:00-17:00", // VERIFIED per website; confirm before production
    priceRange: "$$",
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org", "@type": "Service",
    name, description, url: url(path),
    provider: { "@type": "Organization", name: site.legalName },
    areaServed: { "@type": "State", name: "South Carolina" }, // service area OWNER CONFIRM
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.name, item: url(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
