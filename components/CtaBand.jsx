import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function CtaBand({
  title = "Ready to Begin Your Ziyarat?",
  text = "Our team is available on WhatsApp, email, and phone to answer your questions and help you plan the journey of a lifetime.",
}) {
  return (
    <section className="relative overflow-hidden border-t border-gold/15 bg-coal py-20">
      <div className="girih-dense pointer-events-none absolute inset-0 opacity-20" />
      <div className="dome-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal variant="reveal-scale">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            <span className="gold-text">{title}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand">
            {text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-full px-8 py-3.5 text-sm"
            >
              WhatsApp {site.whatsappNumber}
            </a>
            <Link href="/contact" className="btn-outline-gold rounded-full px-8 py-3.5 text-sm">
              Send an Enquiry
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
