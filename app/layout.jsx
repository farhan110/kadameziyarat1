import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL("https://kadameziyarat.com"),
  title: {
    default:
      "Kadam-e-Ziyarat | Iraq & Iran Ziyarat Packages | Trusted Pilgrimage Tours",
    template: "%s | Kadam-e-Ziyarat",
  },
  description:
    "Book affordable Iraq and Iran Ziyarat packages with Kadam-e-Ziyarat. Guided tours to Karbala, Najaf, Mashhad, and Qom. Visa assistance, hotels near holy shrines, and 24/7 support for pilgrims worldwide.",
  keywords: [
    "ziyarat packages",
    "iraq ziyarat",
    "iran ziyarat",
    "karbala packages",
    "najaf tours",
    "mashhad ziyarat",
    "arbaeen packages",
    "shia pilgrimage tours",
    "ziyarat Iraq Iran",
  ],
  openGraph: {
    type: "website",
    siteName: "Kadam-e-Ziyarat",
    title: "Kadam-e-Ziyarat | Iraq & Iran Ziyarat Packages",
    description:
      "Guided Ziyarat tours to Karbala, Najaf, Mashhad & Qom with visa assistance, hotels near the holy shrines and 24/7 support.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Mulish:wght@300;400;600;700;800&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
