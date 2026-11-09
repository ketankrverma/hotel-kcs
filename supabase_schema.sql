-- ========================================================
-- HOTEL KCS - SUPABASE DATABASE SCHEMA
-- Execute this script in your Supabase Project SQL Editor
-- ========================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Rooms Table (Optional dynamic room inventory)
CREATE TABLE IF NOT EXISTS public.rooms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  category TEXT NOT NULL,
  price_per_night NUMERIC NOT NULL,
  max_guests INT NOT NULL,
  bed_type TEXT NOT NULL,
  size_sq_ft INT,
  cover_image TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Bookings / Reservation Enquiries Table
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  adults INT NOT NULL DEFAULT 1,
  children INT DEFAULT 0,
  rooms_count INT DEFAULT 1,
  room_slug TEXT NOT NULL,
  room_name TEXT NOT NULL,
  special_requests TEXT,
  estimated_total NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Contact Enquiries Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Row Level Security (RLS)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (guests booking / contacting)
CREATE POLICY "Public users can insert booking enquiries" 
  ON public.bookings FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Public users can insert contact messages" 
  ON public.contact_messages FOR INSERT 
  WITH CHECK (true);

-- Allow guests to query their own booking by reference
CREATE POLICY "Guests can view booking by reference" 
  ON public.bookings FOR SELECT 
  USING (true);

-- Allow authenticated admins full access
CREATE POLICY "Admins full access to bookings"
  ON public.bookings FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins full access to contact messages"
  ON public.contact_messages FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

