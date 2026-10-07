import Link from "next/link";
import PageHero from "./PageHero";
import { devotionalBase, devotionalContent, devotionalJsonLd, devotionalSections } from "@/lib/devotional";

export default function DevotionalPage({ entry }) {
  const info = devotionalSections[entry.section];
  const url = `${devotionalBase}${entry.path}`;
  const related = (entry.related || []).map((path) => devotionalContent.find((item) => item.path === path)).filter(Boolean);
  const schemas = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: entry.title, description: entry.description, inLanguage: ["en", "ar", "ur"], isPartOf: { "@type": "CollectionPage", url: `${devotionalBase}/${entry.section}`, name: info.title }, citation: entry.sources.map((source) => source.url) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: devotionalBase }, { "@type": "ListItem", position: 2, name: info.name, item: `${devotionalBase}/${entry.section}` }, { "@type": "ListItem", position: 3, name: entry.title, item: url }] },
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: devotionalJsonLd(schemas) }} />
    <PageHero eyebrow={`${info.name} · Arabic, English & Urdu`} title={entry.title} lead={entry.intro} />
    <section className="bg-coal py-12 sm:py-16">
      <article className="mx-auto max-w-4xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-sand"><Link href="/" className="hover:text-goldbright">Home</Link><span aria-hidden="true">/</span><Link href={`/${entry.section}`} className="text-goldbright">{info.name}</Link><span aria-hidden="true">/</span><span>{entry.title}</span></nav>
        <div className="card-gold mb-8 rounded-2xl p-6">
          <h2 className="font-display text-xl text-goldbright">{entry.section === "amaal" ? "When to observe these Amaal" : "Recitation guidance"}</h2>
          <p className="mt-3 leading-relaxed text-sand">{entry.timing}</p>
          {entry.readingNote && <p className="mt-3 text-sm leading-relaxed text-sand">{entry.readingNote}</p>}
        </div>
        {entry.steps?.length > 0 && <section className="mb-10" aria-labelledby="practice-steps">
          <h2 id="practice-steps" className="mb-6 font-display text-2xl text-goldbright">{entry.section === "amaal" ? "Selected Amaal: English & Urdu Instructions" : "Recitation Order and Count"}</h2>
          <ol className="space-y-4">{entry.steps.map((step, index) => <li key={step.title} className="card-gold rounded-2xl p-6">
            <h3 className="font-display text-xl text-goldbright">{index + 1}. {step.title}</h3>
            <p lang="en" className="mt-3 leading-relaxed text-ivory">{step.english}</p>
            <p lang="ur" dir="rtl" className="mt-4 font-arabic text-xl leading-loose text-sand">{step.urdu}</p>
          </li>)}</ol>
        </section>}
        {entry.passages.length > 0 && <section aria-labelledby="recitation-text">
          <h2 id="recitation-text" className="mb-6 font-display text-2xl text-goldbright">Arabic Text, Transliteration, English & Urdu Meanings</h2>
          <div className="space-y-6">{entry.passages.map((passage, index) => <section key={index} className="card-gold rounded-2xl p-5 sm:p-8" aria-label={passage.label || "Recitation text"}>
            {passage.label && <h3 className="mb-6 font-display text-xl text-goldbright">{passage.label}</h3>}
            <p className="mb-3 text-xs uppercase tracking-wide text-gold">Arabic · عربی</p>
            <p lang="ar" dir="rtl" className="break-words font-arabic text-3xl leading-[2.2] text-ivory sm:text-4xl">{passage.arabic}</p>
            <h3 className="mb-2 mt-7 text-sm font-semibold text-goldbright">English Transliteration</h3>
            <p lang="en" className="leading-loose text-sand">{passage.transliteration}</p>
            <h3 className="mb-2 mt-6 text-sm font-semibold text-goldbright">English Meaning</h3>
            <p lang="en" className="leading-loose text-ivory">{passage.english}</p>
            <h3 className="mb-2 mt-6 text-sm font-semibold text-goldbright">Urdu Meaning · اردو ترجمہ</h3>
            <p lang="ur" dir="rtl" className="break-words font-arabic text-2xl leading-loose text-ivory">{passage.urdu}</p>
          </section>)}</div>
          <p className="mt-5 text-sm leading-relaxed text-sand">English and Urdu meanings are explanatory renderings prepared for this library. Transliteration is a reading aid; the Arabic remains the reference text.</p>
        </section>}
        <section className="mt-12 border-t border-gold/20 pt-8" aria-labelledby="source-references">
          <h2 id="source-references" className="font-display text-2xl text-goldbright">Sources & References</h2>
          <ul className="mt-4 space-y-3">{entry.sources.map((source) => <li key={source.url}><a href={source.url} className="text-goldbright underline decoration-gold/40 underline-offset-4">{source.label}</a></li>)}</ul>
        </section>
        {related.length > 0 && <section className="mt-12" aria-labelledby="related-readings">
          <h2 id="related-readings" className="font-display text-2xl text-goldbright">Related Recitations & Guides</h2>
          <ul className="mt-5 space-y-4">{related.map((item) => <li key={item.path}><Link href={item.path} className="text-goldbright underline decoration-gold/40 underline-offset-4">{item.title} →</Link></li>)}</ul>
        </section>}
        <Link href={`/${entry.section}`} className="btn-outline-gold mt-10 inline-block rounded-full px-6 py-3 text-sm">Browse All {info.name} →</Link>
      </article>
    </section>
  </>;
}
