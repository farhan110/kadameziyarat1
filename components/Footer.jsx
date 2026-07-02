import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-coal">
      <div className="girih pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl gold-text">Kadam-e-Ziyarat</p>
            <p className="mt-1 font-arabic text-lg text-gold/80">قدمِ زیارت</p>
            <p className="mt-4 text-sm leading-relaxed text-sand">
              Your trusted partner for Iraq &amp; Iran Ziyarat. Serving Zaireens
              of the Ahlul Bayt (A.S.) worldwide with guided pilgrimages to
              Karbala, Najaf, Mashhad, and Qom.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Packages
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/packages/iraq" className="text-sand transition-colors hover:text-goldbright">Iraq Ziyarat Packages</Link></li>
              <li><Link href="/packages/iran" className="text-sand transition-colors hover:text-goldbright">Iran Ziyarat Packages</Link></li>
              <li><Link href="/packages/combined" className="text-sand transition-colors hover:text-goldbright">Iraq + Iran Combined</Link></li>
              <li><Link href="/packages/arbaeen" className="text-sand transition-colors hover:text-goldbright">Arbaeen Special 2026</Link></li>
              <li><Link href="/destinations" className="text-sand transition-colors hover:text-goldbright">Destinations Guide</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-sand transition-colors hover:text-goldbright">About Us</Link></li>
              <li><Link href="/services" className="text-sand transition-colors hover:text-goldbright">Our Services</Link></li>
              <li><Link href="/faq" className="text-sand transition-colors hover:text-goldbright">FAQ</Link></li>
              <li><Link href="/contact" className="text-sand transition-colors hover:text-goldbright">Contact Us</Link></li>
              <li><Link href="/terms" className="text-sand transition-colors hover:text-goldbright">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy" className="text-sand transition-colors hover:text-goldbright">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-sand">
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors hover:text-goldbright"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-gold transition-all group-hover:border-goldbright group-hover:bg-gold/10">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.7.8 1.9.9.3.2.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg>
                  </span>
                  WhatsApp: {site.whatsappNumber}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-goldbright">
                  Phone: {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-goldbright">
                  {site.email}
                </a>
              </li>
              <li className="text-sand/70">Available 24/7 on WhatsApp</li>
            </ul>
          </div>
        </div>

        <div className="ornament-line mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-sand/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kadam-e-Ziyarat · {site.domain} · All
            rights reserved.
          </p>
          <p className="font-arabic text-sm text-gold/70">
            لبيك يا حسين
          </p>
        </div>
      </div>
    </footer>
  );
}
