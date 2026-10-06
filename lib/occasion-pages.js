import pages from "./occasion-pages.json";

export const occasionPages = pages;
export const occasionBase = "https://www.kadameziyarat.com";

export function getOccasionPage(slug, kind) {
  return pages.find((page) => page.slug === slug && page.kind === kind);
}

export function occasionMetadata(page) {
  const url = `${occasionBase}${page.path}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: page.kind === "guide" ? "article" : "website",
      siteName: "Kadam-e-Ziyarat",
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
    },
  };
}

export function occasionSchema(page) {
  const url = `${occasionBase}${page.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.heading,
        description: page.description,
        inLanguage: "en",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        publisher: { "@type": "TravelAgency", name: "Kadam-e-Ziyarat", url: occasionBase },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: occasionBase },
          { "@type": "ListItem", position: 2, name: "Ziyarat Occasions", item: `${occasionBase}/ziyarat-occasions` },
          { "@type": "ListItem", position: 3, name: page.heading, item: url },
        ],
      },
    ],
  };
}
