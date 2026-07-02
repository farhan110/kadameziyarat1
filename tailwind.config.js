/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0A0908",       // deepest black — Muharram night
        coal: "#121110",        // section black
        charcoal: "#1B1917",    // card black
        smoke: "#26231F",       // borders / raised surfaces
        gold: "#C9A24B",        // primary gold
        goldbright: "#EBCB82",  // highlight gold
        golddeep: "#8F6E2B",    // muted gold
        ivory: "#F3EDDE",       // primary text on dark
        sand: "#B9AE97",        // secondary text
        maroon: "#7C2230",      // Karbala banner red — sparing accent
        maroondeep: "#4E121C",
      },
      fontFamily: {
        display: ["Marcellus", "Georgia", "serif"],
        body: ["Mulish", "system-ui", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glowpulse: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
        floatup: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
          "100%": { transform: "translateY(0px)" },
        },
        riseparticle: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.15" },
          "100%": { transform: "translateY(-90vh) scale(0.4)", opacity: "0" },
        },
        spinslow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        glowpulse: "glowpulse 7s ease-in-out infinite",
        floatup: "floatup 8s ease-in-out infinite",
        spinslow: "spinslow 90s linear infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
