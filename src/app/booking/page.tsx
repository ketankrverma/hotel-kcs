"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Users,
  Home,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Phone,
  Mail,
  FileText,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { ROOMS_DATA } from "@/data/rooms";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";
import { saveBooking } from "@/lib/storage";
import { BookingSubmission } from "@/types";

function BookingFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial defaults
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const queryRoom = searchParams.get("room") || "deluxe-room";
  const queryCheckIn = searchParams.get("checkIn") || formatDate(tomorrow);
  const queryCheckOut = searchParams.get("checkOut") || formatDate(dayAfter);
  const queryAdults = Number(searchParams.get("adults")) || 2;
  const queryChildren = Number(searchParams.get("children")) || 0;

  // State
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>(queryRoom);
  const [checkIn, setCheckIn] = useState<string>(queryCheckIn);
  const [checkOut, setCheckOut] = useState<string>(queryCheckOut);
  const [adults, setAdults] = useState<number>(queryAdults);
  const [children, setChildren] = useState<number>(queryChildren);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Sync if query param changed
  useEffect(() => {
    if (queryRoom && ROOMS_DATA.some((r) => r.slug === queryRoom)) {
      setSelectedRoomSlug(queryRoom);
    }
  }, [queryRoom]);

  // Selected Room
  const selectedRoom = useMemo(() => {
    return ROOMS_DATA.find((r) => r.slug === selectedRoomSlug) || ROOMS_DATA[1];
  }, [selectedRoomSlug]);

  // Calculation of Nights & Estimated Total
  const { nightsCount, estimatedTotal } = useMemo(() => {
    if (!checkIn || !checkOut) return { nightsCount: 1, estimatedTotal: selectedRoom.pricePerNight };
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const validNights = diffDays > 0 ? diffDays : 1;
    const total = validNights * selectedRoom.pricePerNight * roomsCount;
    return { nightsCount: validNights, estimatedTotal: total };
  }, [checkIn, checkOut, selectedRoom, roomsCount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Date validations
    if (!checkIn || !checkOut) {
      setErrorMessage("Please choose both check-in and check-out dates.");
      return;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (end <= start) {
      setErrorMessage("Check-out date must be after check-in date.");
      return;
    }

    // Phone validation (simple 10-digit Indian number or international)
    const phoneClean = phone.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      setErrorMessage("Please enter a valid phone number (at least 10 digits).");
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage("Please provide your full name.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Generate unique reference (e.g. KCS-749201)
    const randomSix = Math.floor(100000 + Math.random() * 900000);
    const reference = `KCS-${randomSix}`;

    const newBooking: BookingSubmission = {
      reference,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      checkIn,
      checkOut,
      adults,
      children,
      roomsCount,
      roomSlug: selectedRoom.slug,
      roomName: selectedRoom.name,
      specialRequests: specialRequests.trim(),
      estimatedTotal,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    saveBooking(newBooking);

    // Navigate to confirmation page
    router.push(`/booking-confirmation?ref=${reference}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left Column: Booking Form */}
      <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gold-500/20 shadow-md">
        <div className="border-b border-gray-100 pb-5 mb-6">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
            Reservation Request
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
            Guest & Stay Details
          </h2>
          <p className="text-charcoal-600 text-xs sm:text-sm mt-1">
            Fill out the details below to submit your reservation request. Our front desk will confirm your room promptly.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 flex items-center space-x-2 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-3 rounded-lg text-xs sm:text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Room Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center space-x-1.5">
              <Home className="w-4 h-4 text-gold-600" />
              <span>Select Room Category *</span>
            </label>
            <select
              value={selectedRoomSlug}
              onChange={(e) => setSelectedRoomSlug(e.target.value)}
              className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name} - ₹{r.pricePerNight} / night ({r.bedType})
                </option>
              ))}
            </select>
          </div>

          {/* Dates: Check-in & Check-out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-gold-600" />
                <span>Check-in Date *</span>
              </label>
              <input
                type="date"
                min={formatDate(today)}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-gold-600" />
                <span>Check-out Date *</span>
              </label>
              <input
                type="date"
                min={checkIn || formatDate(tomorrow)}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Guests & Room Count */}
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-900">
                Adults *
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Adults</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-900">
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
              >
                <option value={0}>0 Children</option>
                <option value={1}>1 Child</option>
                <option value={2}>2 Children</option>
                <option value={3}>3 Children</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-forest-900">
                Rooms *
              </label>
              <select
                value={roomsCount}
                onChange={(e) => setRoomsCount(Number(e.target.value))}
                className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 focus:outline-none"
              >
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
                <option value={3}>3 Rooms</option>
                <option value={4}>4 Rooms</option>
              </select>
            </div>
          </div>

          {/* Guest Personal Information */}
          <div className="pt-2 border-t border-gray-100 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Primary Guest Contact Information
            </h3>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal-700">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Chandra Jha"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal-700 flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-gold-600" />
                  <span>Mobile Phone Number *</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98350 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal-700 flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-gold-600" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  placeholder="ramesh@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal-700">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Early check-in preference, airport/train arrival time, ground floor room..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-ivory-50 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Submission Notice */}
          <div className="bg-ivory-100 p-4 rounded-lg border border-gold-500/20 text-xs text-charcoal-600 space-y-1">
            <p className="font-semibold text-forest-950 flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct Reservation Guarantee</span>
            </p>
            <p>
              Your reservation is registered directly with Hotel KCS. No advance payment is charged online; you may settle your bill at check-in or upon departure via Cash, UPI, or Credit Card.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold py-4 rounded-lg text-sm uppercase tracking-wider shadow-luxury-gold hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{isSubmitting ? "Generating Confirmation..." : "Confirm & Send Reservation Request"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Right Column: Live Booking Summary & WhatsApp Option */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-forest-950 text-white p-6 sm:p-7 rounded-2xl border border-gold-500/30 shadow-xl space-y-5">
          <div className="border-b border-white/10 pb-4">
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold">
              Stay Summary
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
              {selectedRoom.name}
            </h3>
            <span className="text-xs text-white/60">
              Hotel KCS • Begusarai, Bihar
            </span>
          </div>

          {/* Thumbnail preview */}
          <div className="relative h-44 w-full rounded-xl overflow-hidden border border-gold-500/20">
            <Image
              src={selectedRoom.coverImage}
              alt={selectedRoom.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Key Stay Breakdown */}
          <div className="space-y-3 text-xs sm:text-sm text-white/80">
            <div className="flex justify-between py-1 border-b border-white/10">
              <span className="text-white/60">Dates:</span>
              <span className="font-medium text-white">
                {checkIn} to {checkOut}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-white/10">
              <span className="text-white/60">Duration:</span>
              <span className="font-medium text-white">{nightsCount} Night(s)</span>
            </div>

            <div className="flex justify-between py-1 border-b border-white/10">
              <span className="text-white/60">Party Size:</span>
              <span className="font-medium text-white">
                {adults} Adult(s) {children > 0 ? `, ${children} Kid(s)` : ""}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-white/10">
              <span className="text-white/60">Rooms:</span>
              <span className="font-medium text-white">{roomsCount} Room(s)</span>
            </div>

            <div className="flex justify-between py-1 border-b border-white/10">
              <span className="text-white/60">Rate per Night:</span>
              <span className="font-medium text-gold-300">₹{selectedRoom.pricePerNight}</span>
            </div>
          </div>

          {/* Estimated Total */}
          <div className="bg-forest-900/90 p-4 rounded-xl border border-gold-500/30 flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gold-400 block">
                Estimated Room Total
              </span>
              <span className="text-xs text-white/60">Taxes calculated at hotel</span>
            </div>
            <div className="font-serif text-3xl font-bold text-white">
              ₹{estimatedTotal.toLocaleString("en-IN")}
            </div>
          </div>
        </div>

        {/* Alternative: Instant WhatsApp Booking */}
        <div className="bg-white p-6 rounded-2xl border border-gold-500/20 shadow-md space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-forest-950">
                Prefer WhatsApp Enquiry?
              </h4>
              <p className="text-xs text-charcoal-500">
                Chat directly with our reservations executive.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppBookingLink({
              roomName: selectedRoom.name,
              checkIn,
              checkOut,
              guests: adults + children,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Reserve Your Stay"
        subtitle="Effortless Direct Booking & Transparent Rates at Hotel KCS Begusarai"
        breadcrumbLabel="Booking"
        imageSrc="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-12 text-forest-900 font-serif">Loading reservation form...</div>}>
          <BookingFormInner />
        </Suspense>
      </section>
    </div>
  );
}

