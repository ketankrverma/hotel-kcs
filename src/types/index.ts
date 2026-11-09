export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'standard' | 'deluxe' | 'premium' | 'suite';
  description: string;
  longDescription: string;
  pricePerNight: number;
  originalPrice?: number;
  maxGuests: number;
  maxAdults: number;
  maxChildren: number;
  bedType: string;
  sizeSqFt: number;
  featured: boolean;
  images: string[];
  coverImage: string;
  amenities: string[];
  highlights: string[];
  isAvailable: boolean;
}

export interface BookingSubmission {
  id?: string;
  reference: string;
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomsCount: number;
  roomSlug: string;
  roomName: string;
  specialRequests?: string;
  estimatedTotal: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Breads & Rice' | 'Beverages & Desserts' | 'Bihari Delicacies';
  isVeg: boolean;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'dining' | 'interiors' | 'amenities' | 'exterior';
  image: string;
  caption: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'Room Comfort' | 'Guest Services' | 'Dining & Events' | 'Convenience & Security';
  image?: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

