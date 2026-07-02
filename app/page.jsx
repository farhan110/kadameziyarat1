import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ShrineSkyline from "@/components/ShrineSkyline";
import { site, destinations } from "@/lib/data";

export const metadata = {
  title:
    "Kadam-e-Ziyarat | Iraq & Iran Ziyarat Packages | Trusted Pilgrimage Tours",
  description:
    "Book affordable Iraq and Iran Ziyarat packages with Kadam-e-Ziyarat. Guided tours to Karbala, Najaf, Mashhad, and Qom. Visa assistance, hotels near holy shrines, and 24/7 support for pilgrims worldwide.",
};

const particles = [
  { left: "8%", size: 5, dur: 11, delay: 0 },
  { left: "16%", size: 3, dur: 14, delay: 3 },
  { left: "26%", size: 6, dur: 12, delay: 6 },
  { left: "38%", size: 4, dur: 15, delay: 1 },
  { left: "48%", size: 3, dur: 10, delay: 5 },
  { left: "58%", size: 5, dur: 13, delay: 2 },
  { left: "68%", size: 4, dur: 16, delay: 7 },
  { left: "78%", size: 6, dur: 11, delay: 4 },
  { left: "88%", size: 3, dur: 14, delay: 8 },
  { left: "94%", size: 4, dur: 12, delay: 1.5 },
];

