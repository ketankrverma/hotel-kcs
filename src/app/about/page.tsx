import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { HOTEL_INFO } from "@/data/hotel-info";

export const metadata: Metadata = {
  title: "About Us | Hotel KCS Begusarai",
  description:
    "Learn about Hotel KCS, Begusarai's premier hospitality address. Discover our philosophy of genuine care, modern guest comforts, and prime central location in Bihar.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="About Hotel KCS"
        subtitle="Where Authentic Bihari Warmth Meets Contemporary Hospitality in Begusarai"
        breadcrumbLabel="About Us"
        imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Hotel Introduction */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
              Our Identity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
              Hospitality Rooted in Care, Refined for Modern Living
            </h2>
            <p className="text-charcoal-700 text-base leading-relaxed">
              Situated in the prominent district center of Begusarai, Bihar, Hotel KCS was established to answer a clear need: providing travelers with an elegant, impeccably clean, and genuinely peaceful stay without compromise.
            </p>
            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
              Begusarai is known for its energetic enterprise, industrial vitality, and deep cultural roots. Whether our guests are arriving for corporate visits, family ceremonies, or regional transit, Hotel KCS welcomes them into a serene ambiance backed by modern amenities, attentive 24-hour service, and heartfelt cordiality.
            </p>
            <div className="pt-2 border-l-2 border-gold-500 pl-4 text-forest-900 font-serif italic text-lg">
              “Every detail of Hotel KCS is tailored around one goal: that each guest steps out feeling refreshed, valued, and completely at home.”
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                alt="Hotel KCS Guest Lounge"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg border-2 border-white mt-6 sm:mt-10">
              <Image
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                alt="Comfortable Room Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Philosophy */}
      <section className="py-20 bg-forest-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
              The Guiding Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Our Core Hospitality Philosophy
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We operate on principled principles of hospitality: transparency, thoughtful convenience, and authentic human service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-forest-900/90 p-8 rounded-xl border border-gold-500/20 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Genuine Human Warmth
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Hospitality is fundamentally about how a guest feels. Our team is trained to listen, assist proactively, and deliver service with polite humility and prompt attention.
              </p>
            </div>

            <div className="bg-forest-900/90 p-8 rounded-xl border border-gold-500/20 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Pristine Hygiene & Reliability
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Cleanliness is non-negotiable. Fresh laundered linen, thoroughly disinfected sanitary spaces, 100% generator power backup, and pure filtered water ensure hassle-free peace of mind.
              </p>
            </div>

            <div className="bg-forest-900/90 p-8 rounded-xl border border-gold-500/20 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Culinary Authenticity
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We take immense pride in regional cuisine. From traditional roasted Litti Chokha prepared with pure desi ghee to comforting homestyle daal and rotis, our kitchen serves food you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gold-500/20">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
              alt="Hotel KCS Exterior & Begusarai Location"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
              Connectivity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
              Strategic Advantages of Our Begusarai Location
            </h2>
            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
              When traveling for business or attending family functions, proximity to transit points and market facilities saves valuable hours. Hotel KCS is positioned right where you need it to be.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center space-x-3 text-sm text-charcoal-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Minutes away from Begusarai Railway Junction (BGS)</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-charcoal-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quick connectivity to national highways and transit bus corridors</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-charcoal-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Immediate access to premier banking branches, pharmacies, and markets</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-charcoal-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ample dedicated on-site parking for chauffeur and self-driven cars</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-forest-900 font-semibold text-xs uppercase tracking-wider hover:text-gold-700 transition-colors"
              >
                <span>View location map & driving routes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-[#F8F5EF] border-t border-gold-500/20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Ready to Experience Hotel KCS?
          </h3>
          <p className="text-charcoal-600 text-sm leading-relaxed">
            Choose your preferred room category or send a direct reservation inquiry for your upcoming travel dates to Begusarai.
          </p>
          <div className="pt-2">
            <Link
              href="/booking"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold px-8 py-3.5 rounded text-xs uppercase tracking-wider shadow-luxury-gold transition-all"
            >
              <span>Reserve Your Room</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

