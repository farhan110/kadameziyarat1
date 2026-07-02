"use client";

import { useState } from "react";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
              open
                ? "border-goldbright/50 bg-charcoal shadow-[0_12px_40px_-16px_rgba(201,162,75,0.3)]"
                : "border-gold/15 bg-coal/70 hover:border-gold/35"
            }`}
          >
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open}
            >
              <span className={`font-display text-base sm:text-lg ${open ? "text-goldbright" : "text-ivory"}`}>
                {faq.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  open
                    ? "rotate-45 border-goldbright bg-gold/10 text-goldbright"
                    : "border-gold/30 text-gold"
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5 V19 M5 12 H19" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-sand">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
