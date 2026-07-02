import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PriceTable from "@/components/PriceTable";
import CtaBand from "@/components/CtaBand";
import { iranTiers } from "@/lib/data";

export const metadata = {
  title: "Iran Ziyarat Packages 2026 | Mashhad, Qom & Shiraz Tours",
  description:
    "Book Iran Ziyarat packages to visit Imam Reza shrine in Mashhad, Hazrat Masuma shrine in Qom, and Shah Cheragh in Shiraz. Guided tours with visa, hotels & transport included.",
  keywords: [
    "iran ziyarat packages",
    "mashhad ziyarat",
    "qom ziyarat",
    "imam reza shrine tour",
    "iran pilgrimage packages",
    "shiraz shah cheragh",
    "iran shia tours",
  ],
};

const itinerary = [
  { day: "Day 1", title: "Arrival at Mashhad", text: "Transfer from Mashhad International Airport to your hotel near the Haram of Imam Reza (A.S.). Rest and evening Ziyarat." },
  { day: "Day 2–3", title: "Ziyarat in Mashhad", text: "The Holy Shrine of Imam Reza (A.S.), the old courtyard, Goharshad Mosque, and the museum. Explore the Razavi complex and surrounding bazaars." },
  { day: "Day 4", title: "Transfer to Qom", text: "By domestic flight or road. Check-in at your hotel near the shrine." },
  { day: "Day 5–6", title: "Ziyarat in Qom", text: "The Shrine of Hazrat Fatima al-Masuma (S.A.), Masjid-e-Jamkaran, and the historic hawza (seminary). Optional visit to the nearby city of Kashan." },
  { day: "Day 7", title: "Transfer to Shiraz", text: "Journey to the city of poets, gardens, and sacred shrines." },
  { day: "Day 8", title: "Ziyarat in Shiraz", text: "The Shah Cheragh Shrine — resting place of Ahmad and Muhammad, sons of Imam Musa al-Kadhim (A.S.) — plus the Nasir al-Mulk Mosque and historical sites." },
  { day: "Day 9", title: "Departure", text: "Transfer to the airport for your journey home." },
];

const included = [
  "Hotel accommodation near the shrines in Mashhad, Qom, and Shiraz",
  "Daily meals",
  "Air-conditioned intercity transport",
  "Guided Ziyarat at all major sites",
  "Iran visa authorization code and processing assistance",
  "Airport pickup and drop-off",
];

const sites = [
  {
    name: "Mashhad — Shrine of Imam Reza (A.S.)",
    text: "Mashhad is the holiest city in Iran. The shrine complex of Imam Reza (A.S.), the eighth Imam, is one of the largest religious complexes in the world. Its golden dome and minarets are visible from across the city, and the atmosphere inside is one of intense devotion. Millions visit annually for Ziyarat, with special gatherings during the birth and martyrdom anniversaries of Imam Reza (A.S.).",
  },
  {
    name: "Qom — Shrine of Hazrat Masuma (S.A.)",
    text: "Qom is the intellectual and religious capital of Shia Islam. The shrine of Hazrat Fatima al-Masuma (S.A.), sister of Imam Reza (A.S.), attracts pilgrims from around the world. The nearby Masjid-e-Jamkaran holds special spiritual significance as a site associated with Imam Mahdi (A.T.F.S.).",
  },
  {
    name: "Shiraz — Shah Cheragh Shrine",
    text: "The Shah Cheragh shrine in Shiraz is the burial place of Ahmad ibn Musa and Muhammad ibn Musa, sons of the seventh Imam, Musa al-Kadhim (A.S.). The shrine's interior is adorned with breathtaking mirror work that creates an atmosphere of divine beauty. Shiraz is also home to the Nasir al-Mulk Mosque and other cultural landmarks.",
  },
];

export default function IranPackagesPage() {
  return (
    <>
      <PageHero
        arabic="السلام عليك يا علي بن موسى الرضا"
        eyebrow="Iran Ziyarat Packages 2026"
        title="Visit Mashhad, Qom & Shiraz"
        lead="Iran holds a special place in the hearts of Shia Muslims worldwide — from the golden dome of Imam Reza (A.S.) in Mashhad to the mirrored halls of Shah Cheragh in Shiraz. Our packages combine comfortable hotels, reliable transport, and knowledgeable guides."
      />

      <section className="bg-night py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="Standard Package" title="8 Nights / 9 Days Itinerary" />
          <div className="relative mt-16">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent sm:left-1/2" />
            <div className="space-y-10">
              {itinerary.map((item, i) => (
                <Reveal
                  key={item.day}
                  variant={i % 2 === 0 ? "reveal-left" : "reveal-right"}
                  className={`relative flex gap-6 sm:w-1/2 ${
                    i % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:flex-row-reverse sm:pl-12 sm:text-left"
                  }`}
                >
                  <span className={`absolute left-[8px] top-1.5 flex h-6 w-6 items-center justify-center sm:left-auto ${i % 2 === 0 ? "sm:-right-3" : "sm:-left-3"}`}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" aria-hidden="true">
                      <path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="#0A0908" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                  <div className="ml-12 sm:ml-0">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{item.day}</p>
                    <h3 className="mt-1.5 font-display text-xl text-goldbright">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sand">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-coal py-20">
        <div className="girih pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="What's Included" title="Everything Taken Care Of" />
          <div className="stagger mt-12 grid gap-4 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={i} delay={i * 70} className="flex items-start gap-3 rounded-xl border border-gold/15 bg-charcoal/70 p-5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 L9 17 L4 12" /></svg>
                <p className="text-sm leading-relaxed text-ivory/85">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Package Options" title="Choose Your Tier" />
          <div className="mt-12">
            <PriceTable
              columns={["Tier", "Hotel Category", "Duration", "Starting From"]}
              rows={iranTiers.map((t) => [t.tier, t.hotel, t.duration, t.price])}
            />
          </div>
        </div>
      </section>

      <section className="relative bg-coal py-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Key Ziyarat Sites" title="Three Sacred Cities of Iran" />
          <div className="mt-12 space-y-6">
            {sites.map((s, i) => (
              <Reveal key={s.name} variant={i % 2 === 0 ? "reveal-left" : "reveal-right"} className="card-gold rounded-2xl p-8">
                <h3 className="font-display text-xl gold-text sm:text-2xl">{s.name}</h3>
                <div className="ornament-line mt-4 w-16" />
                <p className="mt-5 text-sm leading-relaxed text-sand sm:text-base">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Book Your Iran Ziyarat 2026" />
    </>
  );
}
