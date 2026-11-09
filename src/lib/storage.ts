import { BookingSubmission, ContactSubmission } from "@/types";
import { supabase, isSupabaseConfigured } from "./supabase";

const BOOKINGS_STORAGE_KEY = "hotel_kcs_bookings_v1";
const CONTACTS_STORAGE_KEY = "hotel_kcs_contacts_v1";

const INITIAL_DEMO_BOOKINGS: BookingSubmission[] = [
  {
    id: "demo-b1",
    reference: "KCS-847291",
    fullName: "Rajesh Kumar Sharma",
    phone: "+91 98350 12345",
    email: "rajesh.sharma@example.com",
    checkIn: "2026-11-15",
    checkOut: "2026-11-18",
    adults: 2,
    children: 0,
    roomsCount: 1,
    roomSlug: "deluxe-room",
    roomName: "Deluxe Room",
    specialRequests: "Quiet floor preferred, arriving around 3 PM by train.",
    estimatedTotal: 7497,
    status: "confirmed",
    createdAt: "2026-11-08T10:15:00.000Z",
  },
  {
    id: "demo-b2",
    reference: "KCS-918342",
    fullName: "Amitabh Verma",
    phone: "+91 94310 98765",
    email: "amitabh.verma@example.com",
    checkIn: "2026-11-20",
    checkOut: "2026-11-22",
    adults: 3,
    children: 1,
    roomsCount: 1,
    roomSlug: "family-suite",
    roomName: "Family Suite",
    specialRequests: "Attending a family wedding in Begusarai. Extra towels needed.",
    estimatedTotal: 8998,
    status: "pending",
    createdAt: "2026-11-09T08:30:00.000Z",
  },
  {
    id: "demo-b3",
    reference: "KCS-739104",
    fullName: "Dr. Sunita Jha",
    phone: "+91 97711 44321",
    email: "sunita.jha@medbihar.org",
    checkIn: "2026-11-12",
    checkOut: "2026-11-14",
    adults: 1,
    children: 0,
    roomsCount: 1,
    roomSlug: "premium-room",
    roomName: "Premium Executive Room",
    specialRequests: "Medical conference attendee. Need GST invoice for hospital reimbursement.",
    estimatedTotal: 6598,
    status: "confirmed",
    createdAt: "2026-11-07T14:45:00.000Z",
  },
];

const INITIAL_DEMO_CONTACTS: ContactSubmission[] = [
  {
    id: "demo-c1",
    name: "Manoj Singh",
    email: "manoj.singh@iocbegusarai.com",
    phone: "+91 94300 77889",
    subject: "Corporate Bulk Room Booking & Banquet Enquiry",
    message: "We have an upcoming quarterly meeting of 20 delegates next month. Please share corporate package rates with lunch inclusion.",
    createdAt: "2026-11-08T11:20:00.000Z",
  },
  {
    id: "demo-c2",
    name: "Pooja Kumari",
    email: "pooja.k@gmail.com",
    phone: "+91 82100 55443",
    subject: "Engagement Party Banquet Hall Availability",
    message: "Seeking hall booking for 60 guests in December. Please let me know catering options and decoration guidelines.",
    createdAt: "2026-11-09T06:40:00.000Z",
  },
];

export function getStoredBookings(): BookingSubmission[] {
  if (typeof window === "undefined") return INITIAL_DEMO_BOOKINGS;
  try {
    const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(INITIAL_DEMO_BOOKINGS));
      return INITIAL_DEMO_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_BOOKINGS;
  }
}

export function saveBooking(booking: BookingSubmission): void {
  if (typeof window === "undefined") return;
  try {
    const list = getStoredBookings();
    const updated = [booking, ...list];
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updated));

    // Also attempt Supabase if configured
    if (isSupabaseConfigured && supabase) {
      supabase
        .from("bookings")
        .insert([booking])
        .then(({ error }) => {
          if (error) console.warn("Supabase insert error:", error);
        });
    }
  } catch (e) {
    console.error("Failed to save booking to storage:", e);
  }
}

export function getBookingByRef(ref: string): BookingSubmission | undefined {
  const bookings = getStoredBookings();
  return bookings.find((b) => b.reference.toUpperCase() === ref.toUpperCase());
}

export function updateBookingStatus(ref: string, newStatus: "pending" | "confirmed" | "cancelled"): boolean {
  if (typeof window === "undefined") return false;
  try {
    const list = getStoredBookings();
    const index = list.findIndex((b) => b.reference.toUpperCase() === ref.toUpperCase());
    if (index !== -1) {
      list[index].status = newStatus;
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(list));

      if (isSupabaseConfigured && supabase) {
        supabase
          .from("bookings")
          .update({ status: newStatus })
          .eq("reference", ref)
          .then();
      }
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function getStoredContacts(): ContactSubmission[] {
  if (typeof window === "undefined") return INITIAL_DEMO_CONTACTS;
  try {
    const raw = localStorage.getItem(CONTACTS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(INITIAL_DEMO_CONTACTS));
      return INITIAL_DEMO_CONTACTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_CONTACTS;
  }
}

export function saveContactSubmission(contact: ContactSubmission): void {
  if (typeof window === "undefined") return;
  try {
    const list = getStoredContacts();
    const updated = [contact, ...list];
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updated));

    if (isSupabaseConfigured && supabase) {
      supabase
        .from("contact_messages")
        .insert([contact])
        .then(({ error }) => {
          if (error) console.warn("Supabase contact insert error:", error);
        });
    }
  } catch (e) {
    console.error("Failed to save contact to storage:", e);
  }
}

