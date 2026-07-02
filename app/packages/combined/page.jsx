import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PriceTable from "@/components/PriceTable";
import CtaBand from "@/components/CtaBand";
import { combinedTiers } from "@/lib/data";

export const metadata = {
  title: "Iraq Iran Combined Ziyarat Package 2026 | Karbala Najaf Mashhad Qom Tour",
  description:
    "Book combined Iraq and Iran Ziyarat packages. Visit Karbala, Najaf, Kazmain, Samarra, Mashhad, Qom & Shiraz in one trip. All-inclusive tours with flights, visa, hotels & guided Ziyarat.",
  keywords: [
    "iraq iran ziyarat package",
    "combined iraq iran tour",
    "karbala mashhad package",
    "najaf qom tour",
    "iraq iran pilgrimage combined",
  ],
};

const iraqLeg = [
  { city: "Najaf — 3 nights", text: "Ziyarat of Imam Ali (A.S.), Masjid-e-Kufa, Masjid-e-Sahla, and Wadi-us-Salaam." },
  { city: "Karbala — 4 nights", text: "Ziyarat of Imam Hussain (A.S.), Hazrat Abbas (A.S.), and surrounding Maqamat." },
  { city: "Kazmain — 1 night", text: "Ziyarat of Imam Kadhim (A.S.) and Imam Jawad (A.S.)." },
  { city: "Samarra — day trip", text: "Ziyarat of Imam Hadi (A.S.), Imam Askari (A.S.), and the sardab of Imam Mahdi (A.T.F.S.)." },
  { city: "Baghdad", text: "Historical sites and transfer to the airport for your Iran flight." },
];

const iranLeg = [
  { city: "Mashhad — 3 nights", text: "Ziyarat of Imam Reza (A.S.), Goharshad Mosque, and the shrine museum." },
  { city: "Qom — 2 nights", text: "Ziyarat of Hazrat Masuma (S.A.) and Masjid-e-Jamkaran." },
  { city: "Shiraz — 2 nights", text: "Shah Cheragh Shrine and the Nasir al-Mulk Mosque." },
  { city: "Departure", text: "Fly home from Shiraz or Tehran." },
];

const included = [
  "Iraq and Iran visa processing",
  "Hotel accommodation in all cities",
  "All meals",
  "Air-conditioned ground transport within each country",
  "Internal flight from Baghdad to Mashhad (or Tehran)",
  "Guided Ziyarat at every site",
  "Airport pickups and drop-offs",
];

export default function CombinedPackagePage() {
  return (
    <>
      <PageHero
        eyebrow="Iraq + Iran Combined"
        title="The Complete Pilgrimage Experience"
        lead="For pilgrims who wish to visit the holy shrines of both Iraq and Iran in a single journey — from the shrine of Imam Ali (A.S.) in Najaf to the shrine of Imam Reza (A.S.) in Mashhad, the resting places of multiple Imams in one spiritually fulfilling trip."
      />

      <section className="bg-night py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="18 Nights / 19 Days" title="Two Sacred Lands, One Journey" />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal variant="reveal-left" className="card-gold rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl gold-text">Iraq Leg</h3>
                <span className="rounded-full border border-gold/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                  10 Days
                </span>
              </div>
              <div className="ornament-line mt-5" />
              <ul className="mt-6 space-y-5">
                {iraqLeg.map((s) => (
                  <li key={s.city} className="flex gap-4">
                    <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true"><path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="currentColor"/></svg>
                    <div>
                      <p className="font-display text-base text-goldbright">{s.city}</p>
                      <p className="mt-1 text-sm leading-relaxed text-sand">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="reveal-right" delay={120} className="card-gold rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl gold-text">Iran Leg</h3>
                <span className="rounded-full border border-gold/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                  8 Days
                </span>
              </div>
              <div className="ornament-line mt-5" />
              <ul className="mt-6 space-y-5">
                {iranLeg.map((s) => (
                  <li key={s.city} className="flex gap-4">
                    <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true"><path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="currentColor"/></svg>
                    <div>
                      <p className="font-display text-base text-goldbright">{s.city}</p>
                      <p className="mt-1 text-sm leading-relaxed text-sand">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-coal py-20">
        <div className="girih pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="What's Included" title="One Booking Covers Everything" />
          <div className="stagger mt-12 grid gap-4 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={i} delay={i * 60} className="flex items-start gap-3 rounded-xl border border-gold/15 bg-charcoal/70 p-5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 L9 17 L4 12" /></svg>
                <p className="text-sm leading-relaxed text-ivory/85">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="Pricing" title="Combined Package Tiers" />
          <div className="mt-12">
            <PriceTable
              columns={["Tier", "Duration", "Starting From"]}
              rows={combinedTiers.map((t) => [t.tier, t.duration, t.price])}
            />
          </div>
        </div>
      </section>

      <CtaBand title="Book the Complete Iraq + Iran Journey" />
    </>
  );
}
