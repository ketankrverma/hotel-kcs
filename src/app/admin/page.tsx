"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  XCircle,
  Mail,
  Phone,
  Bed,
  Settings,
  Database,
  Lock,
  LogOut,
  RefreshCw,
  Search,
  ExternalLink,
  DollarSign,
} from "lucide-react";
import {
  getStoredBookings,
  updateBookingStatus,
  getStoredContacts,
} from "@/lib/storage";
import { isSupabaseConfigured } from "@/lib/supabase";
import { ROOMS_DATA } from "@/data/rooms";
import { HOTEL_INFO } from "@/data/hotel-info";
import { BookingSubmission, ContactSubmission } from "@/types";

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [loginError, setLoginError] = useState("");

  const [bookings, setBookings] = useState<BookingSubmission[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [activeTab, setActiveTab] = useState<"reservations" | "messages" | "rooms" | "database">("reservations");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const loadData = () => {
    setBookings(getStoredBookings());
    setContacts(getStoredContacts());
  };

  useEffect(() => {
    // Check session storage for existing admin auth
    const auth = sessionStorage.getItem("kcs_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default staff access pin: 2026 or admin
    if (pin === "2026" || pin.toLowerCase() === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("kcs_admin_auth", "true");
      loadData();
      setLoginError("");
    } else {
      setLoginError("Invalid staff security PIN. Try '2026' or 'admin'.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("kcs_admin_auth");
  };

  const handleStatusChange = (ref: string, newStatus: "pending" | "confirmed" | "cancelled") => {
    const success = updateBookingStatus(ref, newStatus);
    if (success) {
      loadData();
    }
  };

  // Metrics
  const totalReservations = bookings.length;
  const pendingCount = bookings.filter((b) => b.status === "pending").length;
  const confirmedCount = bookings.filter((b) => b.status === "confirmed").length;
  const cancelledCount = bookings.filter((b) => b.status === "cancelled").length;
  const estimatedRevenue = bookings
    .filter((b) => b.status === "confirmed")
    .reduce((sum, b) => sum + (b.estimatedTotal || 0), 0);

  // Filtered reservations
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery);
    const matchesStatus = statusFilter === "all" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // If not logged in, show elegant staff login portal
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#F8F5EF] p-4">
        <div className="max-w-md w-full bg-forest-950 text-white rounded-2xl p-8 border border-gold-500/30 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center mx-auto bg-forest-900 text-gold-400">
              <Lock className="w-6 h-6" />
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400 font-bold block">
              Staff Portal
            </span>
            <h1 className="font-serif text-2xl font-bold text-white">
              Hotel KCS Administration
            </h1>
            <p className="text-xs text-white/60">
              Enter staff access code to manage reservations and inquiries.
            </p>
          </div>

          {loginError && (
            <div className="bg-rose-900/50 border border-rose-500/40 text-rose-200 text-xs p-3 rounded text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-gold-200 uppercase tracking-wider block">
                Security PIN / Password
              </label>
              <input
                type="password"
                placeholder="Enter PIN (Default: 2026)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                className="w-full bg-forest-900 border border-gold-500/30 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-center tracking-widest font-mono text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-luxury-gold"
            >
              Access Dashboard
            </button>
          </form>

          <div className="text-center text-[11px] text-white/40 pt-2 border-t border-white/10">
            For demo / review, use PIN: <strong className="text-gold-300">2026</strong> or <strong className="text-gold-300">admin</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header Bar */}
        <div className="bg-forest-950 text-white p-6 rounded-2xl border border-gold-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center bg-forest-900 text-gold-400 font-bold font-serif text-lg">
              KCS
            </div>
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400 font-bold">
                Operations & Reservations Console
              </span>
              <h1 className="font-serif text-2xl font-bold text-white">
                Hotel KCS Begusarai Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={loadData}
              className="p-2.5 rounded-lg bg-forest-900 hover:bg-forest-800 text-gold-300 border border-gold-500/20 text-xs flex items-center space-x-1.5 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-500/30 text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gold-500/20 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-charcoal-500 text-xs uppercase tracking-wider">
              <span>Total Bookings</span>
              <Calendar className="w-4 h-4 text-forest-800" />
            </div>
            <div className="font-serif text-3xl font-bold text-forest-950">
              {totalReservations}
            </div>
            <div className="text-[11px] text-charcoal-400">All registered inquiries</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-amber-500/30 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-amber-700 text-xs uppercase tracking-wider">
              <span>Pending Action</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="font-serif text-3xl font-bold text-amber-700">
              {pendingCount}
            </div>
            <div className="text-[11px] text-charcoal-400">Awaiting front desk call</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-emerald-500/30 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-emerald-700 text-xs uppercase tracking-wider">
              <span>Confirmed</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-serif text-3xl font-bold text-emerald-700">
              {confirmedCount}
            </div>
            <div className="text-[11px] text-charcoal-400">Room allocated</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-rose-500/20 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-rose-700 text-xs uppercase tracking-wider">
              <span>Cancelled</span>
              <XCircle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="font-serif text-3xl font-bold text-rose-700">
              {cancelledCount}
            </div>
            <div className="text-[11px] text-charcoal-400">Void / Cancelled</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gold-500/30 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gold-700 text-xs uppercase tracking-wider">
              <span>Confirmed Total</span>
              <DollarSign className="w-4 h-4 text-gold-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-forest-950">
              ₹{estimatedRevenue.toLocaleString("en-IN")}
            </div>
            <div className="text-[11px] text-charcoal-400">Gross folio value</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-2">
          <button
            onClick={() => setActiveTab("reservations")}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === "reservations"
                ? "bg-forest-950 text-gold-300 shadow"
                : "bg-white text-charcoal-600 hover:bg-forest-900 hover:text-white"
            }`}
          >
            Reservations ({bookings.length})
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === "messages"
                ? "bg-forest-950 text-gold-300 shadow"
                : "bg-white text-charcoal-600 hover:bg-forest-900 hover:text-white"
            }`}
          >
            Contact Messages ({contacts.length})
          </button>

          <button
            onClick={() => setActiveTab("rooms")}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === "rooms"
                ? "bg-forest-950 text-gold-300 shadow"
                : "bg-white text-charcoal-600 hover:bg-forest-900 hover:text-white"
            }`}
          >
            Room Tariffs & Inventory ({ROOMS_DATA.length})
          </button>

          <button
            onClick={() => setActiveTab("database")}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === "database"
                ? "bg-forest-950 text-gold-300 shadow"
                : "bg-white text-charcoal-600 hover:bg-forest-900 hover:text-white"
            }`}
          >
            Database & Supabase Config
          </button>
        </div>

        {/* TAB 1: RESERVATIONS */}
        {activeTab === "reservations" && (
          <div className="bg-white rounded-2xl border border-gold-500/20 shadow-md p-6 space-y-6">
            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400" />
                <input
                  type="text"
                  placeholder="Search ref, guest name, phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-xs text-charcoal-500 font-medium">Filter Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500 font-medium"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-forest-950 text-gold-300 uppercase tracking-wider border-b border-gold-500/20">
                    <th className="p-3.5">Ref #</th>
                    <th className="p-3.5">Guest Info</th>
                    <th className="p-3.5">Room Category</th>
                    <th className="p-3.5">Dates & Stay</th>
                    <th className="p-3.5">Party</th>
                    <th className="p-3.5">Est. Total</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Update Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-charcoal-500 text-sm">
                        No reservation records match this filter.
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((b) => (
                      <tr key={b.reference} className="hover:bg-ivory-50 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-forest-950">
                          {b.reference}
                        </td>
                        <td className="p-3.5">
                          <div className="font-semibold text-charcoal-900">{b.fullName}</div>
                          <div className="text-charcoal-500 flex items-center space-x-1 mt-0.5">
                            <Phone className="w-3 h-3 text-gold-600" />
                            <span>{b.phone}</span>
                          </div>
                          <div className="text-charcoal-400 text-[11px]">{b.email}</div>
                        </td>
                        <td className="p-3.5">
                          <span className="font-medium text-forest-900">{b.roomName}</span>
                          <span className="text-charcoal-400 block text-[11px]">
                            {b.roomsCount} room(s)
                          </span>
                        </td>
                        <td className="p-3.5">
                          <div className="font-medium text-charcoal-800">
                            {b.checkIn} → {b.checkOut}
                          </div>
                          <div className="text-charcoal-400 text-[11px]">
                            Booked: {new Date(b.createdAt).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="p-3.5 text-charcoal-700">
                          {b.adults}A {b.children > 0 ? `+ ${b.children}C` : ""}
                        </td>
                        <td className="p-3.5 font-bold font-serif text-forest-900">
                          ₹{b.estimatedTotal?.toLocaleString("en-IN")}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              b.status === "confirmed"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : b.status === "cancelled"
                                ? "bg-rose-100 text-rose-800 border border-rose-300"
                                : "bg-amber-100 text-amber-800 border border-amber-300"
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-right space-x-1 whitespace-nowrap">
                          {b.status !== "confirmed" && (
                            <button
                              onClick={() => handleStatusChange(b.reference, "confirmed")}
                              className="px-2 py-1 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-[10px] uppercase font-semibold"
                            >
                              Confirm
                            </button>
                          )}
                          {b.status !== "pending" && (
                            <button
                              onClick={() => handleStatusChange(b.reference, "pending")}
                              className="px-2 py-1 rounded bg-amber-600 hover:bg-amber-500 text-white text-[10px] uppercase font-semibold"
                            >
                              Pending
                            </button>
                          )}
                          {b.status !== "cancelled" && (
                            <button
                              onClick={() => handleStatusChange(b.reference, "cancelled")}
                              className="px-2 py-1 rounded bg-rose-700 hover:bg-rose-600 text-white text-[10px] uppercase font-semibold"
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: CONTACT MESSAGES */}
        {activeTab === "messages" && (
          <div className="bg-white rounded-2xl border border-gold-500/20 shadow-md p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-forest-950">
              Inquiries from Contact Page
            </h3>
            <div className="space-y-4">
              {contacts.length === 0 ? (
                <p className="text-sm text-charcoal-500 py-6 text-center">
                  No contact messages received yet.
                </p>
              ) : (
                contacts.map((msg, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-ivory-50 border border-gold-500/20 space-y-2 text-xs sm:text-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-200 pb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-forest-950">{msg.name}</span>
                        <span className="text-charcoal-400">•</span>
                        <span className="text-charcoal-600">{msg.email}</span>
                        {msg.phone && (
                          <>
                            <span className="text-charcoal-400">•</span>
                            <span className="text-charcoal-600">{msg.phone}</span>
                          </>
                        )}
                      </div>
                      <span className="text-charcoal-400 text-[11px]">
                        {new Date(msg.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="font-semibold text-gold-800">
                      Subject: {msg.subject}
                    </div>
                    <p className="text-charcoal-700 leading-relaxed">
                      {msg.message}
                    </p>
                    <div className="pt-2 flex items-center space-x-4 text-xs font-semibold">
                      <a
                        href={`mailto:${msg.email}?subject=RE: ${encodeURIComponent(msg.subject)}`}
                        className="text-forest-900 hover:underline flex items-center space-x-1"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Reply by Email</span>
                      </a>
                      {msg.phone && (
                        <a
                          href={`tel:${msg.phone}`}
                          className="text-forest-900 hover:underline flex items-center space-x-1"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Guest</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 3: ROOMS & INVENTORY */}
        {activeTab === "rooms" && (
          <div className="bg-white rounded-2xl border border-gold-500/20 shadow-md p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-forest-950">
                  Configured Room Categories & Base Tariffs
                </h3>
                <p className="text-xs text-charcoal-500">
                  Room specifications configured in `src/data/rooms.ts`
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ROOMS_DATA.map((room) => (
                <div
                  key={room.id}
                  className="p-5 rounded-xl border border-gold-500/20 bg-ivory-50 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gold-700 font-bold">
                        {room.category}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-forest-950">
                        {room.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="font-serif font-bold text-xl text-forest-900">
                        ₹{room.pricePerNight}
                      </div>
                      <div className="text-[10px] text-charcoal-500">per night</div>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-600 line-clamp-2">
                    {room.description}
                  </p>

                  <div className="text-xs text-charcoal-700 grid grid-cols-2 gap-1 pt-2 border-t border-gray-200">
                    <div>Capacity: {room.maxGuests} Guests</div>
                    <div>Bed: {room.bedType}</div>
                    <div>Area: {room.sizeSqFt} Sq. Ft</div>
                    <div>Status: {room.isAvailable ? "Active" : "Disabled"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DATABASE & SUPABASE CONFIG */}
        {activeTab === "database" && (
          <div className="bg-white rounded-2xl border border-gold-500/20 shadow-md p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
              <Database className="w-8 h-8 text-gold-600" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  Supabase Integration & Database Schema
                </h3>
                <p className="text-xs text-charcoal-500">
                  Status: {isSupabaseConfigured ? "Connected to Supabase" : "Operating with Local Mock Storage"}
                </p>
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm ${
                isSupabaseConfigured
                  ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                  : "bg-amber-50 border-amber-300 text-amber-900"
              }`}
            >
              <div className="font-bold flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5" />
                <span>
                  {isSupabaseConfigured
                    ? "Supabase Backend is Configured and Active."
                    : "Development Mock Mode: LocalStorage Active."}
                </span>
              </div>
              <p className="mt-1">
                {isSupabaseConfigured
                  ? "All reservation submissions and inquiries are synced directly with your configured Supabase database tables."
                  : "To connect your live Supabase cloud database, provide `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in your `.env.local` file and execute the included `supabase_schema.sql`."}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-lg font-bold text-forest-950">
                How to Connect Supabase in 3 Simple Steps:
              </h4>
              <ol className="list-decimal pl-5 text-xs sm:text-sm text-charcoal-700 space-y-2">
                <li>Create a free project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-forest-900 font-bold underline">supabase.com</a>.</li>
                <li>Go to the SQL Editor in your Supabase dashboard and run the commands from the file <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-xs">d:\hotel kcs\supabase_schema.sql</code>.</li>
                <li>Copy your project URL and public Anon Key to <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-xs">.env.local</code>.</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

