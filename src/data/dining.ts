import { MenuItem } from "@/types";

export const DINING_HIGHLIGHTS = {
  restaurantName: "The KCS Flavours - Multi-Cuisine Dining",
  tagline: "Savor the True Essence of Regional Hospitality & Fine Indian Cuisine",
  timings: {
    breakfast: "7:00 AM - 10:30 AM",
    lunch: "12:30 PM - 3:30 PM",
    dinner: "7:00 PM - 10:30 PM",
    roomService: "24 Hours (Limited Night Menu after 11 PM)",
  },
  description:
    "At Hotel KCS, our culinary philosophy centers on fresh regional ingredients, timeless family recipes, and hygienic culinary preparation. Whether you crave authentic Mithila & Bihari flavors or crave hearty North Indian curries and comforting Chinese sizzlers, our chefs cater to every palate.",
  features: [
    "100% Hygienic, Clean RO Water Prepared Food",
    "Special Bihari & Mithila Authentic Delicacies",
    "Dedicated Pure Vegetarian Kitchen Sections",
    "In-Room Dining Delivered Piping Hot",
    "Custom Catering for Corporate Meetings & Banquets",
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // Bihari Delicacies
  {
    id: "m-b-1",
    name: "Traditional Bihari Litti Chokha Platter",
    description: "Char-roasted whole wheat sattu dough balls bathed in pure desi ghee, served with roasted brinjal-tomato chokha, tangy baingan bharta, and zesty green chutney.",
    price: 240,
    category: "Bihari Delicacies",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "m-b-2",
    name: "Spiced Sattu Paratha with Aloo Chokha & Dahi",
    description: "Golden griddle-toasted parathas filled with ajwain & kalonji spiced roasted gram flour, paired with seasoned mashed potato chokha and fresh set curd.",
    price: 180,
    category: "Bihari Delicacies",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "m-b-3",
    name: "Champaran Handi Paneer",
    description: "Clay pot slow-cooked cottage cheese cubes infused with whole garlic pods, mustard oil, and sealed earthen spices.",
    price: 320,
    category: "Bihari Delicacies",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "m-b-4",
    name: "Champaran Ahuna Handi Mutton (Subject to Daily Fresh Preparation)",
    description: "Classic Bihari slow-earthen pot mutton cooked on glowing charcoal with whole spices, mustard oil, and shallots. Authentic rustic recipe.",
    price: 460,
    category: "Bihari Delicacies",
    isVeg: false,
    isPopular: true,
  },

  // Starters
  {
    id: "m-s-1",
    name: "Paneer Tikka Angara",
    description: "Chargrilled fresh cottage cheese marinated in hung curd, Kashmiri deghi mirch, and hand-ground spices with bell peppers.",
    price: 260,
    category: "Starters",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "m-s-2",
    name: "Crispy Corn & Pepper Salt",
    description: "Golden fried sweet corn kernels tossed with crushed black pepper, scallions, and roasted garlic chips.",
    price: 190,
    category: "Starters",
    isVeg: true,
  },
  {
    id: "m-s-3",
    name: "Murgh Malai Tikka",
    description: "Tender boneless chicken morsels steeped in cheese, cashew cream, and cardamom, smoked in tandoor.",
    price: 340,
    category: "Starters",
    isVeg: false,
    isPopular: true,
  },
  {
    id: "m-s-4",
    name: "Tandoori Chicken (Half / Full)",
    description: "Whole spring chicken spiced with tandoori masala, mustard marinade, and lemon glaze.",
    price: 320,
    category: "Starters",
    isVeg: false,
  },

  // Main Course
  {
    id: "m-m-1",
    name: "KCS Signature Dal Makhani",
    description: "Slow-simmered black lentils cooked overnight on tandoor embers with butter, cream, and plum tomatoes.",
    price: 240,
    category: "Main Course",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "m-m-2",
    name: "Shahi Paneer Lababdar",
    description: "Velvety cashew and onion-tomato gravy with soft paneer cubes and crushed kasuri methi aroma.",
    price: 290,
    category: "Main Course",
    isVeg: true,
  },
  {
    id: "m-m-3",
    name: "Kadhai Seasonal Vegetables",
    description: "Crisp bell peppers, baby corn, florets, and beans tossed in freshly pounded kadhai masala.",
    price: 220,
    category: "Main Course",
    isVeg: true,
  },
  {
    id: "m-m-4",
    name: "Butter Chicken (Boneless)",
    description: "Charred tandoori chicken simmered in rich satin makhani gravy enriched with fresh butter and fenugreek.",
    price: 380,
    category: "Main Course",
    isVeg: false,
    isPopular: true,
  },
  {
    id: "m-m-5",
    name: "Dhaba Style Murgh Curry",
    description: "Hearty North Indian homestyle chicken curry cooked with browned onions, ginger juliennes, and whole spices.",
    price: 350,
    category: "Main Course",
    isVeg: false,
  },

  // Breads & Rice
  {
    id: "m-r-1",
    name: "Butter Naan & Garlic Naan",
    description: "Refined flour bread freshly slapped on tandoor walls, brushed with butter or garlic coriander butter.",
    price: 60,
    category: "Breads & Rice",
    isVeg: true,
  },
  {
    id: "m-r-2",
    name: "Tandoori Roti (Plain / Butter)",
    description: "Healthy whole wheat flatbread made fresh in clay tandoor.",
    price: 25,
    category: "Breads & Rice",
    isVeg: true,
  },
  {
    id: "m-r-3",
    name: "Subz Dum Biryani",
    description: "Aromatic aged basmati rice layered with garden vegetables, saffron milk, and aromatic potli spices, served with burani raita.",
    price: 240,
    category: "Breads & Rice",
    isVeg: true,
  },
  {
    id: "m-r-4",
    name: "Chicken Dum Biryani (Awadhi Style)",
    description: "Fragrant saffron rice sealed in clay pot with succulent spiced chicken and brown onions.",
    price: 340,
    category: "Breads & Rice",
    isVeg: false,
    isPopular: true,
  },

  // Beverages & Desserts
  {
    id: "m-d-1",
    name: "Gulab Jamun with Rabdi",
    description: "Warm golden khoya dumplings served with slow-reduced Lucknowi rabdi and pistachio slivers.",
    price: 140,
    category: "Beverages & Desserts",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "m-d-2",
    name: "Chilled Masala Chaas / Sweet Lassi",
    description: "Traditional churned curd beverage with roasted cumin or sweetened with saffron and rose water.",
    price: 90,
    category: "Beverages & Desserts",
    isVeg: true,
  },
  {
    id: "m-d-3",
    name: "Fresh Brewed Masala Chai & Filter Coffee",
    description: "Aromatic ginger-cardamom tea or hot south-filter chicory coffee.",
    price: 50,
    category: "Beverages & Desserts",
    isVeg: true,
  },
];

