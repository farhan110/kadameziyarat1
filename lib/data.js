export const site = {
  name: "Kadam-e-Ziyarat",
  domain: "kadameziyarat.com",
  url: "https://kadameziyarat.com",
  email: "info@kadameziyarat.com",
  whatsappNumber: "+91 70071 89274",
  whatsappLink:
    "https://wa.me/917007189274?text=Assalamu%20Alaikum%2C%20I%20want%20to%20enquire%20about%20a%20Ziyarat%20package.",
  phone: "+91 70071 89274",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  {
    label: "Packages",
    children: [
      { href: "/packages/iraq", label: "Iraq Ziyarat" },
      { href: "/packages/iran", label: "Iran Ziyarat" },
      { href: "/packages/combined", label: "Iraq + Iran Combined" },
      { href: "/packages/arbaeen", label: "Arbaeen Special" },
    ],
  },
  { href: "/destinations", label: "Destinations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const destinations = [
  { city: "Karbala", shrine: "Imam Hussain (A.S.) & Hazrat Abbas (A.S.)", country: "Iraq" },
  { city: "Najaf", shrine: "Imam Ali (A.S.)", country: "Iraq" },
  { city: "Kazmain", shrine: "Imam Musa al-Kadhim (A.S.) & Imam Jawad (A.S.)", country: "Iraq" },
  { city: "Baghdad", shrine: "Historical mosques & sites", country: "Iraq" },
  { city: "Samarra", shrine: "Imam Hadi (A.S.) & Imam Askari (A.S.)", country: "Iraq" },
  { city: "Mashhad", shrine: "Imam Reza (A.S.)", country: "Iran" },
  { city: "Qom", shrine: "Hazrat Masuma (S.A.)", country: "Iran" },
  { city: "Shiraz", shrine: "Shah Cheragh Shrine", country: "Iran" },
];

export const iraqTiers = [
  { tier: "Budget", hotel: "Standard hotels", duration: "8–10 Days", price: "$400" },
  { tier: "Economy", hotel: "Good proximity hotels", duration: "10–11 Days", price: "$550" },
  { tier: "Standard", hotel: "Quality hotels near shrine", duration: "10–14 Days", price: "$750" },
  { tier: "Deluxe", hotel: "Premium hotels, Haram view", duration: "10–14 Days", price: "$1,000" },
  { tier: "Premium", hotel: "Luxury hotels, private transport", duration: "10–14 Days", price: "$1,500+" },
];

export const iranTiers = [
  { tier: "Economy", hotel: "3-star hotels", duration: "7–9 Days", price: "$500" },
  { tier: "Standard", hotel: "4-star hotels near shrine", duration: "8–10 Days", price: "$750" },
  { tier: "Deluxe", hotel: "Premium hotels", duration: "8–10 Days", price: "$1,100" },
  { tier: "Premium", hotel: "5-star luxury", duration: "10–12 Days", price: "$1,800+" },
];

export const combinedTiers = [
  { tier: "Economy", duration: "15–18 Days", price: "$1,200" },
  { tier: "Standard", duration: "18–20 Days", price: "$1,800" },
  { tier: "Deluxe", duration: "18–21 Days", price: "$2,500" },
  { tier: "Premium", duration: "20–25 Days", price: "$3,500+" },
];

export const arbaeenTiers = [
  { tier: "Budget", duration: "7–10 Days", hotel: "Shared rooms", transport: "Standard bus", price: "$800" },
  { tier: "Economy", duration: "7–10 Days", hotel: "Good hotels", transport: "Group transport", price: "$1,000" },
  { tier: "Standard", duration: "10–14 Days", hotel: "Quality hotels", transport: "Dedicated bus", price: "$1,350" },
  { tier: "Deluxe", duration: "10–14 Days", hotel: "Near Haram", transport: "Upgraded transport", price: "$1,850" },
  { tier: "Premium", duration: "10–14 Days", hotel: "Star-rated luxury", transport: "Private vehicle", price: "$2,500+" },
];

export const faqs = [
  {
    q: "What documents do I need for Iraq Ziyarat?",
    a: "You need a valid passport (with at least 6 months validity), an Iraq visa (which we process for you), passport-size photographs, and your flight booking confirmation. We guide you through the entire documentation process.",
  },
  {
    q: "Do you process visas for all nationalities?",
    a: "Yes. Kadam-e-Ziyarat processes Iraq and Iran visas for pilgrims from all countries including India, Pakistan, the UK, USA, Canada, Australia, and African and European nations.",
  },
  {
    q: "How close are the hotels to the shrines?",
    a: "All our hotels are selected for their proximity to the holy shrines. In Karbala, most hotels are within 5–10 minutes walking distance from the Haram of Imam Hussain (A.S.). In Najaf, hotels are on Sharah Rasool and Zain ul Abideen Street, a short walk from the Haram of Imam Ali (A.S.). In Mashhad, hotels are near the Razavi shrine complex.",
  },
  {
    q: "Can I travel with my family, including elderly and children?",
    a: "Absolutely. Many of our pilgrims travel with elderly parents and young children. We ensure comfortable transport, accessible hotel rooms, and a pace of Ziyarat that accommodates all family members. We also offer family rooms in hotels upon request.",
  },
  {
    q: "What is included in a ground package?",
    a: "Ground packages include hotel accommodation, daily meals, all intercity transport within Iraq or Iran, guided Ziyarat at all sites, and airport or border pickup and drop-off. Flights and visas are not included in ground packages — those are covered in our complete packages.",
  },
  {
    q: "Is it safe to travel to Iraq and Iran for Ziyarat?",
    a: "Millions of pilgrims visit Iraq and Iran every year for Ziyarat without incident. The holy cities of Karbala, Najaf, Mashhad, and Qom are set up to welcome pilgrims and are well-secured. Our local team provides real-time updates and support throughout your journey.",
  },
  {
    q: "When is the best time to visit Iraq for Ziyarat?",
    a: "Iraq can be visited year-round. The most popular times are Muharram (for Ashura), Safar (for Arbaeen), Rajab and Shaban (for birth anniversaries), and Ramadan (for Laylatul Qadr). Each period offers a unique spiritual experience. Summer months (June–August) are hot, so spring (March–May) and autumn (October–November) are the most comfortable in terms of weather.",
  },
  {
    q: "Can I customize my package?",
    a: "Yes. We offer custom and private itineraries for individuals, families, and groups. You can choose your cities, duration, hotel category, and travel dates. Contact us with your preferences and we will create a tailored plan.",
  },
  {
    q: "What meals are provided?",
    a: "All our packages include three daily meals — breakfast, lunch, and dinner. Meals are halal and prepared to accommodate South Asian, Middle Eastern, and international tastes. Special dietary requirements can be arranged with advance notice.",
  },
  {
    q: "How do I book a package?",
    a: "You can book by contacting us on WhatsApp, calling our helpline, sending an email, or filling out the enquiry form on our website. Our team will respond within 24 hours with package details and availability.",
  },
];
