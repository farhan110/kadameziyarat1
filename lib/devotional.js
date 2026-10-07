import content from "./devotional-content.json";

export const devotionalBase = "https://www.kadameziyarat.com";
export const devotionalContent = content;
export const devotionalSections = {
  duas: {
    name: "Duas",
    title: "Duas in Arabic with English & Urdu Meanings",
    description: "Browse Quranic duas and short Ahlul Bayt supplications. Read Arabic text, English transliteration, English and Urdu meanings on individual pages.",
    lead: "Find a supplication by name or theme. Open a card to read its Arabic text, pronunciation, English meaning and Urdu translation.",
    action: "Read Dua",
  },
  tasbih: {
    name: "Tasbih",
    title: "Tasbih & Dhikr: Arabic, Meanings and Recitation Guides",
    description: "Read Tasbih Fatima Zahra, Tasbihat Arbaa, salawat and daily dhikr with Arabic, transliteration, English and Urdu meanings and relevant counts.",
    lead: "Explore tasbih, salawat and daily remembrance. Open a card for the wording and meaning, with counts where the particular practice specifies them.",
    action: "Read Tasbih",
  },
  amaal: {
    name: "Amaal",
    title: "Shia Amaal Guides: Daily Worship & Islamic Occasions",
    description: "Explore selected Shia Amaal for Laylat al-Qadr, 15 Shaban, Eid, Friday and after prayer, with English and Urdu steps and related recitations.",
    lead: "Explore selected acts of worship for daily life and Islamic occasions. Open a guide for timing, English and Urdu instructions and related recitations.",
    action: "Read Amaal",
  },
};

export function devotionalMetadata(title, description, path) {
  const url = `${devotionalBase}${path}`;
  const fullTitle = `${title} | Kadam-e-Ziyarat`;
  return {
    title: { absolute: fullTitle },
    description,
    keywords: [title],
    alternates: { canonical: url },
    openGraph: { title: fullTitle, description, url, type: "website", siteName: "Kadam-e-Ziyarat" },
    twitter: { card: "summary", title: fullTitle, description },
  };
}

export function devotionalJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
