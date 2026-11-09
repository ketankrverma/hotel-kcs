import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#071B16",
          900: "#0A241F",
          800: "#123B32", // Deep Forest Green primary
          700: "#1B4F43",
          600: "#276859",
        },
        gold: {
          50: "#FAF6EE",
          100: "#F4ECD9",
          200: "#E9D8B1",
          300: "#DFC286",
          400: "#D4B466",
          500: "#C9A96E", // Champagne Gold primary
          600: "#B89452",
          700: "#98753B",
          800: "#7A5C2D",
          900: "#5D4421",
        },
        ivory: {
          50: "#FCFBF8",
          100: "#F8F5EF", // Warm Ivory
          200: "#EFE8DA",
          300: "#E2D8C3",
        },
        charcoal: {
          900: "#181818",
          800: "#242424", // Charcoal primary
          700: "#363636",
          600: "#4F4F4F",
          500: "#737373",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        accent: ["var(--font-cinzel)", "serif"],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(18, 59, 50, 0.15)',
        'luxury-gold': '0 10px 30px -10px rgba(201, 169, 110, 0.35)',
      },
    },
  },
  plugins: [],
};
export default config;

