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
        wood: {
          50: "#fdfbf7",
          100: "#f7f1e7",
          200: "#eddcc4",
          300: "#dfbf99",
          400: "#ce9c6d",
          500: "#b97f48",
          600: "#9c6339",
          700: "#7c4c30",
          800: "#653f2c",
          900: "#553628",
          950: "#311c14",
        },
        forest: {
          50: "#f2f9f4",
          100: "#e0f1e5",
          200: "#c3e3cd",
          500: "#2d7a46",
          600: "#226338",
          700: "#1d4f2e",
          800: "#1a3f27",
          900: "#173422",
        }
      },
    },
  },
  plugins: [],
};
export default config;
