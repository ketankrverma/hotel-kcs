"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { HOTEL_INFO, getWhatsAppBookingLink } from "@/data/hotel-info";
import { saveContactSubmission } from "@/lib/storage";

const FAQS = [
  {
    q: "How far is Hotel KCS from the Begusarai Railway Station?",
    a: "Hotel KCS is situated approximately 5 minutes (around 1.5 km) from the Begusarai Railway Junction (BGS), making it extremely convenient for guests arriving by train.",
  },
  {
    q: "What are the standard check-in and check-out timings?",
    a: "Standard check-in begins at 12:00 PM, and check-out is until 11:00 AM. Early check-in and late check-out can be requested subject to room availability.",
  },
  {
    q: "Is there secure parking available at the hotel?",
    a: "Yes, we provide dedicated complimentary on-site parking monitored by 24/7 CCTV surveillance for both personal and chauffeur-driven vehicles.",
  },
  {
    q: "Does the hotel provide generator power backup?",
    a: "Yes, Hotel KCS is equipped with 100% heavy-duty generator backup ensuring uninterrupted power for air conditioning, lighting, and elevator operation around the clock.",
  },
  {
    q: "Can I host corporate seminars or family banquets?",
    a: "Certainly! We have an air-conditioned banquet hall with audio-visual equipment and tailored catering for corporate meetings, engagements, and family gatherings.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    saveContactSubmission({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim() || "General Stay Enquiry",
      message: message.trim(),
      createdAt: new Date().toISOString(),
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Contact Hotel KCS"
        subtitle="We Are Here to Assist with Reservations, Banquets, Corporate Bookings, and Inquiries"
        breadcrumbLabel="Contact"
        imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-ivory-100 flex items-center justify-center text-gold-600">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-forest-950">Hotel Location</h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              {HOTEL_INFO.contact.address.street}, {HOTEL_INFO.contact.address.city}, {HOTEL_INFO.contact.address.state} - {HOTEL_INFO.contact.address.pincode}
            </p>
            <p className="text-[11px] text-gold-700 font-semibold pt-1">
              Near Begusarai Railway Station
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-ivory-100 flex items-center justify-center text-gold-600">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-forest-950">Phone Numbers</h4>
            <p className="text-xs text-charcoal-600">
              Front Desk:{" "}
              <a href={`tel:${HOTEL_INFO.contact.phone}`} className="text-forest-900 font-semibold hover:underline">
                {HOTEL_INFO.contact.phoneDisplay}
              </a>
            </p>
            <p className="text-[11px] text-charcoal-500">
              Available 24/7 for booking inquiries
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-ivory-100 flex items-center justify-center text-gold-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-forest-950">WhatsApp Concierge</h4>
            <p className="text-xs text-charcoal-600">
              Direct Chat:{" "}
              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-900 font-semibold hover:underline"
              >
                {HOTEL_INFO.contact.whatsappDisplay}
              </a>
            </p>
            <p className="text-[11px] text-emerald-600 font-medium">
              Instant responses during business hours
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-ivory-100 flex items-center justify-center text-gold-600">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-forest-950">Operational Timings</h4>
            <p className="text-xs text-charcoal-600">
              Check-in: 12:00 PM | Check-out: 11:00 AM
            </p>
            <p className="text-[11px] text-charcoal-500">
              Reception desk operates 24 Hours
            </p>
          </div>
        </div>

        {/* Main Grid: Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-gold-500/20 shadow-md">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                Send an Enquiry
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest-950 mt-1">
                Message the Hotel KCS Management
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Whether you need corporate group discounts, banquet information, or custom assistance, write to us.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start space-x-3 text-xs sm:text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Message Delivered Successfully!</p>
                  <p className="mt-0.5">
                    Thank you for reaching out. Our team will review your enquiry and get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal-700">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anand Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-charcoal-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="anand@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-charcoal-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98350 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal-700">
                  Subject / Nature of Inquiry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Corporate Booking, Wedding Delegation, Room Inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-ivory-50 border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal-700">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dates, number of guests, or specific requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-ivory-50 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest-950 hover:bg-forest-900 text-gold-300 font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider border border-gold-400/40 hover:border-gold-400 transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-gold-400" />
                <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
              </button>
            </form>
          </div>

          {/* Map & Driving Guidance */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gold-500/20 shadow-md space-y-4">
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                Directions & Begusarai Connectivity
              </h3>
              <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed">
                Hotel KCS is situated centrally with direct paved road connectivity. Taxis, e-rickshaws, and auto-rickshaws are readily available from Begusarai Railway Station.
              </p>

              <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-gray-200">
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

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={HOTEL_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-forest-900 hover:text-gold-700 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Open in Google Maps Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white p-8 rounded-2xl border border-gold-500/20 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Helpful Information for Your Stay
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 pt-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between font-medium text-forest-950 hover:bg-ivory-50 text-sm transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed bg-ivory-50/50 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

