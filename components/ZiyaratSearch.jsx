"use client";

import { useState } from "react";
import Link from "next/link";

const normalize = (text) => text.normalize("NFKD").replace(/[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed\u0300-\u036f]/g, "").replace(/\u0640/g, "").toLowerCase();

export default function ZiyaratSearch({ entries }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("");
  const groups = [...new Set(entries.map((entry) => entry.group))];
  const visible = entries.filter((entry) => (!group || entry.group === group) && normalize(`${entry.title} ${entry.urduTitle} ${entry.aliases} ${entry.intro}`).includes(normalize(query.trim())));
  return <>
    <div className="mb-8 grid gap-4 sm:grid-cols-2">
      <div><label htmlFor="ziyarat-search" className="mb-2 block text-sm text-goldbright">Search Ziyarats</label><input id="ziyarat-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ashura, Warisa, امام علی…" className="w-full rounded-xl border border-gold/30 bg-night px-4 py-3 text-ivory focus:border-goldbright focus:outline-none" /></div>
      <div><label htmlFor="ziyarat-category" className="mb-2 block text-sm text-goldbright">Category</label><select id="ziyarat-category" value={group} onChange={(event) => setGroup(event.target.value)} className="w-full rounded-xl border border-gold/30 bg-night px-4 py-3 text-ivory focus:border-goldbright focus:outline-none"><option value="">All categories</option>{groups.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
    </div>
    <p role="status" aria-live="polite" className="mb-6 text-sm text-sand">{visible.length} {visible.length === 1 ? "page" : "pages"}</p>
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((entry) => <li key={entry.path}><Link href={entry.path} className="card-gold block h-full rounded-2xl p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-goldbright"><p className="mb-3 text-xs uppercase tracking-wide text-sand">{entry.group}</p><h2 className="font-display text-xl text-goldbright">{entry.title}</h2><p lang="ur" dir="rtl" className="mt-3 font-arabic text-xl leading-loose text-ivory">{entry.urduTitle}</p><p className="mt-3 text-sm leading-relaxed text-sand">{entry.intro}</p><p className="mt-4 text-xs text-sand">{entry.scanned ? "Arabic & Urdu scanned edition" : entry.hasUrduTranslation ? "Arabic, English & Urdu meanings" : "Arabic & English · Urdu reading guidance"}</p><span className="mt-5 inline-block text-sm font-semibold text-goldbright">Read Ziyarat →</span></Link></li>)}</ul>
    {!visible.length && <p className="py-12 text-center text-sand">No matching Ziyarats. Try an alternate spelling or select all categories.</p>}
  </>;
}
