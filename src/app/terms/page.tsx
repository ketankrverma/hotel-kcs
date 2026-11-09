import React from "react";
import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { HOTEL_INFO } from "@/data/hotel-info";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hotel KCS Begusarai",
  description: "Terms and conditions of stay, reservation policies, and guest guidelines for Hotel KCS Begusarai, Bihar.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Terms & Conditions"
        subtitle="Reservation Guidelines, Guest Policies, and Operating Standards"
        breadcrumbLabel="Terms & Conditions"
        imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal-700 space-y-8 text-sm sm:text-base leading-relaxed">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gold-500/20 shadow-sm space-y-6">
          <p className="text-xs text-charcoal-500 uppercase tracking-wider">
            Effective Date: November 2026
          </p>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            1. Booking & Reservation Confirmation
          </h2>
          <p>
            Online reservation requests submitted through this website represent intent to book. All reservations are confirmed upon verification by our reservations desk or front desk staff. Guests will receive a booking reference code (e.g. KCS-XXXXXX) upon submitting an inquiry.
          </p>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            2. Check-in & Check-out Policies
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standard Check-in Time:</strong> 12:00 PM (Noon).</li>
            <li><strong>Standard Check-out Time:</strong> 11:00 AM.</li>
            <li><strong>Early Check-in / Late Check-out:</strong> Subject to room availability and may attract nominal hourly charges during peak occupancy.</li>
            <li><strong>Government Identification:</strong> As per Government of India lodging regulations, every adult guest must present valid original government-issued photo identification (Aadhaar Card, Passport, Voter ID, or Driving License) at the time of check-in. PAN cards are not accepted as proof of identity/address.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            3. Pricing & Taxes
          </h2>
          <p>
            Room tariffs displayed on the website are base rates per night in Indian Rupees (INR). Applicable Goods and Services Tax (GST) as mandated by the Government of India will be added to the final folio at the time of checkout or advance settlement.
          </p>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            4. Cancellation & Modifications
          </h2>
          <p>
            Cancellations informed at least 24 hours prior to the standard check-in time of 12:00 PM on the arrival date incur zero penalty. Same-day cancellations or no-shows may incur retention charges equivalent to the first night&apos;s tariff.
          </p>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            5. Property Conduct & Safety
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hotel KCS maintains strict safety, hygiene, and peaceful ambiance protocols. Guests are expected to respect fellow travelers&apos; comfort.</li>
            <li>Smoking is strictly restricted to designated ventilated areas or smoking rooms where applicable.</li>
            <li>Hazardous goods, contraband, and unauthorized weapons are strictly prohibited on the hotel premises.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            6. Governing Jurisdiction
          </h2>
          <p>
            Any disputes arising out of reservations or stays at Hotel KCS shall be subject to the exclusive jurisdiction of the competent courts in Begusarai, Bihar.
          </p>
        </div>
      </section>
    </div>
  );
}

