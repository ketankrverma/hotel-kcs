import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Users,
  Bed,
  Maximize2,
  CheckCircle,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { ROOMS_DATA, getRoomBySlug, getAllRoomSlugs } from "@/data/rooms";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";

interface RoomDetailsProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRoomSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RoomDetailsProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    return {
      title: "Room Not Found | Hotel KCS Begusarai",
    };
  }

  return {
    title: `${room.name} | Hotel KCS Begusarai`,
    description: `${room.subtitle}. ${room.description} Book direct at Hotel KCS Begusarai, Bihar.`,
  };
}

export default async function RoomDetailsPage({ params }: RoomDetailsProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  // Similar rooms (excluding current)
  const similarRooms = ROOMS_DATA.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <div className="bg-[#FDFBF7]">
      {/* Top Banner */}
      <section className="bg-forest-950 text-white pt-10 pb-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/rooms" className="hover:text-white transition-colors">
              Rooms & Suites
            </Link>
            <span>/</span>
            <span className="text-white/80">{room.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
                {room.subtitle}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                {room.name}
              </h1>
              <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
                {room.description}
              </p>
            </div>

            <div className="bg-forest-900/90 border border-gold-500/30 p-5 rounded-xl text-right shrink-0">
              <span className="text-xs uppercase tracking-wider text-gold-400 block">
                Starting Tariff
              </span>
              <div className="font-serif text-3xl font-bold text-white mt-1">
                ₹{room.pricePerNight}
                <span className="text-xs font-sans text-white/70 font-normal ml-1">
                  / night
                </span>
              </div>
              <p className="text-[11px] text-white/50 mt-1">
                Inclusive of Wi-Fi & 24/7 power
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Visual Presentation */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image Stack & Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Primary Large Image */}
            <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <Image
                src={room.coverImage}
                alt={room.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Additional Room Photos */}
            {room.images.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {room.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-36 sm:h-48 rounded-xl overflow-hidden shadow border border-gold-500/20"
                  >
                    <Image
                      src={img}
                      alt={`${room.name} photo ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Room Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gold-500/20 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-950">
                Room Overview & Living Experience
              </h2>
              <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
                {room.longDescription}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xs uppercase tracking-widest font-bold text-gold-700 mb-3">
                  Key Category Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-charcoal-800">
                      <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gold-500/20 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-950">
                Amenities & In-Room Conveniences
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {room.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 p-2.5 rounded bg-ivory-50 border border-gold-500/10 text-xs sm:text-sm text-charcoal-700"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-6 sm:p-7 rounded-2xl border border-gold-500/30 shadow-xl space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                  Direct Reservation
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest-950 mt-1">
                  Book {room.name}
                </h3>
                <p className="text-xs text-charcoal-500 mt-1">
                  Guaranteed room reservation with zero hidden charges.
                </p>
              </div>

              {/* Summary Metrics */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-charcoal-500 flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gold-600" />
                    <span>Max Capacity</span>
                  </span>
                  <span className="font-semibold text-charcoal-800">
                    {room.maxGuests} Guests ({room.maxAdults} Adults)
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-charcoal-500 flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-gold-600" />
                    <span>Bed Configuration</span>
                  </span>
                  <span className="font-semibold text-charcoal-800">
                    {room.bedType}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-charcoal-500 flex items-center space-x-2">
                    <Maximize2 className="w-4 h-4 text-gold-600" />
                    <span>Floor Area</span>
                  </span>
                  <span className="font-semibold text-charcoal-800">
                    {room.sizeSqFt} Sq. Ft
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-charcoal-500">Check-in / Out</span>
                  <span className="font-semibold text-charcoal-800">
                    {HOTEL_INFO.contact.checkInTime} / {HOTEL_INFO.contact.checkOutTime}
                  </span>
                </div>
              </div>

              {/* Price Banner */}
              <div className="bg-ivory-100 p-4 rounded-xl border border-gold-500/20 text-center">
                <span className="text-xs text-charcoal-500 uppercase tracking-wider block">
                  Nightly Room Rate
                </span>
                <span className="font-serif text-3xl font-bold text-forest-950">
                  ₹{room.pricePerNight}
                </span>
                <span className="text-xs text-charcoal-500 block mt-1">
                  Excluding applicable GST
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href={`/booking?room=${room.slug}`}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold py-3.5 rounded text-xs uppercase tracking-wider shadow-luxury-gold transition-all"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve Online</span>
                </Link>

                <a
                  href={getWhatsAppBookingLink({ roomName: room.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 rounded text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-charcoal-500 flex items-center justify-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span>Instant request acknowledgement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Rooms Section */}
        <div className="mt-20 pt-12 border-t border-gold-500/20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-8">
            Other Accommodation Options
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarRooms.map((simRoom) => (
              <div
                key={simRoom.id}
                className="bg-white rounded-xl overflow-hidden border border-gold-500/20 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={simRoom.coverImage}
                    alt={simRoom.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-forest-950/80 px-2 py-1 rounded text-xs font-semibold text-gold-300">
                    ₹{simRoom.pricePerNight} / night
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-gold-700 transition-colors">
                      {simRoom.name}
                    </h4>
                    <p className="text-charcoal-600 text-xs mt-1 line-clamp-2">
                      {simRoom.description}
                    </p>
                  </div>
                  <Link
                    href={`/rooms/${simRoom.slug}`}
                    className="inline-flex items-center space-x-1 text-xs uppercase tracking-wider font-bold text-gold-700 hover:text-forest-950 transition-colors"
                  >
                    <span>View Room Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

