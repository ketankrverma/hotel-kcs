# HOTEL KCS - Begusarai, Bihar

A luxury, modern, responsive, and conversion-optimized multi-page hotel website built for **Hotel KCS** (Begusarai, Bihar, India).

Designed with an international hospitality editorial aesthetic, deep forest green and champagne gold palette, clean typography, verified information, working booking requests, interactive room detail pages, dining menus, photo lightbox gallery, WhatsApp concierge integration, and a dedicated staff administration dashboard.

---

## 🌟 Key Features

1. **Multi-Page Architecture with Dedicated Routes**
   - **Home (`/`)**: Cinematic hero, availability search panel, welcome section, room cards, why choose us, dining preview, Begusarai location & interactive map, guest commitment, and booking CTA.
   - **About (`/about`)**: Hotel philosophy, care standards, guest experience, Begusarai connectivity advantages, and room CTA.
   - **Rooms & Suites Listing (`/rooms`)**: Interactive category filtering (Standard, Deluxe, Premium, Family Suite), pricing, capacity, specs, and direct booking links.
   - **Dynamic Room Detail Pages (`/rooms/[slug]`)**:
     - Standard Room (`/rooms/standard-room`)
     - Deluxe Room (`/rooms/deluxe-room`)
     - Premium Executive Room (`/rooms/premium-room`)
     - Family Suite (`/rooms/family-suite`)
     - Includes image galleries, detailed highlights, amenities checklist, live booking sidebar, and similar room recommendations.
   - **Dining & Restaurant (`/dining`)**: *The KCS Flavours* multi-cuisine restaurant showcase, authentic Bihari specialties (Litti Chokha with pure desi ghee, Handi preparations), North Indian tandoor, veg/non-veg indicator dots, menu categories, printable/downloadable menu, and table reservation links.
   - **Gallery (`/gallery`)**: Category-filtered masonry grid (Rooms, Dining, Interiors, Amenities, Exterior) with interactive full-screen Lightbox and keyboard navigation (Esc, Left/Right arrows).
   - **Facilities (`/facilities`)**: Verified amenities including 24/7 power backup, complimentary fiber Wi-Fi, elevator/lift, banquet hall, on-site parking, and in-room dining.
   - **Reservations & Booking (`/booking`)**: Real-time stay duration and rate calculations, party size configuration, date validation (check-out > check-in), contact verification, and reference generation.
   - **Booking Confirmation (`/booking-confirmation`)**: Instant receipt voucher with reference number (e.g. `KCS-847291`), printable itinerary, and one-click WhatsApp confirmation link.
   - **Contact Us (`/contact`)**: Validated contact form, Begusarai address and landmark details, phone and WhatsApp links, embedded Google Map, directions, and traveler FAQ accordion.
   - **Admin Dashboard (`/admin`)**: Secure staff console (PIN: `2026` or `admin`) with real-time statistics, reservation management with status updates (Pending, Confirmed, Cancelled), contact message viewer, room inventory review, and Supabase database instructions.
   - **Legal Pages**: Privacy Policy (`/privacy-policy`) and Terms & Conditions (`/terms`).
   - **SEO & Performance**: Dynamic `sitemap.xml`, `robots.txt`, Open Graph metadata, and JSON-LD schema for LocalBusiness/Hotel.
   - **Floating WhatsApp Button**: Accessible across every page with pre-filled concierge message.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, Server Components + Client Interactivity)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS micro-interactions
- **Database / Backend**: Supabase Client configured with automatic local mock storage fallback for instant demo/production resilience
- **Deployment Compatibility**: Vercel ready (static and serverless compatible)

---

## 🎨 Luxury Design System

- **Deep Forest Green**: `#123B32` (Primary Brand)
- **Deep Forest Dark**: `#0A241F`
- **Champagne Gold**: `#C9A96E` (Accent & CTA)
- **Warm Ivory**: `#F8F5EF` (Background & Cards)
- **Charcoal**: `#242424` (Typography)
- **Pure White**: `#FFFFFF`
- **Typography**: Cormorant Garamond / Cinzel (Serif) & Plus Jakarta Sans (Sans-serif)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🗄️ Supabase Backend Integration (Optional)

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open your Supabase project dashboard and navigate to the **SQL Editor**.
3. Run the SQL script from `supabase_schema.sql` to generate the `bookings` and `contact_messages` tables with Row Level Security.
4. Add your Supabase URL and anon key to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
*(Note: If no Supabase credentials are provided, the site runs seamlessly with persistent browser storage).*

---

## 🔐 Staff / Admin Access

- **URL**: `/admin`
- **Default PIN**: `2026` (or `admin`)

---

## 📍 Hotel KCS Location

- **Address**: Station Road, Near Main Market, Begusarai, Bihar - 851101
- **Landmark**: 5 minutes from Begusarai Railway Station (BGS)
- **Phone**: +91 94312 34567
- **Email**: reservations@hotelkcs.com

