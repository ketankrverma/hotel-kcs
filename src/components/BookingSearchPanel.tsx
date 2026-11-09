"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, Home, Search, AlertCircle } from "lucide-react";
import { ROOMS_DATA } from "@/data/rooms";

export default function BookingSearchPanel({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();

  // Calculate default dates: tomorrow for check-in, day after tomorrow for check-out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [roomSlug, setRoomSlug] = useState("deluxe-room");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!checkIn || !checkOut) {
      setErrorMsg("Please select both check-in and check-out dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMsg("Check-out date must be after check-in date.");
      return;
    }

    const params = new URLSearchParams({
      room: roomSlug,
      checkIn,
      checkOut,
      adults,
      children,
    });

    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div
      className={`bg-white/95 backdrop-blur-md rounded-lg shadow-2xl p-4 sm:p-6 border border-gold-500/30 text-charcoal-800 ${className}`}
    >
      <form onSubmit={handleSearch} className="space-y-4">
        {errorMsg && (
          <div className="flex items-center space-x-2 text-rose-700 bg-rose-50 border border-rose-200 px-3 py-2 rounded text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {/* Check-in */}
          <div className="flex flex-col space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-forest-800 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              <span>Check-in</span>
            </label>
            <input
              type="date"
              min={formatDate(today)}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-ivory-50 border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 font-medium"
              required
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-forest-800 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              <span>Check-out</span>
            </label>
            <input
              type="date"
              min={checkIn || formatDate(tomorrow)}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-ivory-50 border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 font-medium"
              required
            />
          </div>

          {/* Room Category */}
          <div className="flex flex-col space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-forest-800 flex items-center space-x-1.5">
              <Home className="w-3.5 h-3.5 text-gold-600" />
              <span>Room Category</span>
            </label>
            <select
              value={roomSlug}
              onChange={(e) => setRoomSlug(e.target.value)}
              className="w-full bg-ivory-50 border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 font-medium"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name} (from ₹{r.pricePerNight})
                </option>
              ))}
            </select>
          </div>

          {/* Guests: Adults & Children */}
          <div className="flex flex-col space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-forest-800 flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-gold-600" />
              <span>Guests</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full bg-ivory-50 border border-gray-300 rounded px-2 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full bg-ivory-50 border border-gray-300 rounded px-2 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="0">0 Kids</option>
                <option value="1">1 Kid</option>
                <option value="2">2 Kids</option>
                <option value="3">3 Kids</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button
              type="submit"
              className="w-full h-[42px] bg-gradient-to-r from-forest-800 to-forest-900 hover:from-forest-900 hover:to-forest-950 text-white font-semibold text-xs uppercase tracking-wider rounded border border-gold-400/40 hover:border-gold-400 transition-all duration-200 flex items-center justify-center space-x-2 shadow-luxury hover:shadow-xl group"
            >
              <Search className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              <span className="text-gold-200 group-hover:text-gold-100">Check Availability</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

