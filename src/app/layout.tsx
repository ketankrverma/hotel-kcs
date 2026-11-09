import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { HOTEL_INFO } from "@/data/hotel-info";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelkcs.com"),
  title: {
    default: "Hotel KCS Begusarai | Comfortable Hotel Stay in Begusarai Bihar",
    template: "%s | Hotel KCS Begusarai",
  },
  description:
    "Experience comfort and authentic hospitality at Hotel KCS in Begusarai, Bihar. Premium rooms, multi-cuisine restaurant, banquet facilities, and 24/7 guest service near Begusarai Railway Station.",
  keywords: [
    "Hotel KCS",
    "Hotel KCS Begusarai",
    "Hotel in Begusarai",
    "Best hotel in Begusarai Bihar",
    "Begusarai hotel booking",
    "Rooms in Begusarai",
    "Luxury hotel Begusarai",
    "Bihari cuisine restaurant Begusarai",
    "Banquet hall Begusarai",
  ],
  authors: [{ name: "Hotel KCS" }],
  creator: "Hotel KCS",
  publisher: "Hotel KCS Begusarai",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Hotel KCS Begusarai | Luxury & Comfort in Begusarai, Bihar",
    description:
      "Premier hospitality in Begusarai, Bihar. Beautiful guest rooms, multi-cuisine dining, banquet hall, and high-speed Wi-Fi.",
    url: "https://hotelkcs.com",
    siteName: "Hotel KCS Begusarai",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hotel KCS Begusarai Lobby and Hospitality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel KCS Begusarai | Premier Hotel in Begusarai, Bihar",
    description: "Your welcoming stay in the heart of Begusarai. Book direct for best rates.",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: HOTEL_INFO.name,
    legalName: HOTEL_INFO.legalName,
    description: HOTEL_INFO.description,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    telephone: HOTEL_INFO.contact.phone,
    email: HOTEL_INFO.contact.email,
    url: "https://hotelkcs.com",
    priceRange: "₹₹ (INR 1,899 - 4,499)",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    checkinTime: "12:00",
    checkoutTime: "11:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: HOTEL_INFO.contact.address.street,
      addressLocality: HOTEL_INFO.contact.address.city,
      addressRegion: HOTEL_INFO.contact.address.state,
      postalCode: HOTEL_INFO.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.4208",
      longitude: "86.0641",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Complimentary Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Power Backup", value: true },
      { "@type": "LocationFeatureSpecification", name: "Multi-Cuisine Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Elevator / Lift", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-charcoal-800 antialiased selection:bg-gold-500 selection:text-forest-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

