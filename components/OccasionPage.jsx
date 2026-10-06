import Link from "next/link";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { occasionPages, occasionSchema } from "@/lib/occasion-pages";
import { site } from "@/lib/data";

const existingLabels = {
  "/packages/iraq": "Iraq Ziyarat Packages",
  "/packages/iran": "Iran Ziyarat Packages",
  "/faq": "Ziyarat Questions",
  "/contact": "Contact Our Team",
};

function InlineText({ text }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="font-semibold text-ivory">{part.slice(2, -2)}</strong>
      : part
  );
}

export default function OccasionPage({ page }) {
  const message = `Assalamu Alaikum. I would like information about ${page.heading}. Please share the proposed itinerary, available dates and quotation.`;
  const whatsapp = `${site.whatsappLink.split("?")[0]}?text=${encodeURIComponent(message)}`;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(occasionSchema(page)).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow={page.kind === "package" ? "Plan Your Ziyarat" : "Pilgrim Travel Guide"}
        title={page.heading}
        lead={page.intro}
      />
      <section className="bg-night pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-sand">
            <Link href="/" className="hover:text-goldbright">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/ziyarat-occasions" className="hover:text-goldbright">Ziyarat Occasions</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-goldbright">{page.heading}</span>
          </nav>
          <article className="space-y-6">
            {page.blocks.map((block, i) => {
              if (block.type === "h2") return <h2 key={i} className="pt-6 font-display text-2xl text-goldbright sm:text-3xl">{block.text}</h2>;
              if (block.type === "h3") return <h3 key={i} className="pt-2 font-display text-xl text-ivory">{block.text}</h3>;
              if (block.type === "table") return (
                <div key={i} className="overflow-x-auto rounded-2xl border border-gold/20">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">{page.heading}: planning details</caption>
                    <thead className="bg-charcoal text-gold">
                      <tr>{block.headers.map((header, j) => <th key={j} scope="col" className="px-5 py-4 font-semibold">{header}</th>)}</tr>
                    </thead>
                    <tbody>{block.rows.map((row, j) => <tr key={j} className="border-t border-gold/10 bg-coal/70">
                      {row.map((cell, k) => k === 0
                        ? <th key={k} scope="row" className="px-5 py-4 font-medium text-goldbright">{cell}</th>
                        : <td key={k} className="px-5 py-4 text-sand"><InlineText text={cell} /></td>)}
                    </tr>)}</tbody>
                  </table>
                </div>
              );
              return <p key={i} className="text-base leading-relaxed text-sand"><InlineText text={block.text} /></p>;
            })}
          </article>
        </div>
      </section>
      <section className="border-y border-gold/15 bg-coal py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="card-gold rounded-2xl p-7 sm:p-10">
            <h2 className="font-display text-2xl text-goldbright sm:text-3xl">Ask About This Journey</h2>
            <p className="mt-5 leading-relaxed text-sand">Share your country of residence, preferred dates, number of adults and children, and any mobility requirements. Request the proposed itinerary and an itemised quotation. Departure dates, prices and inclusions will be confirmed in the quotation.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-full px-7 py-3 text-sm">Request This Itinerary</a>
              <Link href="/contact" className="btn-outline-gold rounded-full px-7 py-3 text-sm">Send an Enquiry</Link>
            </div>
          </Reveal>
          <aside className="mt-10" aria-label="Related ziyarat information">
            <h2 className="font-display text-xl text-goldbright">Explore Related Information</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {page.links.map((path) => <li key={path}><Link href={path} className="text-sand underline decoration-gold/40 underline-offset-4 hover:text-goldbright">{existingLabels[path] || occasionPages.find((related) => related.path === path)?.heading || "Related Ziyarat Guide"}</Link></li>)}
              <li><Link href="/ziyarat-occasions" className="text-goldbright underline underline-offset-4">All Occasions & Holiday Guides</Link></li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
