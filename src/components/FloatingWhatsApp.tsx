"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp Concierge" className="floating-whatsapp fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 mr-3 bg-white text-forest-950 px-3.5 py-2 rounded-full shadow-luxury border border-gold-400/40 text-xs font-medium animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Need help? Chat with Hotel KCS Concierge</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-500 hover:text-charcoal-800 ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={getWhatsAppBookingLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hotel KCS on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white ring-4 ring-emerald-500/20"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </aside>
  );
}

