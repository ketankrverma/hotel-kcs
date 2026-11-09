"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  Printer,
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { getBookingByRef, getStoredBookings } from "@/lib/storage";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";
import { BookingSubmission } from "@/types";

function BookingConfirmationInner() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref");
  const [booking, setBooking] = useState<BookingSubmission | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (refParam) {
      const found = getBookingByRef(refParam);
      if (found) {
        setBooking(found);
      } else {
        // Check latest from storage
        const all = getStoredBookings();
        if (all.length > 0) setBooking(all[0]);
      }
    } else {
      const all = getStoredBookings();
      if (all.length > 0) setBooking(all[0]);
    }
    setLoading(false);
  }, [refParam]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="py-20 text-center font-serif text-xl text-forest-950">
        Locating reservation record...
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="py-20 max-w-xl mx-auto text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-forest-950">
          No Booking Record Found
        </h2>
        <p className="text-charcoal-600 text-sm">
          We couldn&apos;t find an active reservation for this reference. Please check your reference code or contact our reception.
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center space-x-2 bg-gold-500 text-forest-950 font-bold px-6 py-3 rounded text-xs uppercase tracking-wider"
        >
          <span>Create New Booking</span>
        </Link>
      </div>
    );
  }

  const isConfirmed = booking.status === "confirmed";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Success Badge Banner */}
      <div className="bg-forest-950 text-white p-8 rounded-2xl border border-gold-500/30 text-center space-y-4 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
          <CheckCircle className="w-9 h-9" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block">
          Reservation Request Received
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Thank You, {booking.fullName}!
        </h1>

        <p className="text-white/80 text-sm max-w-lg mx-auto leading-relaxed">
          Your booking inquiry has been recorded under reference code:
        </p>

        <div className="inline-block bg-forest-900 border border-gold-400/50 px-6 py-2.5 rounded-lg">
          <span className="font-mono text-2xl font-bold tracking-widest text-gold-300">
            {booking.reference}
          </span>
        </div>

        <div className="pt-2 flex items-center justify-center space-x-2 text-xs">
          <span
            className={`px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
              isConfirmed
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
            }`}
          >
            Status: {booking.status.toUpperCase()}
          </span>
          <span className="text-white/50">•</span>
          <span className="text-white/70">
            {isConfirmed ? "Confirmed Reservation" : "Awaiting Front Desk Verification"}
          </span>
        </div>
      </div>

      {/* Reservation Details Card (Printable) */}
      <div className="bg-white p-8 rounded-2xl border border-gold-500/20 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-forest-950">
              Stay Itinerary
            </h3>
            <p className="text-xs text-charcoal-500">
              Hotel KCS, {HOTEL_INFO.contact.address.street}, Begusarai, Bihar
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="no-print inline-flex items-center space-x-2 text-xs font-semibold text-forest-900 hover:text-gold-700 border border-gray-200 px-3 py-1.5 rounded transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Voucher</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded bg-ivory-50 border border-gold-500/10 space-y-1">
            <span className="text-charcoal-500 uppercase tracking-wider text-[11px] block">
              Room Category
            </span>
            <span className="font-bold text-forest-950 text-base">
              {booking.roomName}
            </span>
            <span className="text-charcoal-600 block">
              {booking.roomsCount} Room(s)
            </span>
          </div>

          <div className="p-3.5 rounded bg-ivory-50 border border-gold-500/10 space-y-1">
            <span className="text-charcoal-500 uppercase tracking-wider text-[11px] block">
              Guests
            </span>
            <span className="font-bold text-forest-950 text-base">
              {booking.adults} Adult(s) {booking.children > 0 ? `, ${booking.children} Child(ren)` : ""}
            </span>
            <span className="text-charcoal-600 block">
              Lead: {booking.fullName}
            </span>
          </div>

          <div className="p-3.5 rounded bg-ivory-50 border border-gold-500/10 space-y-1">
            <span className="text-charcoal-500 uppercase tracking-wider text-[11px] block">
              Check-in Date
            </span>
            <span className="font-bold text-forest-950 text-base">
              {booking.checkIn}
            </span>
            <span className="text-charcoal-600 block">
              From {HOTEL_INFO.contact.checkInTime}
            </span>
          </div>

          <div className="p-3.5 rounded bg-ivory-50 border border-gold-500/10 space-y-1">
            <span className="text-charcoal-500 uppercase tracking-wider text-[11px] block">
              Check-out Date
            </span>
            <span className="font-bold text-forest-950 text-base">
              {booking.checkOut}
            </span>
            <span className="text-charcoal-600 block">
              By {HOTEL_INFO.contact.checkOutTime}
            </span>
          </div>
        </div>

        {/* Guest Details */}
        <div className="border-t border-gray-100 pt-4 space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between py-1">
            <span className="text-charcoal-500">Registered Phone:</span>
            <span className="font-medium text-forest-950">{booking.phone}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-charcoal-500">Registered Email:</span>
            <span className="font-medium text-forest-950">{booking.email}</span>
          </div>
          {booking.specialRequests && (
            <div className="flex justify-between py-1">
              <span className="text-charcoal-500">Special Requests:</span>
              <span className="font-medium text-forest-950 text-right max-w-xs">
                {booking.specialRequests}
              </span>
            </div>
          )}
          <div className="flex justify-between py-2 border-t border-gray-100 text-base font-bold text-forest-950">
            <span>Estimated Total:</span>
            <span className="text-forest-900 font-serif text-xl">
              ₹{booking.estimatedTotal.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>

      {/* Next Steps & Instant WhatsApp Confirmation */}
      <div className="no-print grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={getWhatsAppBookingLink({ reference: booking.reference })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Confirm on WhatsApp</span>
        </a>

        <Link
          href="/"
          className="flex items-center justify-center space-x-2 bg-forest-950 hover:bg-forest-900 text-gold-300 font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm border border-gold-400/30"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4 text-gold-400" />
        </Link>
      </div>

      {/* Support Box */}
      <div className="no-print bg-ivory-100 p-6 rounded-xl border border-gold-500/20 text-center space-y-2 text-xs text-charcoal-600">
        <p className="font-semibold text-forest-950">
          Need immediate assistance or directions to Hotel KCS?
        </p>
        <p>
          Call our 24/7 reception desk at{" "}
          <a href={`tel:${HOTEL_INFO.contact.phone}`} className="font-bold text-forest-900 underline">
            {HOTEL_INFO.contact.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${HOTEL_INFO.contact.email}`} className="font-bold text-forest-900 underline">
            {HOTEL_INFO.contact.email}
          </a>.
        </p>
      </div>
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <div className="bg-[#FDFBF7] py-16 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-center py-20 font-serif">Loading confirmation...</div>}>
        <BookingConfirmationInner />
      </Suspense>
    </div>
  );
}

