/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Berlow: ["Roboto Condensed", "sans-serif"],
      },
      backgroundImage: {
        "mobile": "url('/src/assets/home/background-home-mobile.jpg')",
        "tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        "desktop": "url('/src/assets/home/background-home-desktop.jpg')",
      },
    },
    screens: {
      'desktop': '975px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
