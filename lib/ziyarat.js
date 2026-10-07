import index from "./ziyarat-index.json";
import { devotionalMetadata } from "./devotional";

export const ziyaratIndex = index;
export const ziyaratDirectory = {
  title: "Shia Ziyarat Library: Arabic, English & Urdu Readings",
  description: "Browse Shia Ziyarats by name, Imam, weekday or occasion. Read Ashura, Waritha, Aminullah, Aal Yasin and shrine visitations with texts and source references.",
};

export async function getZiyarat(slug) {
  if (!index.some((item) => item.slug === slug)) return null;
  return (await import(`./ziyarat/${slug}.json`)).default;
}

export function ziyaratMetadata(entry) {
  return devotionalMetadata(entry.title, entry.description, entry.path);
}
