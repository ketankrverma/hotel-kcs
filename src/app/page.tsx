import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Wifi,
  Coffee,
  Clock,
  ArrowRight,
  MapPin,
  Check,
  Star,
  Users,
  Bed,
  Sparkles,
  PhoneCall,
  CalendarCheck,
} from "lucide-react";
import BookingSearchPanel from "@/components/BookingSearchPanel";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";
import { ROOMS_DATA } from "@/data/rooms";
import { GALLERY_ITEMS } from "@/data/gallery";

export default function HomePage() {
  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="overflow-x-hidden">
      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-hidden">
        {/* Cinematic Hotel Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Hotel KCS Begusarai Luxury Architecture"
          fill
          priority
          className="object-cover object-center scale-105"
        />

        {/* Elegant Dark Vignette Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-6 pt-12 sm:pt-6">
          <div className="inline-flex items-center space-x-2 bg-gold-500/20 border border-gold-400/40 px-4 py-1.5 rounded-full text-gold-300 text-xs uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Welcome to Begusarai, Bihar</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl">
            Experience Comfort. <br />
            <span className="gold-text-gradient italic font-normal">Discover Hospitality.</span>
          </h1>

          <p className="text-gold-100/90 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Your welcoming stay in the heart of Begusarai. Thoughtful luxury, serene accommodations, and authentic Bihari warmth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-semibold px-8 py-3.5 rounded text-sm uppercase tracking-wider shadow-luxury-gold hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-forest-900/80 hover:bg-forest-900 text-white font-medium px-8 py-3.5 rounded text-sm uppercase tracking-wider border border-gold-400/50 hover:border-gold-300 transition-all duration-200"
            >
              <CalendarCheck className="w-4 h-4 text-gold-400" />
              <span>Book Your Stay</span>
            </Link>
          </div>
        </div>

        {/* Integrated Floating Booking Search Panel */}
        <div className="relative z-20 w-full max-w-5xl mx-auto mt-12 sm:mt-16">
          <BookingSearchPanel />
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. WELCOME SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Hotel KCS Reception & Welcoming Lobby"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-forest-950 text-white p-5 sm:p-6 rounded-xl border border-gold-500/30 shadow-2xl max-w-xs hidden sm:block">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest">
                  Hospitality Guarantee
                </p>
                <p className="font-serif text-xl text-white font-semibold mt-1">
                  Pristine Comfort & Seamless Care
                </p>
                <p className="text-white/70 text-xs mt-2">
                  24/7 dedicated reception, sanitised rooms & prime central connectivity.
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Hospitality Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
                <span className="w-8 h-[2px] bg-gold-600"></span>
                <span>The Hotel KCS Experience</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
                Welcome to Hotel KCS <br />
                <span className="italic font-normal text-gold-700">Begusarai, Bihar</span>
              </h2>

              <p className="text-charcoal-700 text-base leading-relaxed">
                Nestled conveniently in the bustling heart of Begusarai, Hotel KCS was conceived to bring a superior standard of hospitality, modern refinement, and personalized service to guests visiting this vibrant cultural and commercial hub of Bihar.
              </p>

              <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
                Whether you arrive for corporate engagements with nearby industrial enterprises, medical or administrative commitments, or joyful family celebrations, our tranquil sanctuaries provide an oasis of peaceful rest. Indulge in air-conditioned serenity, savor freshly made regional culinary specialties, and experience the gracious cordiality that makes every guest feel like family.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gold-500/20 shadow-sm">
                  <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-forest-950">24/7 Front Desk</h4>
                    <p className="text-xs text-charcoal-500 mt-0.5">Round-the-clock check-in & guest service</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gold-500/20 shadow-sm">
                  <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-forest-950">Central Hub</h4>
                    <p className="text-xs text-charcoal-500 mt-0.5">5 mins from Begusarai Railway Station</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-forest-900 font-semibold text-sm hover:text-gold-700 transition-colors uppercase tracking-wider group"
                >
                  <span>Read our story & philosophy</span>
                  <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ROOMS SECTION */}
      {/* ======================================================== */}
      <section className="py-20 bg-forest-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
              Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Suites & Sanctuaries Crafted for Rest
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Every room at Hotel KCS is thoughtfully furnished with high-grade acoustic insulation, plush bedding, modern climate control, and generous workspaces.
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="group bg-forest-900/90 rounded-xl overflow-hidden border border-gold-500/20 hover:border-gold-400/50 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={room.coverImage}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-forest-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-gold-300 border border-gold-400/30">
                    ₹{room.pricePerNight} <span className="font-light text-white/70">/ night</span>
                  </div>
                  {room.featured && (
                    <div className="absolute top-3 left-3 bg-gold-500 text-forest-950 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      Popular Choice
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-white/70 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-gold-200/80">
                      <div className="flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-gold-400" />
                        <span>Up to {room.maxGuests} Guests</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Bed className="w-3.5 h-3.5 text-gold-400" />
                        <span>{room.sizeSqFt} Sq. Ft</span>
                      </div>
                    </div>

                    {/* Amenities Checklist */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {room.amenities.slice(0, 3).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 text-white/80 text-[11px] px-2 py-0.5 rounded border border-white/5"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="inline-flex items-center justify-center text-xs text-white/90 hover:text-white border border-white/20 hover:border-gold-400/60 py-2 rounded transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/booking?room=${room.slug}`}
                      className="inline-flex items-center justify-center text-xs bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold py-2 rounded transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center space-x-2 text-gold-400 hover:text-gold-300 font-semibold text-sm uppercase tracking-wider transition-colors"
            >
              <span>View all room categories & comparisons</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. WHY CHOOSE US */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
              The Hotel KCS Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
              We focus on the essentials done exceptionally well: restful sleep, spotless hygiene, delicious food, and authentic Bihari hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOTEL_INFO.features.map((feat, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-xl border border-gold-500/20 shadow-sm hover:shadow-lg transition-all duration-200 space-y-3"
              >
                <div className="w-12 h-12 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center font-bold">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-950">
                  {feat.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. HOTEL EXPERIENCE: DINING & HOSPITALITY */}
      {/* ======================================================== */}
      <section className="py-20 bg-forest-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
                Culinary & Leisure
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Authentic Bihari Flavors & <br />
                <span className="gold-text-gradient italic font-normal">Fine Multi-Cuisine Dining</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Step into The KCS Flavours, our on-site restaurant serving freshly prepared regional delights like traditional Litti Chokha with desi ghee, spiced Handi specialties, North Indian tandoor dishes, and refreshing breakfast spreads.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Prepared with 100% hygienic RO water and authentic ingredients</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Dedicated Pure Vegetarian food preparation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Room service delivery straight to your door</span>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/dining"
                  className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider shadow-luxury-gold transition-colors"
                >
                  Explore Dining Menu
                </Link>
                <a
                  href={getWhatsAppBookingLink({ roomName: "Dining Table Reservation" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold-400/40 hover:border-gold-300 text-white font-medium px-6 py-3 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-2"
                >
                  <span>Reserve Table</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-gold-500/30">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Hotel KCS Restaurant Ambiance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-gold-500/30 mt-6 sm:mt-10">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Delicious Indian Food Preparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. GALLERY PREVIEW */}
      {/* ======================================================== */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
                Visual Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mt-1">
                Glimpses of Hotel KCS
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-gold-700 hover:text-forest-950 font-semibold text-sm uppercase tracking-wider transition-colors"
            >
              <span>View Full Gallery ({GALLERY_ITEMS.length} photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative h-72 rounded-xl overflow-hidden shadow-md block border border-gold-500/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-white mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. LOCATION & DIRECTIONS */}
      {/* ======================================================== */}
      <section className="py-20 bg-[#F8F5EF] border-t border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
                Strategic Location
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                In the Heart of Begusarai
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Hotel KCS offers an enviable location in Begusarai with hassle-free access to railway transport, corporate hubs, banks, and shopping markets.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-forest-950 text-sm">Full Address</h4>
                    <p className="text-charcoal-600 text-xs mt-0.5">
                      {HOTEL_INFO.contact.address.street}, {HOTEL_INFO.contact.address.city}, {HOTEL_INFO.contact.address.state} - {HOTEL_INFO.contact.address.pincode}
                    </p>
                    <p className="text-xs text-gold-700 font-medium mt-1">
                      Landmark: {HOTEL_INFO.contact.address.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <PhoneCall className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-forest-950 text-sm">Direct Desk Contacts</h4>
                    <p className="text-charcoal-600 text-xs mt-0.5">
                      Phone: {HOTEL_INFO.contact.phoneDisplay}
                    </p>
                    <p className="text-charcoal-600 text-xs">
                      WhatsApp: {HOTEL_INFO.contact.whatsappDisplay}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={HOTEL_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-forest-950 hover:bg-forest-900 text-gold-300 px-6 py-3 rounded text-xs uppercase tracking-wider font-semibold border border-gold-400/40 transition-colors shadow-md"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-xl overflow-hidden shadow-xl border-2 border-white relative bg-gray-200">
              <iframe
                title="Hotel KCS Begusarai Google Map"
                src={HOTEL_INFO.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. VERIFIED GUEST ASSURANCE (Clean, honest, non-fabricated) */}
      {/* ======================================================== */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-700 flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6" />
          </div>
          <span className="text-gold-700 text-xs uppercase tracking-[0.25em] font-semibold">
            Our Hospitality Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            A Transparent, Welcoming Guest Experience
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
            At Hotel KCS, we stand behind genuine guest satisfaction. We pride ourselves on transparent room pricing, confirmed amenities, immaculate cleanliness, and proactive staff assistance. When you book directly with us, you receive our best room allocation and personal attention from arrival to departure.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs text-charcoal-600 font-medium">
            <span className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>No Hidden Booking Fees</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Instant WhatsApp Support</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Free Cancellation Prior to Check-in Notice</span>
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. FINAL CTA SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-forest-950 text-white relative text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
            Plan Your Begusarai Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Your Comfortable Stay Awaits
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your room today for an unmatched stay in Begusarai. Book online in seconds or connect directly with our front desk for customized arrangements.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-forest-950 font-bold px-8 py-4 rounded text-sm uppercase tracking-wider shadow-luxury-gold hover:shadow-2xl transition-all duration-200"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserve Your Room</span>
            </Link>
            <a
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-forest-900 text-white font-medium px-8 py-4 rounded text-sm uppercase tracking-wider border border-gold-400/40 hover:border-gold-300 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

