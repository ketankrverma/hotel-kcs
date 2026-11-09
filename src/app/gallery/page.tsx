"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import LightboxModal from "@/components/LightboxModal";
import { GALLERY_ITEMS } from "@/data/gallery";
import { GalleryItem } from "@/types";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "rooms", label: "Rooms & Suites" },
    { id: "dining", label: "Dining & Cuisine" },
    { id: "interiors", label: "Interiors & Lobby" },
    { id: "amenities", label: "Amenities & Banquets" },
    { id: "exterior", label: "Exterior & Architecture" },
  ];

  const filteredItems: GalleryItem[] = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setCurrentIndex(idx);
      setLightboxOpen(true);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Hotel Gallery"
        subtitle="A Visual Journey Through the Comforts, Spaces, and Hospitality of Hotel KCS Begusarai"
        breadcrumbLabel="Gallery"
        imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-forest-950 text-gold-300 shadow-md"
                  : "bg-white text-charcoal-700 hover:bg-forest-900 hover:text-white border border-gold-500/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer shadow-md border border-gold-500/20 bg-forest-950"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Zoom icon on hover */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-forest-950/80 text-gold-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Photography */}
        <div className="mt-14 p-6 bg-ivory-100 rounded-xl border border-gold-500/20 text-center max-w-2xl mx-auto text-xs text-charcoal-600 space-y-1">
          <p className="font-semibold text-forest-950">
            Hotel KCS Representative Photography Standards
          </p>
          <p>
            The images displayed depict the architecture, interior quality, and culinary presentation standards maintained at Hotel KCS Begusarai. Room views and furnishings may vary slightly based on specific room allocation.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

