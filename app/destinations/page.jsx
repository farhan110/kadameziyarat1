import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Ziyarat Destinations Guide | Karbala, Najaf, Mashhad, Qom",
  description:
    "Explore the holy cities of Iraq and Iran. Learn about Karbala, Najaf, Kazmain, Samarra, Mashhad, Qom, and Shiraz. Shrine details, city guides, and travel tips for Ziyarat pilgrims.",
  keywords: [
    "karbala city guide",
    "najaf ziyarat guide",
    "mashhad travel guide",
    "qom pilgrimage",
    "samarra shrines",
    "iraq holy cities",
    "iran holy cities",
  ],
};

const iraqCities = [
  {
    name: "Karbala",
    subtitle: "The Land of Imam Hussain (A.S.)",
    text: "Karbala is the city where Imam Hussain (A.S.), the grandson of Prophet Muhammad (S.A.W.W.), was martyred along with 72 companions on the 10th of Muharram, 61 AH. The twin shrines of Imam Hussain (A.S.) and his brother Hazrat Abbas (A.S.) are among the most visited pilgrimage sites in the world.",
    sites: [
      "Holy Shrine of Imam Hussain (A.S.)",
      "Holy Shrine of Hazrat Abbas (A.S.)",
      "Khaimgah (site of the tent camp)",
      "Tal-e-Zainabiyya",
      "Maqam of Imam Mahdi (A.T.F.S.)",
      "Shrine of Hazrat Hur ibn Yazid",
    ],
  },
  {
    name: "Najaf",
    subtitle: "The City of Imam Ali (A.S.)",
    text: "Najaf is one of the holiest cities in Shia Islam, home to the magnificent shrine of Imam Ali (A.S.), the first Shia Imam. It is also a major centre of Islamic scholarship, housing the Hawza Ilmiyya (seminary) and the world's largest cemetery, Wadi-us-Salaam.",
    sites: [
      "Holy Shrine of Imam Ali (A.S.)",
      "Masjid-e-Kufa (where Imam Ali A.S. was struck)",
      "Masjid-e-Sahla",
      "Wadi-us-Salaam cemetery",
      "Masjid-e-Hanana",
      "House of Imam Ali (A.S.) in Kufa",
    ],
  },
  {
    name: "Kazmain",
    subtitle: "The Shrine of Two Imams",
    text: "Located in Baghdad, Kazmain houses the shrines of the 7th Imam, Musa al-Kadhim (A.S.), and the 9th Imam, Muhammad al-Jawad (A.S.). The golden dome of the Kazmain shrine is one of the most recognizable landmarks of Baghdad.",
    sites: [],
  },
  {
    name: "Samarra",
    subtitle: "City of the Askari Shrine",
    text: "Samarra contains the shrines of the 10th Imam, Ali al-Hadi (A.S.), and the 11th Imam, Hasan al-Askari (A.S.). It is also the site of the sardab (cellar) associated with the occultation of the 12th Imam, Imam Mahdi (A.T.F.S.). The city also features the famous spiral minaret of the Great Mosque.",
    sites: [],
  },
];

const iranCities = [
  {
    name: "Mashhad",
    subtitle: "City of Imam Reza (A.S.)",
    text: "Mashhad is the most visited city in Iran, drawing over 20 million pilgrims annually. The Shrine of Imam Reza (A.S.), the 8th Imam, is a vast complex featuring the golden dome, Goharshad Mosque, a museum, a library, and beautiful courtyards. The atmosphere is one of profound devotion and spiritual healing.",
    sites: [],
  },
  {
    name: "Qom",
    subtitle: "City of Hazrat Masuma (S.A.)",
    text: "Qom is the religious capital of Iran and home to the Shrine of Hazrat Fatima al-Masuma (S.A.), sister of Imam Reza (A.S.). The city is also renowned for its Islamic seminaries (hawza) and the nearby Masjid-e-Jamkaran, believed to be a site of special significance for Imam Mahdi (A.T.F.S.).",
    sites: [],
  },
  {
    name: "Shiraz",
    subtitle: "City of Shah Cheragh",
    text: "Shiraz is a city of poets, gardens, and sacred shrines. The Shah Cheragh shrine, resting place of Ahmad and Muhammad (sons of Imam Musa al-Kadhim A.S.), is famous for its stunning mirror-mosaic interior that creates an effect described as a hall of diamonds. Shiraz also offers the Nasir al-Mulk Mosque, Eram Garden, and the tombs of poets Hafez and Saadi.",
    sites: [],
  },
];

function CityCard({ city, i }) {
  return (
    <Reveal variant={i % 2 === 0 ? "reveal-left" : "reveal-right"} className="card-gold rounded-2xl p-8 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        {city.subtitle}
      </p>
      <h3 className="mt-2 font-display text-3xl gold-text">{city.name}</h3>
      <div className="ornament-line mt-5 w-20" />
      <p className="mt-6 text-sm leading-relaxed text-ivory/85 sm:text-base">
        {city.text}
      </p>
      {city.sites.length > 0 && (
        <>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Key Ziyarat Sites
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {city.sites.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-sand">
                <svg viewBox="0 0 24 24" className="mt-1 h-3 w-3 shrink-0 text-gold" aria-hidden="true"><path d="M12 1 L14.7 9.3 L23 12 L14.7 14.7 L12 23 L9.3 14.7 L1 12 L9.3 9.3 Z" fill="currentColor"/></svg>
                {s}
              </li>
            ))}
          </ul>
        </>
      )}
    </Reveal>
  );
}

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations Guide"
        title="A Pilgrim's Guide to the Holy Cities of Iraq & Iran"
        lead="Understanding the spiritual and historical significance of each city enriches the Ziyarat experience. Here is a detailed guide to every destination covered in our packages."
      />

      <section className="bg-night py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Republic of Iraq" title="The Holy Cities of Iraq" />
          <div className="mt-14 space-y-8">
            {iraqCities.map((c, i) => (
              <CityCard key={c.name} city={c} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-coal py-20">
        <div className="girih pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Islamic Republic of Iran" title="The Holy Cities of Iran" />
          <div className="mt-14 space-y-8">
            {iranCities.map((c, i) => (
              <CityCard key={c.name} city={c} i={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Which City Is Calling You?" />
    </>
  );
}
