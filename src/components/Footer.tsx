import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white border-t border-gold-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center bg-forest-900">
                <span className="font-accent text-gold-400 font-bold text-lg">KCS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-accent tracking-[0.2em] text-xl font-bold text-white">
                  HOTEL KCS
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400/90 font-light">
                  BEGUSARAI • BIHAR
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Experience warm hospitality and peaceful comfort in the heart of Begusarai. Thoughtfully designed rooms, fine regional and multi-cuisine dining, and seamless guest services.
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold border-l-2 border-gold-400 pl-2.5">
              Explore Hotel KCS
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500/60" />
                  <span>About Our Hotel</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-gold-400 transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500/60" />
                  <span>Rooms & Suites</span>
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-gold-400 transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500/60" />
                  <span>The KCS Flavours Restaurant</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500/60" />
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-gold-400 transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500/60" />
                  <span>Amenities & Facilities</span>
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-gold-400 transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500/60" />
                  <span>Book a Room Online</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Timings */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold border-l-2 border-gold-400 pl-2.5">
              Reach Our Desk
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>
                  {HOTEL_INFO.contact.address.street}, {HOTEL_INFO.contact.address.city}, {HOTEL_INFO.contact.address.state} - {HOTEL_INFO.contact.address.pincode}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.contact.phone}`} className="hover:text-gold-300">
                  {HOTEL_INFO.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.contact.email}`} className="hover:text-gold-300">
                  {HOTEL_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/70 text-xs">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Check-in: 12:00 PM | Check-out: 11:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Directions */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold border-l-2 border-gold-400 pl-2.5">
              Begusarai Location
            </h3>
            <p className="text-sm text-white/70">
              Centrally placed near Begusarai Railway Station, key commercial banks, and market centers.
            </p>
            <div className="pt-1">
              <a
                href={HOTEL_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-forest-900 hover:bg-forest-800 text-gold-300 border border-gold-400/30 px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>
            <div className="pt-2 text-xs text-white/50 flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Verified Hotel Address • Begusarai, Bihar</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 space-y-4 md:space-y-0">
          <div>
            © {currentYear} HOTEL KCS Begusarai. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/admin" className="hover:text-gold-400 text-gold-400/80 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

