"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Clock,
  Sparkles,
  CheckCircle,
  FileText,
  PhoneCall,
  MessageCircle,
  Printer,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { DINING_HIGHLIGHTS, MENU_ITEMS } from "@/data/dining";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";

export default function DiningPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Bihari Delicacies",
    "Starters",
    "Main Course",
    "Breads & Rice",
    "Beverages & Desserts",
  ];

  const filteredItems = selectedCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrintMenu = () => {
    window.print();
  };

  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Dining at Hotel KCS"
        subtitle="The KCS Flavours - Authentic Regional Bihari Specialties & Fine Indian Cuisine"
        breadcrumbLabel="Dining"
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Culinary Introduction & Atmosphere */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
              The KCS Flavours
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
              Culinary Traditions Celebrated with Hygiene & Heart
            </h2>
            <p className="text-charcoal-700 text-base leading-relaxed">
              {DINING_HIGHLIGHTS.description}
            </p>

            {/* Timings Card */}
            <div className="bg-ivory-100 p-5 rounded-xl border border-gold-500/20 space-y-2 text-xs sm:text-sm text-charcoal-700">
              <h4 className="font-bold uppercase tracking-wider text-forest-950 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gold-600" />
                <span>Service Schedule & Hours</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <span className="text-charcoal-500 block">Breakfast Buffet:</span>
                  <span className="font-semibold">{DINING_HIGHLIGHTS.timings.breakfast}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block">Lunch Service:</span>
                  <span className="font-semibold">{DINING_HIGHLIGHTS.timings.lunch}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block">Dinner Service:</span>
                  <span className="font-semibold">{DINING_HIGHLIGHTS.timings.dinner}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block">In-Room Dining:</span>
                  <span className="font-semibold">24 Hours (Available)</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handlePrintMenu}
                className="inline-flex items-center space-x-2 bg-forest-950 hover:bg-forest-900 text-gold-300 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Printer className="w-4 h-4 text-gold-400" />
                <span>Download / Print Menu</span>
              </button>

              <a
                href={getWhatsAppBookingLink({ roomName: "The KCS Flavours Restaurant Table" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve a Table</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="Fine Indian Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white mt-8">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Restaurant Dining Atmosphere"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Presentation */}
      <section className="py-16 bg-[#F8F5EF] border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
              A la Carte Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
              The KCS Flavours Menu
            </h2>
            <p className="text-charcoal-600 text-sm leading-relaxed">
              Carefully curated recipes made with fresh local produce, unadulterated spices, and hygienic standards.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-forest-950 text-gold-300 shadow-md"
                    : "bg-white text-charcoal-700 hover:bg-forest-900 hover:text-white border border-gold-500/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gold-500/20 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center space-x-2.5">
                      {/* Veg / Non-Veg Indicator Dot */}
                      <span
                        className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 ${
                          item.isVeg
                            ? "border-emerald-600 text-emerald-600"
                            : "border-rose-600 text-rose-600"
                        }`}
                        title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? "bg-emerald-600" : "bg-rose-600"
                          }`}
                        />
                      </span>

                      <h3 className="font-serif text-lg font-bold text-forest-950">
                        {item.name}
                      </h3>
                    </div>

                    <span className="font-serif font-bold text-lg text-forest-900 shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>

                {item.isPopular && (
                  <div className="mt-3 pl-6 flex items-center space-x-1 text-[11px] text-gold-700 font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    <span>Chef&apos;s Recommendation</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Notice & Disclaimer */}
          <div className="mt-12 text-center text-xs text-charcoal-500 max-w-2xl mx-auto">
            * All prices in INR. Government taxes applicable. Handi preparations are cooked fresh in small batches to preserve true regional taste. Please inform our servers of any dietary requirements or spice preferences.
          </div>
        </div>
      </section>
    </div>
  );
}

