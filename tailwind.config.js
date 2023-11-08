/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        yellow: "#F1A501",
        black: "#1F2530",
        green: "#018772",
        pink: "#018772",
        gray: "#018772",
      },
    },
  },
  plugins: [],
};


