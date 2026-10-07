import Link from "next/link";
import PageHero from "./PageHero";
import DevotionalSearch from "./DevotionalSearch";
import { devotionalBase, devotionalContent, devotionalJsonLd, devotionalSections } from "@/lib/devotional";

export default function DevotionalDirectory({ section }) {
  const info = devotionalSections[section];
  const entries = devotionalContent.filter((entry) => entry.section === section);
  const url = `${devotionalBase}/${section}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url, name: info.title, description: info.description,
    inLanguage: ["en", "ar", "ur"],
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: entries.length,
      itemListElement: entries.map((entry, index) => ({ "@type": "ListItem", position: index + 1, name: entry.title, url: `${devotionalBase}${entry.path}` })),
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: devotionalJsonLd(schema) }} />
    <PageHero eyebrow="Worship & Remembrance" title={info.title} lead={info.lead} />
    <section className="bg-coal py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label="Devotional sections" className="mb-10 flex flex-wrap gap-3">
          {Object.entries(devotionalSections).map(([key, value]) => <Link key={key} href={`/${key}`} aria-current={key === section ? "page" : undefined} className="btn-outline-gold rounded-full px-5 py-2 text-sm">{value.name}</Link>)}
        </nav>
        <DevotionalSearch entries={entries} action={info.action} name={info.name} />
      </div>
    </section>
  </>;
}
