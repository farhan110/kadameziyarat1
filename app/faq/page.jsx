import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/data";

export const metadata = {
  title: "Ziyarat FAQ | Iraq Iran Travel Questions Answered",
  description:
    "Find answers to common questions about Iraq and Iran Ziyarat packages, visa requirements, hotel options, Arbaeen travel, and more. Kadam-e-Ziyarat FAQ page.",
  keywords: [
    "ziyarat FAQ",
    "iraq ziyarat questions",
    "iran visa FAQ",
    "arbaeen travel FAQ",
    "karbala travel tips",
    "ziyarat travel guide",
  ],
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Everything Pilgrims Ask, Answered"
        lead="Answers to the most common questions about Iraq and Iran Ziyarat — documents, visas, hotels, safety, meals, and booking."
      />
      <section className="bg-night py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>
      <CtaBand
        title="Still Have a Question?"
        text="Message us on WhatsApp and our team will respond within 24 hours."
      />
    </>
  );
}
