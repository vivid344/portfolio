import { SITE_CONFIG } from "@/lib/constants";

export type PersonJsonLd = {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  jobTitle: string;
  sameAs: string[];
};

export type WebSiteJsonLd = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  author: {
    "@type": "Person";
    name: string;
  };
};

export type BreadcrumbJsonLd = {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }[];
};

export const generatePersonJsonLd = (
  sameAs: string[],
): PersonJsonLd => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.author.name,
  url: SITE_CONFIG.url,
  jobTitle: "Web Frontend Engineer",
  sameAs,
});

export const generateWebSiteJsonLd = (): WebSiteJsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  author: {
    "@type": "Person",
    name: SITE_CONFIG.author.name,
  },
});

export const generateBreadcrumbJsonLd = (
  items: { name: string; url?: string }[],
): BreadcrumbJsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url }),
  })),
});