const features = [
  {
    title: "Comprehensive Ziyarat Packages",
    text: "From budget-friendly ground packages to premium all-inclusive tours. Each package includes hotels near the holy shrines, ground transport between cities, guided Ziyarat with knowledgeable religious guides, and daily meals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7"><path d="M12 3 C9 6 8 8.5 8 11 L16 11 C16 8.5 15 6 12 3 Z M6 11 H18 M5 21 V11 M19 21 V11 M3 21 H21 M9.5 21 V16 Q12 14 14.5 16 V21" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Experienced Local Support",
    text: "Our on-ground team in Iraq and Iran provides 24/7 assistance. From airport pickup to hotel check-in, city transfers, and shrine visits, you are supported at every step of your journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7"><circle cx="12" cy="8" r="3.5"/><path d="M5 20 C5 15.5 8 13.5 12 13.5 C16 13.5 19 15.5 19 20" strokeLinecap="round"/><path d="M2.5 11 A9.5 9.5 0 0 1 8 3.5 M21.5 11 A9.5 9.5 0 0 0 16 3.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Visa & Travel Assistance",
    text: "We handle Iraq and Iran visa processing for pilgrims from all countries. Our documentation team ensures hassle-free visa approvals so you can focus on preparing for your spiritual journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 17 H16" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Hotels Near the Holy Shrines",
    text: "Verified hotels in Karbala, Najaf, Kazmain, Baghdad, Mashhad, and Qom, all selected for their proximity to the shrines, cleanliness, and comfort. Options range from economy to deluxe.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7"><path d="M3 21 V8 L12 3 L21 8 V21 M3 21 H21 M7 21 V14 H11 V21 M14 12 H17 M14 16 H17" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

const packageCards = [
  {
    href: "/packages/iraq",
    label: "Iraq Ziyarat",
    cities: "Karbala · Najaf · Kazmain · Samarra",
    price: "$400",
    desc: "Visit the twin shrines of Karbala, the Haram of Imam Ali (A.S.) in Najaf, and the shrines of four Imams across Kazmain and Samarra.",
    tag: "Most Popular",
  },
  {
    href: "/packages/iran",
    label: "Iran Ziyarat",
    cities: "Mashhad · Qom · Shiraz",
    price: "$500",
    desc: "The golden dome of Imam Reza (A.S.), the shrine of Hazrat Masuma (S.A.) in Qom, and the mirrored halls of Shah Cheragh.",
    tag: null,
  },
  {
    href: "/packages/combined",
    label: "Iraq + Iran Combined",
    cities: "7 Holy Cities · 18–25 Days",
    price: "$1,200",
    desc: "The complete pilgrimage. Every major shrine in both countries in one spiritually fulfilling journey with internal flights included.",
    tag: "Complete Experience",
  },
  {
    href: "/packages/arbaeen",
    label: "Arbaeen Special 2026",
    cities: "Najaf → Karbala Walk",
    price: "$800",
    desc: "Join the world's largest peaceful gathering. Flights, visa, hotels, and full logistical support for the 80 km walk of love.",
    tag: "Limited Seats",
  },
];

const occasions = [
  { name: "Muharram", desc: "Witness Ashura in Karbala" },
  { name: "Arbaeen", desc: "Walk with millions, Najaf to Karbala" },
  { name: "Ramadan", desc: "Laylatul Qadr in Najaf & Kufa" },
  { name: "Rajab & Shaban", desc: "Birth anniversaries of the Ahlul Bayt (A.S.)" },
  { name: "Year-Round", desc: "Iraq & Iran combined tours" },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-night">
        {/* sky gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#26231f_0%,#0a0908_60%)]" />
        {/* slow rotating girih halo */}
        <div className="pointer-events-none absolute left-1/2 top-[8%] h-[720px] w-[720px] -translate-x-1/2 animate-spinslow opacity-[0.07]">
          <svg viewBox="0 0 200 200" className="h-full w-full text-gold">
            {[0, 22.5, 45, 67.5].map((r) => (
              <path
                key={r}
                d="M100 8 L118 82 L192 100 L118 118 L100 192 L82 118 L8 100 L82 82 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                transform={`rotate(${r} 100 100)`}
              />
            ))}
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        {/* dome glow */}
        <div className="dome-glow absolute inset-0" />
        {/* rising light particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: p.left,
              width: p.size * 2,
              height: p.size * 2,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* hero copy */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-36 text-center sm:px-6">
          <Reveal variant="reveal-scale">
            <p className="font-arabic text-2xl text-gold/90 sm:text-3xl">
              السلام عليك يا أبا عبد الله الحسين
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">
              Iraq &amp; Iran Ziyarat Packages —{" "}
              <span className="gold-text">Your Spiritual Journey</span> Starts
              Here
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sand sm:text-lg">
              Guided pilgrimages to the sacred shrines of Karbala, Najaf,
              Kazmain, Samarra, Mashhad, Qom, and Shiraz — with visa
              assistance, hotels beside the Haram, and 24/7 support for
              pilgrims worldwide.
            </p>
          </Reveal>
          <Reveal delay={450} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-full px-8 py-3.5 text-sm sm:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.7.8 1.9.9.3.2.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg>
              Enquire on WhatsApp
            </a>
            <Link
              href="/packages/iraq"
              className="btn-outline-gold rounded-full px-8 py-3.5 text-sm sm:text-base"
            >
              Explore Packages
            </Link>
          </Reveal>
        </div>

        {/* shrine skyline */}
        <div className="relative z-[5] mt-10">
          <ShrineSkyline className="mx-auto w-full max-w-[1440px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-night to-transparent" />
      </section>

      {/* ================= DESTINATIONS MARQUEE ================= */}
      <section className="relative border-y border-gold/15 bg-coal py-5 overflow-hidden">
        <div className="marquee-track">
          {[...destinations, ...destinations].map((d, i) => (
            <span key={i} className="mx-8 flex items-center gap-3 whitespace-nowrap text-sm">
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-gold" aria-hidden="true"><path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="currentColor"/></svg>
              <span className="font-display tracking-wide text-goldbright">{d.city}</span>
              <span className="text-sand/70">{d.shrine}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative bg-night py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Kadam-e-Ziyarat"
            title="Ziyarat is not just travel. It is a sacred obligation."
            lead="Every package we offer is designed with the pilgrim's spiritual needs at the center — because we understand this journey is a deeply personal experience."
          />
          <div className="stagger mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} className="card-gold rounded-2xl p-7" delay={i * 90}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-display text-lg text-ivory">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="relative bg-coal py-24">
        <div className="girih pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Packages"
            title="Choose Your Sacred Journey"
            lead="Budget to premium tiers, complete or ground-only, for individuals, families, and groups — every package includes hotels near the shrines, meals, transport, and guided Ziyarat."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {packageCards.map((p, i) => (
              <Reveal
                key={p.href}
                variant={i % 2 === 0 ? "reveal-left" : "reveal-right"}
                delay={i * 80}
              >
                <Link
                  href={p.href}
                  className="card-gold group relative block overflow-hidden rounded-2xl p-8 sm:p-10"
                >
                  {p.tag && (
                    <span className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-golddeep to-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-night">
                      {p.tag}
                    </span>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                    {p.cities}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-ivory transition-colors group-hover:text-goldbright sm:text-3xl">
                    {p.label}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-sand">{p.desc}</p>
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-sand/70">
                        Starting from
                      </p>
                      <p className="font-display text-3xl gold-text">{p.price}</p>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-goldbright">
                      View Details
                      <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12 H19 M13 6 L19 12 L13 18"/></svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS TABLE ================= */}
      <section className="bg-night py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sacred Destinations"
            title="Our Most Popular Ziyarat Destinations"
          />
          <Reveal className="mt-14 overflow-hidden rounded-2xl border border-gold/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-charcoal to-coal text-xs uppercase tracking-[0.2em] text-gold">
                    <th className="px-6 py-4 font-semibold">Destination</th>
                    <th className="px-6 py-4 font-semibold">Key Shrine</th>
                    <th className="px-6 py-4 font-semibold">Country</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.map((d, i) => (
                    <tr
                      key={d.city}
                      className={`border-t border-gold/10 transition-colors hover:bg-gold/5 ${
                        i % 2 ? "bg-coal/60" : "bg-night"
                      }`}
                    >
                      <td className="px-6 py-4 font-display text-base text-goldbright">
                        {d.city}
                      </td>
                      <td className="px-6 py-4 text-ivory/85">{d.shrine}</td>
                      <td className="px-6 py-4 text-sand">{d.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Link href="/destinations" className="btn-outline-gold rounded-full px-7 py-3 text-sm">
              Read the Full Destinations Guide
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= OCCASIONS ================= */}
      <section className="relative overflow-hidden bg-coal py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Throughout the Islamic Year"
            title="Packages for Every Occasion"
          />
          <div className="stagger mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {occasions.map((o, i) => (
              <Reveal
                key={o.name}
                variant="reveal-scale"
                delay={i * 90}
                className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-charcoal p-6 text-center transition-all duration-500 hover:border-goldbright/50 hover:bg-gold/5"
              >
                <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-125" aria-hidden="true"><path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="currentColor"/></svg>
                <h3 className="mt-4 font-display text-lg text-goldbright">{o.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sand">{o.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-night py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What Our Pilgrims Say" title="Voices of the Zaireens" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal variant="reveal-left" className="card-gold rounded-2xl p-8 sm:p-10">
              <p className="font-arabic text-4xl leading-none text-gold/60">”</p>
              <p className="mt-3 text-base leading-relaxed text-ivory/90">
                Kadam-e-Ziyarat made our first Ziyarat to Karbala stress-free.
                The hotels were walking distance from the Haram, the guide was
                knowledgeable, and the food was excellent. We felt truly taken
                care of.
              </p>
              <div className="ornament-line mt-6 w-20" />
              <p className="mt-4 text-sm font-semibold text-goldbright">
                A pilgrim from London, UK
              </p>
            </Reveal>
            <Reveal variant="reveal-right" delay={120} className="card-gold rounded-2xl p-8 sm:p-10">
              <p className="font-arabic text-4xl leading-none text-gold/60">”</p>
              <p className="mt-3 text-base leading-relaxed text-ivory/90">
                The Arbaeen package was exceptional. Everything from visa
                processing to ground transport was handled professionally. I
                have recommended Kadam-e-Ziyarat to my entire community.
              </p>
              <div className="ornament-line mt-6 w-20" />
              <p className="mt-4 text-sm font-semibold text-goldbright">
                A pilgrim from Toronto, Canada
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden border-t border-gold/15 bg-coal py-24">
        <div className="girih-dense pointer-events-none absolute inset-0 opacity-20" />
        <div className="dome-glow absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal variant="reveal-scale">
            <p className="font-arabic text-2xl text-gold/90">لبيك يا حسين</p>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Ready to Begin <span className="gold-text">Your Ziyarat?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand">
              Contact us today to book your Iraq or Iran Ziyarat package. Our
              team is available on WhatsApp, email, and phone to help you plan
              the journey of a lifetime.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-full px-8 py-3.5 text-sm sm:text-base"
              >
                WhatsApp {site.whatsappNumber}
              </a>
              <Link href="/contact" className="btn-outline-gold rounded-full px-8 py-3.5 text-sm sm:text-base">
                Send an Enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
