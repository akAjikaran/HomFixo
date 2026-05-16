import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#182B3C",
        ink: "#182B3C",
        brand: {
          50: "#fff3ed",
          100: "#ffe2d2",
          500: "#F76011",
          600: "#d94e08",
          700: "#b83f06",
        },
        whatsapp: {
          500: "#20c565",
          600: "#16a454",
        },
        lagoon: "#F76011",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.10)",
        card: "0 14px 30px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
