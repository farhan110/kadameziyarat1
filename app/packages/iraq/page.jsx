import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PriceTable from "@/components/PriceTable";
import CtaBand from "@/components/CtaBand";
import { iraqTiers } from "@/lib/data";

export const metadata = {
  title: "Iraq Ziyarat Packages 2026 | Karbala, Najaf, Baghdad Tours",
  description:
    "Book Iraq Ziyarat packages for 2026. Visit Karbala, Najaf, Kazmain, Baghdad & Samarra with guided tours, hotel stays near shrines, transport & meals included. Budget to premium options.",
  keywords: [
    "iraq ziyarat packages",
    "karbala tour packages",
    "najaf ziyarat",
    "baghdad ziyarat",
    "iraq pilgrimage packages 2026",
    "kazmain ziyarat",
    "samarra tour",
  ],
};

const itinerary = [
  { day: "Day 1", title: "Arrival at Najaf", text: "Airport pickup and transfer to your hotel in Najaf. Check-in and rest." },
  { day: "Day 2–3", title: "Ziyarat in Najaf", text: "The Holy Shrine of Imam Ali (A.S.), Masjid-e-Kufa, Masjid-e-Sahla, Wadi-us-Salaam cemetery, and other sacred sites around Najaf." },
  { day: "Day 4", title: "Transfer to Karbala", text: "Check-in at a hotel near the Holy Shrines. Evening Ziyarat of Imam Hussain (A.S.) and Hazrat Abbas (A.S.)." },
  { day: "Day 5–7", title: "Ziyarat in Karbala", text: "All Maqamat around Karbala: the shrine of Hazrat Hur ibn Yazid al-Riyahi, the Khaimgah (tent camp), Tal-e-Zainabiyya, and other sacred locations." },
  { day: "Day 8", title: "Transfer to Kazmain", text: "Check-in at hotel in Baghdad's Kazmain district. Ziyarat of Imam Musa al-Kadhim (A.S.) and Imam Muhammad al-Jawad (A.S.)." },
  { day: "Day 9", title: "Day Trip to Samarra", text: "The shrines of Imam Ali al-Hadi (A.S.) and Imam Hasan al-Askari (A.S.), and the site of the occultation of Imam Mahdi (A.T.F.S.). Balad if time permits." },
  { day: "Day 10", title: "Final Ziyarat", text: "Return to Karbala or Najaf for a final farewell Ziyarat." },
  { day: "Day 11", title: "Departure", text: "Transfer to the airport for your journey home." },
];

const included = [
  "Hotel accommodation (sharing basis) in Najaf, Karbala, and Kazmain",
  "Daily meals — breakfast, lunch, dinner",
  "Air-conditioned transport for all intercity transfers",
  "Guided Ziyarat at all major shrines",
  "Airport pickup and drop-off (Najaf or Baghdad Airport)",
];

const cities = [
  {
    name: "Karbala",
    text: "The city where Imam Hussain (A.S.) and his companions were martyred on the day of Ashura. The twin shrines of Imam Hussain (A.S.) and Hazrat Abbas (A.S.) are the spiritual heart of Karbala. Our hotels are located on Bain ul Harmain Street, Bab Al Khan Street, Sharah Al Alqami, and Bab Baghdad — all within walking distance.",
  },
  {
    name: "Najaf",
    text: "Home to the Holy Shrine of Imam Ali (A.S.), the first Imam of Shia Muslims. Najaf is also the location of Masjid-e-Kufa, where Imam Ali (A.S.) was struck, and Masjid-e-Sahla, one of the most important mosques in Shia tradition. Our Najaf hotels are on Sharah Rasool and Zain ul Abideen Street.",
  },
  {
    name: "Kazmain (Baghdad)",
    text: "The district of Kazmain in Baghdad houses the shrines of the 7th and 9th Shia Imams — Imam Musa al-Kadhim (A.S.) and Imam Muhammad al-Jawad (A.S.). Our hotels are on Bab-e-Murad Street and Shareef Al Razi Street.",
  },
  {
    name: "Samarra",
    text: "Located north of Baghdad, Samarra contains the shrines of the 10th and 11th Imams — Imam Ali al-Hadi (A.S.) and Imam Hasan al-Askari (A.S.). It is also the site of the sardab (cellar) where Imam Mahdi (A.T.F.S.) went into occultation.",
  },
];

export default function IraqPackagesPage() {
  return (
    <>
      <PageHero
        arabic="السلام عليك يا أمير المؤمنين"
        eyebrow="Iraq Ziyarat Packages 2026"
        title="Visit the Holy Shrines of Karbala, Najaf & Beyond"
        lead="Iraq is home to some of the holiest sites in Shia Islam. The shrines of six Imams across Karbala, Najaf, Kazmain, and Samarra draw millions of pilgrims every year — and every one of our packages includes verified hotels, guided Ziyarat, transport, and daily meals."
      />

      {/* Itinerary timeline */}
      <section className="bg-night py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Standard Package"
            title="10 Nights / 11 Days Itinerary"
          />
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
                  <span
                    className={`absolute left-[8px] top-1.5 flex h-6 w-6 items-center justify-center sm:left-auto ${
                      i % 2 === 0 ? "sm:-right-3" : "sm:-left-3"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" aria-hidden="true">
                      <path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="#0A0908" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                  <div className="ml-12 sm:ml-0">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                      {item.day}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl text-goldbright">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sand">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="relative bg-coal py-20">
        <div className="girih pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="What's Included" title="Every Detail, Handled" />
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

      {/* Pricing */}
      <section className="bg-night py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Package Tiers & Pricing" title="A Tier for Every Budget" />
          <div className="mt-12">
            <PriceTable
              columns={["Tier", "Hotel Category", "Duration", "Starting From"]}
              rows={iraqTiers.map((t) => [t.tier, t.hotel, t.duration, t.price])}
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal variant="reveal-left" className="card-gold rounded-2xl p-7">
              <h3 className="font-display text-xl text-goldbright">
                Short Iraq Package — 7 Nights / 8 Days
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand">
                For pilgrims with limited time: Najaf (2 nights), Karbala (4
                nights), and a day trip to Kazmain and Samarra. All guided
                Ziyarat, meals, and transport included.
              </p>
            </Reveal>
            <Reveal variant="reveal-right" delay={120} className="card-gold rounded-2xl p-7">
              <h3 className="font-display text-xl text-goldbright">
                Iraq Ground Package — from $400
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand">
                Already have your own travel arrangements? Ground-only packages
                include hotels, meals, guided Ziyarat, and all intercity
                transport within Iraq. Available for arrivals via Najaf
                Airport, Baghdad Airport, or Mehran Border.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="relative bg-coal py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Cities Covered" title="The Holy Cities of Iraq" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cities.map((c, i) => (
              <Reveal key={c.name} delay={(i % 2) * 100} className="card-gold rounded-2xl p-8">
                <h3 className="font-display text-2xl gold-text">{c.name}</h3>
                <div className="ornament-line mt-4 w-16" />
                <p className="mt-5 text-sm leading-relaxed text-sand">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Book Your Iraq Ziyarat 2026" />
    </>
  );
}
