import { Room } from "@/types";

export const ROOMS_DATA: Room[] = [
  {
    id: "room-standard",
    slug: "standard-room",
    name: "Standard Room",
    subtitle: "Comfortable & Functional Stay for Smart Travelers",
    category: "standard",
    description:
      "Designed for solo executives and transit travelers seeking quiet repose, modern cleanliness, and unmatched value in Begusarai.",
    longDescription:
      "The Standard Room at Hotel KCS blends thoughtful simplicity with modern comfort. Perfectly suited for business executives, transit guests, and visiting professionals, each room features high-density orthopedic mattresses, sound-dampened windows, individually controlled air conditioning, high-speed Wi-Fi, and an ergonomic workspace. Enjoy prompt room service and pristine ensuite bathrooms with rainfall hot showers.",
    pricePerNight: 1899,
    originalPrice: 2299,
    maxGuests: 2,
    maxAdults: 2,
    maxChildren: 1,
    bedType: "Queen Size or Twin Beds",
    sizeSqFt: 220,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Individually Controlled AC",
      "High-Speed Wi-Fi",
      "32\" Smart LED TV",
      "Tea & Coffee Maker",
      "Ensuite Rainfall Shower",
      "24/7 Power Backup",
      "Daily Housekeeping",
      "Complimentary Toiletries",
    ],
    highlights: [
      "Ergonomic work desk & chair",
      "Daily bottled mineral water",
      "Express check-in / check-out",
      "Room service menu",
    ],
    isAvailable: true,
  },
  {
    id: "room-deluxe",
    slug: "deluxe-room",
    name: "Deluxe Room",
    subtitle: "Refined Aesthetics & Added Space for Discerning Guests",
    category: "deluxe",
    description:
      "Generously proportioned with warm ambient lighting, elegant furnishings, and modern hospitality touches for a soothing stay.",
    longDescription:
      "The Deluxe Room offers an elevated hospitality experience with enhanced square footage and tasteful warm wood and champagne gold decor accents. Sink into a plush King-size bed fitted with 300-thread-count Egyptian cotton linens. An inviting lounge armchair provides the ideal nook for unwinding with a book or cup of fresh tea, while the spacious bathroom features high-end bath amenities.",
    pricePerNight: 2499,
    originalPrice: 2999,
    maxGuests: 3,
    maxAdults: 2,
    maxChildren: 2,
    bedType: "Plush King Bed",
    sizeSqFt: 300,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Whisper-Quiet Split AC",
      "High-Speed Wi-Fi (50 Mbps)",
      "43\" 4K Smart TV with OTT",
      "Mini Refrigerator",
      "Electric Kettle & Tea Setup",
      "Premium Bathroom Toiletries",
      "Hair Dryer upon request",
      "24/7 Hot & Cold Water",
    ],
    highlights: [
      "Plush lounge seating",
      "Double glazed acoustic windows",
      "Luggage rack and full wardrobe",
      "Priority in-room dining",
    ],
    isAvailable: true,
  },
  {
    id: "room-premium",
    slug: "premium-room",
    name: "Premium Executive Room",
    subtitle: "Executive Luxury with Dedicated Work & Living Zones",
    category: "premium",
    description:
      "Our premier executive quarters feature panoramic city views, superior fixtures, complimentary breakfast options, and VIP hospitality.",
    longDescription:
      "Tailored for top corporate executives, government officials, and luxury-seeking vacationers, the Premium Executive Room at Hotel KCS redefines hospitality in Begusarai. Enjoy custom mahogany finishes, deep gold trim accents, a dedicated executive workspace with high-speed ports, a plush sitting couch, and a luxurious bathroom with rain shower and premium herbal bath selections.",
    pricePerNight: 3299,
    originalPrice: 3899,
    maxGuests: 3,
    maxAdults: 3,
    maxChildren: 2,
    bedType: "California King Bed",
    sizeSqFt: 380,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Climate-Controlled Air Conditioning",
      "Complimentary High-Speed Wi-Fi",
      "50\" Ultra HD Smart TV",
      "In-Room Safe & Electronic Locker",
      "Mini Bar / Refrigerator",
      "Gourmet Tea & Coffee Station",
      "Premium Luxury Bath Amenities",
      "Bathrobes & Plush Slippers",
    ],
    highlights: [
      "Complimentary breakfast voucher options",
      "Dedicated corporate writing desk",
      "Soundproofed walls & acoustic glass",
      "Welcome beverage upon arrival",
    ],
    isAvailable: true,
  },
  {
    id: "room-family-suite",
    slug: "family-suite",
    name: "Family Suite",
    subtitle: "Expansive Multi-Bed Haven for Families and Delegations",
    category: "suite",
    description:
      "A spacious two-zone suite accommodating families or groups with maximum comfort, privacy, and homelike warmth.",
    longDescription:
      "Traveling with family or wedding parties? The Family Suite at Hotel KCS provides generous interconnected space with two distinct sleeping arrangements, a cozy central lounge area, double vanity mirrors, and ample wardrobe storage for longer stays. Indulge in home-style hospitality with round-the-clock assistance and tailored meal delivery for children and seniors alike.",
    pricePerNight: 4499,
    originalPrice: 5199,
    maxGuests: 5,
    maxAdults: 4,
    maxChildren: 3,
    bedType: "1 King Bed + 1 Queen Bed (or 2 Twins)",
    sizeSqFt: 520,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Dual Inverter AC Units",
      "Ultra-Fast Dedicated Wi-Fi",
      "55\" Smart TV in Living Area",
      "Spacious Dining & Seating Table",
      "Large Ensuite with Separate Bath Area",
      "Electric Kettle & Snack Basket",
      "Iron & Ironing Board on request",
      "Extra Rollaway Bed available",
    ],
    highlights: [
      "Spacious enough for luggage & wedding attire",
      "Direct phone line to concierge",
      "Tailored kid-friendly food options",
      "Complimentary late checkout (subject to availability)",
    ],
    isAvailable: true,
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return ROOMS_DATA.find((r) => r.slug === slug);
}

export function getAllRoomSlugs(): string[] {
  return ROOMS_DATA.map((r) => r.slug);
}

