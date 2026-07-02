import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "About Kadam-e-Ziyarat | Trusted Iraq & Iran Pilgrimage Tour Operator",
  description:
    "Learn about Kadam-e-Ziyarat, a trusted Ziyarat tour operator serving pilgrims worldwide with guided tours to Iraq and Iran holy shrines. Years of experience, verified hotels, and dedicated support.",
  keywords: [
    "about kadam e ziyarat",
    "ziyarat tour operator",
    "iraq iran pilgrimage company",
    "shia tour operator",
  ],
};

const differentiators = [
  "Our entire business is built around the specific needs of Ziyarat pilgrims — not general tourism.",
  "Direct partnerships with hotels near every major shrine in Iraq and Iran.",
  "Ground teams based in Karbala, Najaf, and Mashhad providing real-time support.",
  "Transparent pricing with no hidden charges.",
  "Guides who understand the religious significance of each site, not just tour leaders.",
  "We serve pilgrims from every country and handle visa processing for all nationalities.",
];

const values = [
  { title: "Service Before Profit", text: "We exist to serve Zaireens. Every decision starts with the pilgrim's needs, not the margin." },
  { title: "Transparency", text: "Clear pricing and honest itineraries. What you see is exactly what you get." },
  { title: "Respect", text: "For every pilgrim's time, comfort, and spiritual needs, at every step of the journey." },
  { title: "Continuous Improvement", text: "We grow through pilgrim feedback, refining every package season after season." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        arabic="بسم الله الرحمن الرحيم"
        eyebrow="About Us"
        title="Serving Pilgrims with Dedication and Trust"
        lead="Kadam-e-Ziyarat was founded with a single mission: to make the sacred journey of Ziyarat accessible, comfortable, and spiritually meaningful for every pilgrim, regardless of where they are in the world."
      />

      <section className="bg-night py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <p className="text-base leading-relaxed text-ivory/85">
              We are a team of experienced travel professionals and devout
              individuals who understand that Ziyarat is far more than a trip.
              It is an act of devotion, a fulfilment of spiritual longing, and
              for many, the journey of a lifetime. Every decision we make —
              from selecting hotels to training our guides — is guided by this
              understanding.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal variant="reveal-left" className="card-gold rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Our Mission
              </p>
              <p className="mt-4 text-base leading-relaxed text-ivory/90">
                To provide affordable, reliable, and spiritually enriching
                Ziyarat packages to the holy cities of Iraq and Iran, ensuring
                every pilgrim travels with peace of mind and returns with a
                heart full of blessings.
              </p>
            </Reveal>
            <Reveal variant="reveal-right" delay={120} className="card-gold rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Our Vision
              </p>
              <p className="mt-4 text-base leading-relaxed text-ivory/90">
                To become the most trusted global platform for Ziyarat travel,
                known for transparency, quality service, and a genuine
                commitment to serving the Zaireens of Ahlul Bayt (A.S.).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-coal py-20">
        <div className="girih pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="What Sets Us Apart" title="Not a Typical Travel Agency" />
          <div className="stagger mt-12 grid gap-4 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={i} delay={i * 70} className="flex items-start gap-4 rounded-xl border border-gold/15 bg-charcoal/70 p-5 transition-colors hover:border-gold/40">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true">
                  <path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="currentColor" />
                </svg>
                <p className="text-sm leading-relaxed text-ivory/85">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Team"
            title="Ready to Assist You in Your Language and Timezone"
            lead="Our team includes travel coordinators, visa specialists, on-ground support staff in Iraq and Iran, and dedicated customer service representatives who speak multiple languages. Whether you contact us from India, Pakistan, the UK, the US, Canada, Australia, or any other country — we are ready."
          />
          <div className="stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} variant="reveal-scale" delay={i * 90} className="card-gold rounded-2xl p-6 text-center">
                <h3 className="font-display text-lg text-goldbright">{v.title}</h3>
                <div className="ornament-line mx-auto mt-3 w-12" />
                <p className="mt-4 text-sm leading-relaxed text-sand">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
