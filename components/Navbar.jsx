"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";

function StarMark({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 2 L24.5 15.5 L38 20 L24.5 24.5 L20 38 L15.5 24.5 L2 20 L15.5 15.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M20 9 L22.8 17.2 L31 20 L22.8 22.8 L20 31 L17.2 22.8 L9 20 L17.2 17.2 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pkgOpen, setPkgOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPkgOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-night/90 backdrop-blur-xl border-b border-gold/15 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <StarMark className="h-9 w-9 text-gold transition-transform duration-700 group-hover:rotate-180" />
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide gold-text sm:text-xl">
              Kadam-e-Ziyarat
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-sand">
              Iraq &amp; Iran Ziyarat
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button
                  className={`nav-link flex items-center gap-1 text-sm tracking-wide transition-colors ${
                    pathname.startsWith("/packages")
                      ? "text-goldbright active"
                      : "text-ivory/85 hover:text-goldbright"
                  }`}
                >
                  {link.label}
                  <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" fill="none">
                    <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="w-60 overflow-hidden rounded-xl border border-gold/20 bg-coal/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                          pathname === child.href
                            ? "bg-gold/10 text-goldbright"
                            : "text-ivory/80 hover:bg-gold/10 hover:text-goldbright"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-goldbright active"
                    : "text-ivory/85 hover:text-goldbright"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-full px-5 py-2 text-sm"
          >
            Book on WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/25 text-goldbright lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-4 mt-3 mb-4 rounded-2xl border border-gold/20 bg-coal/95 p-4 backdrop-blur-xl">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setPkgOpen(!pkgOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ivory/85"
                >
                  {link.label}
                  <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform duration-300 ${pkgOpen ? "rotate-180" : ""}`} fill="none">
                    <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden pl-3 transition-all duration-300 ${pkgOpen ? "max-h-60" : "max-h-0"}`}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-sand hover:text-goldbright"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2.5 text-sm ${
                  pathname === link.href ? "text-goldbright" : "text-ivory/85"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-3 w-full rounded-full px-5 py-2.5 text-sm"
          >
            Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
