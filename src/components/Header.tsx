"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotel-info";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-[#071B16] border-b border-[#C9A96E]/30 shadow-2xl">
      {/* Top Microbar for Location & Phone - 100% Solid Opaque Dark */}
      <div className="bg-[#040F0C] text-[#E9D8B1] text-xs py-2 px-4 sm:px-8 border-b border-[#C9A96E]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white tracking-wide">Begusarai, Bihar</span>
            </span>
            <span className="text-[#C9A96E]/40">•</span>
            <a
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="hover:text-white transition-colors flex items-center space-x-1.5 text-white/90"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="font-medium">{HOTEL_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#DFC286] tracking-widest text-[11px] uppercase font-semibold">
              Official Hotel Website
            </span>
            <span className="text-[#C9A96E]/40">•</span>
            <Link
              href="/admin"
              className="hover:text-white transition-colors text-[11px] text-[#C9A96E] font-medium"
            >
              Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - 100% Solid Dark Forest Green */}
      <div className="bg-[#071B16] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center space-x-3 text-white">
          <div className="w-11 h-11 rounded-full border-2 border-[#C9A96E] flex items-center justify-center bg-[#0A241F] group-hover:border-[#DFC286] transition-colors shadow-md">
            <span className="font-accent text-[#C9A96E] font-bold text-lg tracking-tighter">
              KCS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-accent tracking-[0.22em] text-lg sm:text-xl font-bold text-white group-hover:text-[#DFC286] transition-colors">
              HOTEL KCS
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">
              BEGUSARAI • BIHAR
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-all relative ${
                  isActive
                    ? "text-[#C9A96E] font-bold"
                    : "text-white/90 hover:text-[#DFC286] hover:bg-white/10 rounded-md"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C9A96E] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            href="/booking"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC286] to-[#C9A96E] hover:from-[#DFC286] hover:to-[#C9A96E] text-[#071B16] font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#071B16]" />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger & Quick Book */}
        <div className="flex items-center space-x-2 lg:hidden">
          <Link
            href="/booking"
            className="sm:hidden bg-[#C9A96E] text-[#071B16] px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider"
          >
            Book
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#C9A96E] hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in panel - 100% Solid */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#071B16] border-l-2 border-[#C9A96E]/40 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C9A96E]/20">
                <div className="flex items-center space-x-2">
                  <span className="font-accent tracking-[0.2em] text-lg font-bold text-white">
                    HOTEL KCS
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#C9A96E] hover:text-white rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-3 text-base rounded-md font-semibold tracking-wide transition-colors ${
                        isActive
                          ? "bg-[#C9A96E]/20 text-[#C9A96E] font-bold"
                          : "text-white hover:bg-white/10 hover:text-[#DFC286]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#C9A96E]/20">
                <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C9A96E] to-[#DFC286] text-[#071B16] font-bold uppercase tracking-wider py-3 rounded text-sm shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Room</span>
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C9A96E]/20 text-xs text-white/80 space-y-2">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                <a href={`tel:${HOTEL_INFO.contact.phone}`} className="hover:text-[#DFC286] text-white">
                  {HOTEL_INFO.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-white/60">
                {HOTEL_INFO.contact.address.street}, {HOTEL_INFO.contact.address.city}, Bihar
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
