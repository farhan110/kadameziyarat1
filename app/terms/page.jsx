import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for booking Ziyarat packages with Kadam-e-Ziyarat. Policies on booking, cancellation, refunds, and travel responsibilities.",
  keywords: ["kadam e ziyarat terms", "ziyarat booking terms", "cancellation policy ziyarat"],
};

const sections = [
  {
    title: "Booking & Payment",
    text: "A non-refundable deposit is required to confirm your booking. Full payment must be received at least 30 days before departure. Payments can be made via bank transfer, online payment, or as instructed by our team.",
  },
  {
    title: "Cancellation & Refund Policy",
    text: "Cancellations made 45 days or more before departure are eligible for a refund minus the deposit and any non-recoverable costs (such as visa fees). Cancellations made 30–44 days before departure are eligible for a 50% refund. Cancellations made less than 30 days before departure are non-refundable. No-shows are non-refundable.",
  },
  {
    title: "Travel Documents",
    text: "Pilgrims are responsible for ensuring their passports are valid and that they have the required travel documents. Kadam-e-Ziyarat assists with visa processing but cannot guarantee visa approval, as this is at the discretion of the issuing authority.",
  },
  {
    title: "Changes to Itinerary",
    text: "Kadam-e-Ziyarat reserves the right to modify itineraries due to circumstances beyond our control, such as changes in flight schedules, hotel availability, weather, or security conditions. We will provide equivalent alternatives and inform travellers as early as possible.",
  },
  {
    title: "Liability",
    text: "Kadam-e-Ziyarat acts as an intermediary between pilgrims and service providers (airlines, hotels, transport companies). We are not liable for delays, cancellations, or service shortfalls by third-party providers. Travel insurance is recommended for all pilgrims.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="Please read these terms carefully before booking any package with Kadam-e-Ziyarat."
      />
      <section className="bg-night py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className="card-gold rounded-2xl p-8">
              <h2 className="font-display text-xl text-goldbright">{s.title}</h2>
              <div className="ornament-line mt-4 w-14" />
              <p className="mt-5 text-sm leading-relaxed text-sand">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="Questions About Our Terms?" text="Contact our team and we will walk you through every policy before you book." />
    </>
  );
}
