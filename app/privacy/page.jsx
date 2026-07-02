import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Kadam-e-Ziyarat privacy policy. How we collect, use, and protect your personal information when you book Ziyarat packages.",
  keywords: ["kadam e ziyarat privacy policy", "ziyarat booking privacy"],
};

const sections = [
  {
    title: "Information We Collect",
    text: "When you enquire about or book a package, we collect your name, email address, phone number, passport details (for visa processing), travel preferences, and payment information. We also collect website usage data through cookies.",
  },
  {
    title: "How We Use Your Information",
    text: "Your information is used to process your Ziyarat package bookings, handle visa applications, communicate with you about your travel arrangements, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "Data Security",
    text: "We use industry-standard security measures to protect your personal information. Payment information is processed through secure channels and is not stored on our servers.",
  },
  {
    title: "Your Rights",
    text: `You have the right to request access to, correction of, or deletion of your personal data. Contact us at ${site.email} for any privacy-related requests.`,
  },
  {
    title: "Contact",
    text: `For questions about this privacy policy, please contact us at ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Kadam-e-Ziyarat is committed to protecting the privacy of our pilgrims and website visitors."
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
      <CtaBand title="Privacy Questions?" text="Reach out any time and we will explain exactly how your data is handled." />
    </>
  );
}
