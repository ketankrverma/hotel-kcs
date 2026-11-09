import React from "react";
import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { HOTEL_INFO } from "@/data/hotel-info";

export const metadata: Metadata = {
  title: "Privacy Policy | Hotel KCS Begusarai",
  description: "Privacy Policy and Guest Data Handling Statement for Hotel KCS Begusarai, Bihar.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FDFBF7]">
      <PageHero
        title="Privacy Policy"
        subtitle="Our Commitment to Protecting Your Privacy and Personal Information"
        breadcrumbLabel="Privacy Policy"
        imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal-700 space-y-8 text-sm sm:text-base leading-relaxed">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gold-500/20 shadow-sm space-y-6">
          <p className="text-xs text-charcoal-500 uppercase tracking-wider">
            Last Updated: November 2026
          </p>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            1. Introduction & Scope
          </h2>
          <p>
            Hotel KCS (&quot;we,&quot; &quot;our,&quot; or &quot;the Hotel&quot;), located in Begusarai, Bihar, India, values your trust and is committed to protecting the privacy of all guests, website visitors, and corporate clients. This Privacy Policy outlines how we collect, utilize, and safeguard your personal details when you interact with our website or stay at our property.
          </p>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            2. Information We Collect
          </h2>
          <p>
            We collect information strictly necessary to facilitate reservations, ensure guest safety, and provide superior hospitality services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Contact Information:</strong> Full name, telephone number, email address, and home or business address provided during booking or enquiry submissions.</li>
            <li><strong>Stay Preferences:</strong> Check-in and check-out dates, room category selections, dietary preferences, and special stay requests.</li>
            <li><strong>Statutory Verification Data:</strong> Government-issued identification credentials (e.g., Aadhaar card, Voter ID, Passport, or Driving License) required by local law enforcement upon physical check-in.</li>
            <li><strong>Technical Analytics:</strong> Non-personally identifiable technical details including browser type, operating system, and page navigation metrics used solely to improve website usability.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To manage and confirm your room reservations and banquet requests.</li>
            <li>To communicate crucial stay information, booking vouchers, and check-in instructions.</li>
            <li>To respond to your inquiries through email, telephone, or WhatsApp.</li>
            <li>To comply with regulatory police reporting and lodging records required under Indian laws.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            4. Data Confidentiality & Protection
          </h2>
          <p>
            We implement strict physical, electronic, and procedural safeguards to secure guest information. Hotel KCS does not sell, rent, or lease guest records to third-party marketing entities under any circumstances.
          </p>

          <h2 className="font-serif text-2xl font-bold text-forest-950">
            5. Contacting Our Data Custodian
          </h2>
          <p>
            For questions regarding this policy or to request corrections to your stored booking details, please contact us at:
          </p>
          <div className="bg-ivory-100 p-4 rounded-lg border border-gold-500/20 text-xs sm:text-sm text-forest-950">
            <p className="font-bold">Hotel KCS Begusarai</p>
            <p>{HOTEL_INFO.contact.address.street}, {HOTEL_INFO.contact.address.city}, Bihar - {HOTEL_INFO.contact.address.pincode}</p>
            <p>Email: {HOTEL_INFO.contact.email} | Phone: {HOTEL_INFO.contact.phoneDisplay}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

