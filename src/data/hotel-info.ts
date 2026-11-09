export interface HotelContact {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
  };
  googleMapsUrl: string;
  checkInTime: string;
  checkOutTime: string;
}

export const HOTEL_INFO = {
  name: "Hotel KCS",
  legalName: "Hotel KCS Begusarai",
  tagline: "Experience Comfort. Discover Hospitality.",
  subheading: "Your welcoming stay in the heart of Begusarai, Bihar.",
  description:
    "Hotel KCS is Begusarai's premier hospitality address, offering discerning business and leisure travelers an oasis of comfort, refined elegance, and attentive service. Located centrally with seamless connectivity to key commercial hubs and transport nodes.",
  contact: {
    phone: "+919431234567",
    phoneDisplay: "+91 94312 34567",
    whatsapp: "919431234567", // Pure digits with country code for wa.me link
    whatsappDisplay: "+91 94312 34567",
    email: "reservations@hotelkcs.com",
    address: {
      street: "Station Road, Near Main Market",
      city: "Begusarai",
      district: "Begusarai",
      state: "Bihar",
      pincode: "851101",
      country: "India",
      landmark: "5 minutes from Begusarai Railway Station",
    },
    googleMapsUrl: "https://maps.google.com/?q=Begusarai,+Bihar+851101",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115167.33230489956!2d86.0641198425781!3d25.42084606764516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2430c6a51d451%3A0x6b49e696d07b8b4a!2sBegusarai%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    checkInTime: "12:00 PM",
    checkOutTime: "11:00 AM",
  },
  social: {
    facebook: "https://facebook.com/hotelkcsbegusarai",
    instagram: "https://instagram.com/hotelkcsbegusarai",
    tripadvisor: "https://tripadvisor.com",
  },
  features: [
    {
      title: "Comfortable Accommodation",
      description: "Well-appointed rooms featuring premium mattresses, crisp linens, and sound-insulated ambiance for restorative sleep.",
      icon: "Bed",
    },
    {
      title: "Prime Begusarai Location",
      description: "Conveniently situated near Begusarai Railway Station, key industrial complexes, and central shopping districts.",
      icon: "MapPin",
    },
    {
      title: "Warm Bihari Hospitality",
      description: "Courteous, dedicated staff committed to making every moment of your stay relaxed, personalized, and memorable.",
      icon: "HeartHandshake",
    },
    {
      title: "Transparent & Easy Booking",
      description: "Direct reservation support via website and instant WhatsApp assistance with no hidden charges.",
      icon: "CalendarCheck",
    },
    {
      title: "Modern Guest Conveniences",
      description: "Complimentary high-speed Wi-Fi, 24/7 power backup, lift access, secure on-site parking, and in-room dining.",
      icon: "ShieldCheck",
    },
    {
      title: "Multi-Cuisine Dining",
      description: "Freshly prepared vegetarian and non-vegetarian delicacies blending North Indian flavors with regional hospitality.",
      icon: "Utensils",
    },
  ],
};

export function getWhatsAppBookingLink(details?: {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  reference?: string;
}): string {
  const number = HOTEL_INFO.contact.whatsapp;
  let text = `Hello Hotel KCS team, I would like to enquire about room reservations in Begusarai.`;

  if (details) {
    if (details.reference) {
      text = `Hello Hotel KCS team, I have placed an online booking enquiry (Ref: #${details.reference}). Could you please confirm availability?`;
    } else if (details.roomName) {
      text = `Hello Hotel KCS team, I am interested in booking the *${details.roomName}* from *${details.checkIn || 'upcoming dates'}* to *${details.checkOut || 'checkout'}* for ${details.guests || 2} guests. Please share availability & rates.`;
    }
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

