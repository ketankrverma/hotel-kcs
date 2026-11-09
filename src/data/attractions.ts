export interface LocalAttraction {
  id: string;
  name: string;
  category: "Nature & Wildlife" | "Heritage & Spiritual" | "Cultural Landmark" | "Industrial Hub";
  distance: string;
  driveTime: string;
  description: string;
  image: string;
  highlights: string[];
}

export const BEGUSARAI_ATTRACTIONS: LocalAttraction[] = [
  {
    id: "att-1",
    name: "Kanwar Lake Bird Sanctuary (Kabartal Wetland)",
    category: "Nature & Wildlife",
    distance: "22 km from Hotel KCS",
    driveTime: "approx. 40 mins",
    description:
      "Designated as Bihar's premier Ramsar Wetland site and one of Asia's largest freshwater oxbow lakes. A paradise for nature enthusiasts, hosting over 106 species of resident and migratory waterfowl including Siberian cranes during winter months.",
    image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Ramsar Wetland Site", "Winter Birdwatching", "Photographer Haven"],
  },
  {
    id: "att-2",
    name: "Simaria Ghat & Sacred Ganga Riverfront",
    category: "Cultural Landmark",
    distance: "18 km from Hotel KCS",
    driveTime: "approx. 30 mins",
    description:
      "The revered Ganges riverbank near Begusarai, famous for the auspicious Simaria Kalpwas Mela, traditional evening Aarti, and the birthplace connection with Rashtrakavi Ramdhari Singh 'Dinkar'.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sacred Ganga Aarti", "Simaria Kalpwas Mela", "Historical Significance"],
  },
  {
    id: "att-3",
    name: "Naulakha Temple (Naulakha Mandir)",
    category: "Heritage & Spiritual",
    distance: "3 km from Hotel KCS",
    driveTime: "approx. 8 mins",
    description:
      "A revered architectural masterpiece situated in central Begusarai, famous for its magnificent marble carving, peaceful sanctum, and lush temple courtyard.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Ornate Architecture", "Serene Atmosphere", "Centrally Located"],
  },
  {
    id: "att-4",
    name: "Barauni Industrial Complex & Refinery",
    category: "Industrial Hub",
    distance: "12 km from Hotel KCS",
    driveTime: "approx. 20 mins",
    description:
      "The industrial lifeline of Eastern India, housing Indian Oil Corporation Refinery, Barauni Thermal Power Station, and fertilizer plants. Frequent destination for corporate executives and engineering delegations staying at Hotel KCS.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Corporate Hub", "Convenient Highway Drive", "Business Delegations"],
  },
];
