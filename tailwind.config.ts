import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // The original design already includes a precise reset and component system.
  // Disabling Tailwind preflight prevents any visual change while utilities remain available.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        smoky: "#11120D",
        olive: "#565449",
        bone: "#D8CFBC",
        floral: "#FFFBF4",
      },
      fontFamily: {
        display: ["Stellar", "Gloock", "Bodoni Moda", "Didot", "serif"],
        body: ["DM Sans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
