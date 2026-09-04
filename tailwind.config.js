/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f5f0e6",
        amber: "#d8a441",
        gold: "#8d5f14",
        charcoal: "#141413",
        muted: "#696257",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(20, 20, 19, 0.16)",
        card: "0 14px 38px rgba(20, 20, 19, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
