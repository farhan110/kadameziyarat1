import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata = {
  title: "Contact Kadam-e-Ziyarat | Book Iraq Iran Ziyarat Packages",
  description:
    "Contact Kadam-e-Ziyarat to book your Iraq or Iran Ziyarat package. Reach us via WhatsApp, phone, or email. 24/7 support for pilgrims worldwide.",
  keywords: [
    "contact kadam e ziyarat",
    "book ziyarat package",
    "ziyarat enquiry",
    "iraq iran tour booking",
  ],
};

const channels = [
  {
    title: "WhatsApp",
    value: site.whatsappNumber,
    note: "Available 24/7 — fastest response",
    href: site.whatsappLink,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.7.8 1.9.9.3.2.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg>
    ),
  },
  {
    title: "Phone",
    value: site.phone,
    note: "Enquiries answered within 24 hours",
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z"/></svg>
    ),
  },
  {
    title: "Email",
    value: site.email,
    note: "For detailed itinerary requests",
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7 L12 13 L2 7"/></svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Book Your Ziyarat Package Today"
        lead="Whether you have questions about our packages, need visa guidance, or are ready to book — our team is here to help you plan your Ziyarat journey."
      />

      <section className="bg-night py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="stagger grid gap-5 sm:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.title} variant="reveal-scale" delay={i * 100}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-gold group block rounded-2xl p-7 text-center"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-all duration-500 group-hover:border-goldbright group-hover:bg-gold/15 group-hover:text-goldbright">
                    {c.icon}
                  </span>
                  <h3 className="mt-5 font-display text-lg text-ivory">{c.title}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-goldbright">{c.value}</p>
                  <p className="mt-2 text-xs text-sand">{c.note}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
            <Reveal variant="reveal-left">
              <ContactForm />
            </Reveal>
            <Reveal variant="reveal-right" delay={150} className="space-y-6">
              <div className="card-gold rounded-2xl p-7">
                <h3 className="font-display text-xl text-goldbright">Office Hours</h3>
                <div className="ornament-line mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-sand">
                  We are available <span className="text-goldbright">24/7 on WhatsApp</span>.
                  Phone and email enquiries are responded to within 24 hours.
                </p>
              </div>
              <div className="card-gold rounded-2xl p-7">
                <h3 className="font-display text-xl text-goldbright">Follow Us</h3>
                <div className="ornament-line mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-sand">
                  Stay updated on new packages, travel tips, and Ziyarat guides
                  on Facebook, Instagram, YouTube, and TikTok.
                </p>
                <div className="mt-5 flex gap-3">
                  {["Facebook", "Instagram", "YouTube", "TikTok"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      aria-label={s}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-xs font-bold text-gold transition-all duration-300 hover:border-goldbright hover:bg-gold/10 hover:text-goldbright"
                    >
                      {s[0]}
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-gradient-to-b from-charcoal to-coal p-7 text-center">
                <p className="font-arabic text-xl text-gold/90">قدمِ زیارت</p>
                <p className="mt-3 text-xs leading-relaxed text-sand">
                  {site.domain} · Serving Zaireens of the Ahlul Bayt (A.S.)
                  worldwide
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
