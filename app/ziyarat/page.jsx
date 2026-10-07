import Link from "next/link";
import PageHero from "@/components/PageHero";
import ZiyaratSearch from "@/components/ZiyaratSearch";
import { devotionalBase, devotionalJsonLd, devotionalMetadata } from "@/lib/devotional";
import { ziyaratDirectory, ziyaratIndex } from "@/lib/ziyarat";

export const metadata = devotionalMetadata(ziyaratDirectory.title, ziyaratDirectory.description, "/ziyarat");

export default function ZiyaratDirectoryPage() {
  const url = `${devotionalBase}/ziyarat`;
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: ziyaratDirectory.title, description: ziyaratDirectory.description, inLanguage: ["en", "ar", "ur"], mainEntity: { "@type": "ItemList", numberOfItems: ziyaratIndex.length, itemListElement: ziyaratIndex.map((entry, index) => ({ "@type": "ListItem", position: index + 1, name: entry.title, url: `${devotionalBase}${entry.path}` })) } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: devotionalJsonLd(schema) }} />
    <PageHero eyebrow="Worship & Remembrance" title={ziyaratDirectory.title} lead="Find a Ziyarat by name, Imam, weekday or occasion. Open each reading on its own page, with Arabic text, available translations and references to its source edition." />
    <section className="bg-coal py-16"><div className="mx-auto max-w-6xl px-4 sm:px-6">
      <nav aria-label="Devotional sections" className="mb-10 flex flex-wrap gap-3">{[["/duas", "Duas"], ["/tasbih", "Tasbih"], ["/amaal", "Amaal"], ["/ziyarat", "Ziyarats"]].map(([path, name]) => <Link key={path} href={path} aria-current={path === "/ziyarat" ? "page" : undefined} className="btn-outline-gold rounded-full px-5 py-2 text-sm">{name}</Link>)}</nav>
      <div className="card-gold mb-10 rounded-2xl p-6"><h2 className="font-display text-xl text-goldbright">About this Ziyarat collection</h2><p className="mt-3 leading-relaxed text-sand">Ziyarat is a devotional visitation and salutation. This collection distinguishes named recitations, individual shrine visitations, weekday readings and occasion-specific forms. Alternate spellings lead to the same page. Each page identifies its source and available languages; Urdu guidance is clearly distinguished from a complete Urdu translation.</p><p lang="ur" dir="rtl" className="mt-4 font-arabic text-xl leading-loose text-ivory">نام، امام، دن یا مناسبت کے ذریعے زیارت تلاش کریں۔ ہر زیارت کا الگ صفحہ اور ماخذ ہے۔ اردو ترجمے اور اردو رہنمائی کی دستیابی ہر صفحے پر واضح کی گئی ہے۔</p></div>
      <ZiyaratSearch entries={ziyaratIndex} />
    </div></section>
  </>;
}
