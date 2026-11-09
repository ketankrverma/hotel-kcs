"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Bed,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Maximize2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { ROOMS_DATA } from "@/data/rooms";

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredRooms = activeCategory === "all"
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeCategory);

  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Rooms & Suites"
        subtitle="Sanctuaries of Comfort, Tranquility, and Contemporary Elegance in Begusarai"
        breadcrumbLabel="Rooms & Suites"
        imageSrc="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro & Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-gold-500/20">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Select Your Preferred Space
            </h2>
            <p className="text-charcoal-600 text-sm mt-1">
              All categories include 24/7 power backup, complimentary Wi-Fi, and ensuite bathrooms.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-ivory-100 p-1.5 rounded-lg border border-gold-500/20">
            {[
              { id: "all", label: "All Rooms" },
              { id: "standard", label: "Standard" },
              { id: "deluxe", label: "Deluxe" },
              { id: "premium", label: "Premium" },
              { id: "suite", label: "Family Suite" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeCategory === tab.id
                    ? "bg-forest-900 text-gold-300 shadow-sm"
                    : "text-charcoal-600 hover:text-forest-950 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Stack / Grid */}
        <div className="mt-12 space-y-12">
          {filteredRooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[300px]">
                <Image
                  src={room.coverImage}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-semibold text-gold-300 border border-gold-400/30">
                  {room.bedType}
                </div>
              </div>

              {/* Details side */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-bold">
                        {room.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-0.5">
                        {room.name}
                      </h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-forest-900 font-serif">
                        ₹{room.pricePerNight}
                        <span className="text-xs text-charcoal-500 font-sans font-normal ml-1">
                          / night + taxes
                        </span>
                      </div>
                      {room.originalPrice && (
                        <div className="text-xs text-charcoal-400 line-through">
                          ₹{room.originalPrice} per night
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-charcoal-600 text-sm leading-relaxed mt-3">
                    {room.description}
                  </p>

                  {/* Room Highlights & Key Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 py-4 border-y border-gray-100 text-xs">
                    <div className="flex items-center space-x-2 text-charcoal-700">
                      <Users className="w-4 h-4 text-gold-600" />
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>
                    <div className="flex items-center space-x-2 text-charcoal-700">
                      <Bed className="w-4 h-4 text-gold-600" />
                      <span>{room.bedType}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-charcoal-700">
                      <Maximize2 className="w-4 h-4 text-gold-600" />
                      <span>{room.sizeSqFt} Sq. Ft Area</span>
                    </div>
                  </div>

                  {/* Amenities Pills */}
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-forest-900 mb-2">
                      Included In This Category:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center space-x-1 text-xs text-charcoal-700 bg-ivory-100 border border-gold-500/20 px-2.5 py-1 rounded"
                        >
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>{amenity}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-forest-900 hover:border-gold-600 text-forest-950 font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Full Specifications & Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/booking?room=${room.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold px-7 py-3 rounded text-xs uppercase tracking-wider shadow-luxury-gold transition-all"
                  >
                    <span>Book This Room</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom policy reassurance */}
        <div className="mt-16 bg-ivory-100 p-6 sm:p-8 rounded-xl border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="w-8 h-8 text-gold-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-lg font-bold text-forest-950">
                Direct Booking Assurance
              </h4>
              <p className="text-charcoal-600 text-xs sm:text-sm mt-0.5">
                Always get priority check-in, transparent room pricing, and direct concierge contact by booking through our official website.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-xs uppercase tracking-wider font-bold text-forest-900 hover:text-gold-700 transition-colors border-b border-forest-900 pb-0.5"
          >
            Have special requirements? Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

