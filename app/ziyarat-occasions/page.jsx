import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { occasionPages, occasionBase } from "@/lib/occasion-pages";

export const metadata = {
  title: "Shia Ziyarat Occasions & Holiday Travel Guides",
  description: "Explore Shia religious occasions and holiday windows for Iraq and Iran ziyarat. Compare dates, destinations and itinerary options with Kadam-e-Ziyarat.",
  alternates: { canonical: `${occasionBase}/ziyarat-occasions` },
  openGraph: {
    title: "Shia Ziyarat Occasions & Holiday Travel Guides | Kadam-e-Ziyarat",
    description: "Find religious occasions and holiday planning guides for your Iraq or Iran journey.",
    url: `${occasionBase}/ziyarat-occasions`,
  },
};

const groups = [
  { title: "Religious Occasions & Seasonal Journeys", pages: occasionPages.filter((page) => page.kind === "package") },
  { title: "Ahlul Bayt Anniversary Guides", pages: occasionPages.filter((page) => page.kind === "guide" && !/^(uk-|usa-|canada-|nsw-|india-|pakistan-|uae-)/.test(page.slug)) },
  { title: "International Holiday Travel Guides", pages: occasionPages.filter((page) => page.kind === "guide" && /^(uk-|usa-|canada-|nsw-|india-|pakistan-|uae-)/.test(page.slug)) },
];

export default function ZiyaratOccasionsPage() {
  return <>
    <PageHero eyebrow="Plan Your Sacred Journey" title="Ziyarat Occasions & Holiday Travel Guides" lead="Choose the religious occasion or holiday period that fits your journey. Explore destination options and provisional dates, then ask our team for the proposed itinerary and quotation." />
    <section className="bg-night pb-12"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
      <p className="leading-relaxed text-sand">Islamic dates depend on the local calendar and religious authority. Religious nights begin at sunset. Holiday windows vary by country, school and employer; the guides describe planning options rather than confirmed departures.</p>
      <Link href="/packages/arbaeen" className="btn-outline-gold mt-7 inline-block rounded-full px-7 py-3 text-sm">Explore Arbaeen Ziyarat 2027</Link>
    </div></section>
    {groups.map((group, i) => <section key={group.title} className={`${i % 2 ? "bg-night" : "bg-coal"} py-16`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={group.title} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {group.pages.map((page) => <li key={page.path}><Link href={page.path} className="card-gold block h-full rounded-2xl p-6">
            <h3 className="font-display text-xl text-goldbright">{page.heading}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sand">{page.description}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-goldbright">View Guide →</span>
          </Link></li>)}
        </ul>
      </div>
    </section>)}
  </>;
}
