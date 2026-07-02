import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Our Services | Ziyarat Packages, Visa, Hotels & Transport",
  description:
    "Kadam-e-Ziyarat offers complete Ziyarat services including Iraq & Iran tour packages, visa processing, hotel booking near shrines, airport transfers, and guided pilgrimage tours.",
  keywords: [
    "ziyarat services",
    "iraq visa processing",
    "iran visa for pilgrims",
    "karbala hotel booking",
    "ziyarat ground transport",
    "guided ziyarat tours",
  ],
};

const services = [
  {
    title: "Complete Ziyarat Packages",
    text: "Fully organized Iraq and Iran tour packages in Budget, Economy, Standard, Deluxe, and Premium tiers. Every package includes accommodation near the holy shrines, daily meals, ground transportation between all cities, guided Ziyarat visits, and airport pickup and drop-off. Available for individual pilgrims, families, and groups — with private and custom itineraries on request.",
  },
  {
    title: "Ground Packages (Without Flights)",
    text: "Already have your flights booked? Our ground packages cover everything once you land: airport meet-and-assist, hotel accommodation, all intercity transport (Najaf to Karbala, Karbala to Kazmain, Kazmain to Samarra, and more), guided Ziyarat, and daily meals — priced separately at competitive rates.",
  },
  {
    title: "Iraq Visa Processing",
    text: "We process Iraq visas for pilgrims from all countries: complete documentation guidance, verified submission by our expert team, fast-tracked approval, and timely delivery before your departure. We handle tourist visas, Arbaeen visas, and group Ziyarat visas.",
  },
  {
    title: "Iran Visa Processing",
    text: "Full visa assistance for Mashhad, Qom, and Shiraz Ziyarat — covering your visa authorization code, documentation support, and embassy coordination from start to finish.",
  },
  {
    title: "Hotel Booking",
    text: "Verified hotel partnerships across every Ziyarat city. In Karbala: Bain ul Harmain, Bab Al Khan, Sharah Al Alqami, and Bab Baghdad — all walking distance from the Holy Shrines. In Najaf: Sharah Rasool and Zain ul Abideen Street. In Kazmain: Bab-e-Murad and Shareef Al Razi. In Mashhad and Qom: hotels selected for proximity to the shrine complexes.",
  },
  {
    title: "Airport Transfers & Transport",
    text: "Comfortable, air-conditioned vehicles for every transfer: Najaf Airport, Baghdad Airport, and Mehran Border pickups, intercity transport between Najaf, Karbala, Kazmain, Baghdad, and Samarra, plus Iran domestic transfers between Mashhad, Qom, Tehran, and Shiraz.",
  },
  {
    title: "Guided Ziyarat with Religious Scholars",
    text: "Every group is accompanied by a knowledgeable guide who explains the history and spiritual significance of each shrine, leads Ziyarat recitations, shares historical context, and ensures pilgrims do not miss any important site.",
  },
  {
    title: "Custom & Private Tours",
    text: "For families or groups who want a personalized experience: you choose the cities, duration, hotel category, and pace of travel. We handle the rest.",
  },
  {
    title: "Arbaeen Walk Support",
    text: "Full logistics for the Najaf-to-Karbala walk: pre-walk accommodation in Najaf, secure luggage storage, post-walk hotel in Karbala, and return transport after the walk.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything You Need for a Complete Ziyarat Experience"
        lead="From the moment you enquire about a package to the moment you return home, our team handles every detail — so you can focus entirely on your spiritual journey."
      />

      <section className="bg-night py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} className="card-gold group rounded-2xl p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 font-display text-lg text-gold transition-all duration-500 group-hover:border-goldbright group-hover:bg-gold/10 group-hover:text-goldbright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg leading-snug text-ivory">
                    {s.title}
                  </h3>
                </div>
                <div className="ornament-line mt-5" />
                <p className="mt-5 text-sm leading-relaxed text-sand">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a Service Tailored to You?"
        text="Tell us your travel dates, cities, and preferences — we will build a plan around your journey."
      />
    </>
  );
}
