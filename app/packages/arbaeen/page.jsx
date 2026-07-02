import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PriceTable from "@/components/PriceTable";
import CtaBand from "@/components/CtaBand";
import { arbaeenTiers } from "@/lib/data";

export const metadata = {
  title: "Arbaeen Ziyarat Packages 2026 | Walk to Karbala",
  description:
    "Book Arbaeen 2026 Ziyarat packages with flights, visa, hotels in Karbala & Najaf, and Arbaeen walk support. Budget to premium options for the world's largest peaceful gathering.",
  keywords: [
    "arbaeen packages 2026",
    "arbaeen ziyarat",
    "arbaeen walk package",
    "karbala arbaeen",
    "arbaeen tour",
    "arbaeen pilgrimage",
  ],
};

const completeIncluded = [
  "Round-trip flights",
  "Iraq visa processing",
  "Hotel accommodation in Najaf and Karbala",
  "Daily meals",
  "Guided Ziyarat in Najaf, Karbala, Kazmain, and Samarra",
  "Arbaeen walk logistical support",
  "24/7 on-ground assistance",
];

const walkSupport = [
  { title: "Secure Luggage Storage", text: "Your bags stay safe in Najaf while you walk." },
  { title: "Walking Group Coordination", text: "Organized groups so no pilgrim walks alone." },
  { title: "Emergency Medical Support", text: "Assistance available along the entire route." },
  { title: "Post-Walk Hotel in Karbala", text: "A reserved room waiting for you after the walk." },
  { title: "Return Transport", text: "Back to Najaf or the airport after the walk." },
];

const muharram = [
  { days: "8-Day", desc: "Parcham Kushai only" },
  { days: "9-Day", desc: "Ashura short stay" },
  { days: "12-Day", desc: "Ashura in Karbala" },
  { days: "13-Day", desc: "Ashura and Soyem" },
  { days: "14-Day", desc: "Parcham Kushai through Ashura" },
];

export default function ArbaeenPage() {
  return (
    <>
      <PageHero
        arabic="أربعين الإمام الحسين عليه السلام"
        eyebrow="Arbaeen Special 2026"
        title="Join the World's Largest Peaceful Gathering"
        lead="Arbaeen marks the 40th day after the martyrdom of Imam Hussain (A.S.). Millions of pilgrims from over 60 countries walk from Najaf to Karbala in a remarkable display of devotion and unity — and we handle everything from flights and visa to the walk itself."
      />

      {/* Walk banner — maroon accent */}
      <section className="relative overflow-hidden border-y border-maroon/40 bg-gradient-to-r from-maroondeep via-[#3A0F16] to-maroondeep py-14">
        <div className="girih pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <Reveal variant="reveal-scale">
            <p className="font-display text-2xl text-ivory sm:text-3xl">
              Najaf <span className="gold-text">→ 80 km of love →</span> Karbala
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory/75">
              The walk from Najaf to Karbala is the highlight of the Arbaeen
              pilgrimage — the largest annual peaceful gathering on earth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-night py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Complete Packages"
            title="With Flights & Visa Included"
            lead="Our complete Arbaeen packages take care of the entire journey, end to end."
          />
          <div className="stagger mt-12 grid gap-4 sm:grid-cols-2">
            {completeIncluded.map((item, i) => (
              <Reveal key={i} delay={i * 60} className="flex items-start gap-3 rounded-xl border border-gold/15 bg-charcoal/70 p-5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 L9 17 L4 12" /></svg>
                <p className="text-sm leading-relaxed text-ivory/85">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-coal py-20">
        <div className="girih pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Package Options" title="Budget to Premium" />
          <div className="mt-12">
            <PriceTable
              columns={["Tier", "Duration", "Hotel", "Transport", "Price From"]}
              rows={arbaeenTiers.map((t) => [t.tier, t.duration, t.hotel, t.transport, t.price])}
            />
          </div>
          <Reveal className="mt-8 rounded-2xl border border-gold/20 bg-charcoal/70 p-7">
            <h3 className="font-display text-xl text-goldbright">
              Arbaeen Ground Packages (Without Flights)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sand">
              Prefer to book your own flights? Our ground-only Arbaeen packages
              cover airport meet-and-assist, hotel accommodation, all meals,
              intercity transport, guided Ziyarat, and Arbaeen walk support —
              available in every tier from Budget to Premium.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-night py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Walk Support"
            title="We Walk With You, Every Step"
            lead="Full logistical support for pilgrims participating in the Najaf-to-Karbala walk."
          />
          <div className="stagger mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {walkSupport.map((w, i) => (
              <Reveal key={w.title} variant="reveal-scale" delay={i * 90} className="card-gold rounded-2xl p-6 text-center">
                <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6 text-gold" aria-hidden="true"><path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="currentColor"/></svg>
                <h3 className="mt-4 font-display text-base leading-snug text-goldbright">{w.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sand">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-coal py-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Muharram Packages"
            title="Be in Karbala for Ashura"
            lead="Dedicated Muharram packages for pilgrims who wish to be in Karbala during the days of Ashura."
          />
          <div className="stagger mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {muharram.map((m, i) => (
              <Reveal key={m.days} delay={i * 80} className="group rounded-2xl border border-maroon/40 bg-gradient-to-b from-charcoal to-maroondeep/30 p-6 text-center transition-all duration-500 hover:border-gold/50 hover:-translate-y-1.5">
                <p className="font-display text-2xl gold-text">{m.days}</p>
                <p className="mt-2 text-xs leading-relaxed text-sand">{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Reserve Your Arbaeen 2026 Seat"
        text="Arbaeen seats fill fast. Contact us early to secure your package, visa, and hotel near the Haram."
      />
    </>
  );
}
