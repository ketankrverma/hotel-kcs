import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Zap,
  Wifi,
  UtensilsCrossed,
  Users,
  Clock,
  ArrowUpDown,
  Car,
  Coffee,
  Sparkles,
  HeartPulse,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { FACILITIES_DATA } from "@/data/facilities";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";

export const metadata: Metadata = {
  title: "Amenities & Facilities | Hotel KCS Begusarai",
  description:
    "Explore the premium amenities and guest facilities at Hotel KCS Begusarai: 24/7 power backup, complimentary Wi-Fi, banquet hall, multi-cuisine dining, elevator, and secure parking.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-gold-600" />,
  Wifi: <Wifi className="w-6 h-6 text-gold-600" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-gold-600" />,
  Users: <Users className="w-6 h-6 text-gold-600" />,
  Clock: <Clock className="w-6 h-6 text-gold-600" />,
  ArrowUpDown: <ArrowUpDown className="w-6 h-6 text-gold-600" />,
  Car: <Car className="w-6 h-6 text-gold-600" />,
  Coffee: <Coffee className="w-6 h-6 text-gold-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-gold-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-gold-600" />,
};

export default function FacilitiesPage() {
  const categories: Array<"Convenience & Security" | "Room Comfort" | "Dining & Events" | "Guest Services"> = [
    "Convenience & Security",
    "Room Comfort",
    "Dining & Events",
    "Guest Services",
  ];

  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Amenities & Facilities"
        subtitle="Modern Conveniences and Thoughtful Services Engineered for Seamless Living"
        breadcrumbLabel="Facilities"
        imageSrc="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
            Designed for Guest Comfort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            Facilities That Make All the Difference
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            From round-the-clock uninterrupted power to high-speed fiber internet and safe on-site parking, we ensure every aspect of your stay in Begusarai is effortless and secure.
          </p>
        </div>

        {/* Grouped Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES_DATA.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-xl overflow-hidden border border-gold-500/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {fac.image && (
                <div className="relative h-44 w-full">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                    {fac.category}
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-ivory-100 flex items-center justify-center border border-gold-500/20">
                    {ICON_MAP[fac.iconName] || <Sparkles className="w-5 h-5 text-gold-600" />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-950">
                    {fac.title}
                  </h3>
                  <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banquet & Corporate Event Feature */}
        <div className="bg-forest-950 text-white rounded-2xl p-8 sm:p-12 border border-gold-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
              Host with Elegance
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Banquets, Conferences & Family Ceremonies
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
              Planning a corporate meeting, business seminar, wedding reception, or family dinner in Begusarai? Our versatile event spaces offer customizable seating, projector audio-visual support, and customized catering menus.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-gold-200/90">
              <span className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Audio / Visual Setup</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Custom Regional & Multi-Cuisine Menus</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Banquet Staff</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col space-y-3">
            <a
              href={getWhatsAppBookingLink({ roomName: "Banquet Hall & Event Enquiry" })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider shadow-luxury-gold transition-all"
            >
              Enquire for Banquet Hall
            </a>
            <Link
              href="/contact"
              className="w-full text-center bg-forest-900 hover:bg-forest-800 text-white border border-gold-400/40 px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Contact Event Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

