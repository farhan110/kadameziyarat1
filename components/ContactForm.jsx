"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const packageOptions = [
  "Iraq Ziyarat",
  "Iran Ziyarat",
  "Iraq + Iran Combined",
  "Arbaeen Special",
  "Custom / Private Tour",
];

const inputClass =
  "w-full rounded-xl border border-gold/20 bg-night/70 px-4 py-3 text-sm text-ivory placeholder:text-sand/50 outline-none transition-all duration-300 focus:border-goldbright/70 focus:bg-night focus:shadow-[0_0_0_3px_rgba(201,162,75,0.15)]";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    pkg: packageOptions[0],
    dates: "",
    travellers: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Please fill in at least your name and phone/WhatsApp number.");
      return;
    }
    const lines = [
      "Assalamu Alaikum, I would like to enquire about a Ziyarat package.",
      "",
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      `Phone/WhatsApp: ${form.phone}`,
      form.country && `Country: ${form.country}`,
      `Package Interest: ${form.pkg}`,
      form.dates && `Preferred Travel Dates: ${form.dates}`,
      form.travellers && `Number of Travellers: ${form.travellers}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    const url = `https://wa.me/917007189274?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="card-gold rounded-2xl p-7 sm:p-9">
      <h3 className="font-display text-2xl text-goldbright">Enquiry Form</h3>
      <p className="mt-2 text-sm text-sand">
        Fill in your details and press send — your enquiry opens directly in
        WhatsApp, ready to deliver to our team.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="Full Name *" value={form.name} onChange={set("name")} />
        <input className={inputClass} type="email" placeholder="Email" value={form.email} onChange={set("email")} />
        <input className={inputClass} placeholder="Phone / WhatsApp Number *" value={form.phone} onChange={set("phone")} />
        <input className={inputClass} placeholder="Country" value={form.country} onChange={set("country")} />
        <select className={inputClass} value={form.pkg} onChange={set("pkg")}>
          {packageOptions.map((o) => (
            <option key={o} value={o} className="bg-night">
              {o}
            </option>
          ))}
        </select>
        <input className={inputClass} placeholder="Preferred Travel Dates" value={form.dates} onChange={set("dates")} />
        <input className={inputClass} placeholder="Number of Travellers" value={form.travellers} onChange={set("travellers")} />
        <div className="sm:col-span-2">
          <textarea
            className={`${inputClass} min-h-[120px] resize-y`}
            placeholder="Your Message"
            value={form.message}
            onChange={set("message")}
          />
        </div>
      </div>
      <button onClick={handleSubmit} className="btn-gold mt-6 w-full rounded-full px-8 py-3.5 text-sm sm:w-auto">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.7.8 1.9.9.3.2.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg>
        Send Enquiry via WhatsApp
      </button>
      {sent && (
        <p className="mt-4 text-sm text-goldbright">
          WhatsApp opened in a new tab — press send there to deliver your
          enquiry. We respond within 24 hours, In Sha Allah.
        </p>
      )}
      <p className="mt-4 text-xs text-sand/60">
        Or message us directly at {site.whatsappNumber} · {site.email}
      </p>
    </div>
  );
}
