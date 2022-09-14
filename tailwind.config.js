/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 70px 70px white',
      },
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Berlow: ["Roboto Condensed", "sans-serif"],
      },
      backgroundImage: {
        "mobile": "url('/src/assets/home/background-home-mobile.jpg')",
        "tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        "desktop": "url('/src/assets/home/background-home-desktop.jpg')",
        "mobiledest": "url('/src/assets/destination/background-destination-mobile.jpg')",
        "tabletdest": "url('/src/assets/destination/background-destination-tablet.jpg')",
        "desktopdest": "url('/src/assets/destination/background-destination-desktop.jpg')",
        "mobilecrew": "url('/src/assets/crew/background-crew-mobile.jpg')",
        "tabletcrew": "url('/src/assets/crew/background-crew-tablet.jpg')",
        "desktopcrew": "url('/src/assets/crew/background-crew-desktop.jpg')",
        "mobiletechnology": "url('/src/assets/technology/background-technology-mobile.jpg')",
        "tablettechnology": "url('/src/assets/technology/background-technology-tablet.jpg')",
        "desktoptechnology": "url('/src/assets/technology/background-technology-desktop.jpg')",
      },
    },
    screens: {
      'mobile': '760px',
      'desktop': '975px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
