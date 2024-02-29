/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "547px",
      lg: "1768px",
      xl: "1024px",
      "2xl": "1680px",
    },
    extend: {
      backgroundImage: {
        "intro-Image": "url(/src/images/forest.png)",
        image2: "url(/src/images/night.png)",
        contact: "url(/src/images/tents.png)",
      },
      keyframes: {
        flicker: {
          "0%": { transform: "scale(.95)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(.95)" },
        },
        glow: {
          "0%": { opacity: 0.6 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.6 },
        },
        introduction: {
          "0%": { backgroundColor: "black", opacity: 1 },
          "50%": { backgroundColor: "black", opacity: 1 },
          "100%": { backgroundColor: "black", opacity: 0 },
        },
        introduction2: {
          "0%": { opacity: 0 },
          "70%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fire: {
          "0%": { opacity: 0 },
          "10%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
        stump: {
          "0%": { opacity: 0 },
          "20%": { opacity: 0 },
          "30%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        guy: {
          "0%": { opacity: 0 },
          "40%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        rotateBoardTop: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(90deg)" },
        },
        rotateBoardBottom: {
          "0%": { transform: "rotate(14deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        fullmoon: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.05)" },
          "15%": { transform: "scale(.98)" },
          "20%": { transform: "scale(1.02)" },
          "25%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        flicker: "flicker 2s infinite",
        introduction: "introduction 3s linear ",
        introduction2: "introduction2 3s linear ",
        fire: "fire 3s linear ",
        guy: "guy 3s linear ",
        stump: "stump 3s linear ",
        rotateBoardTop: "rotateBoardTop .5s linear ",
        rotateBoardBottom: "rotateBoardBottom .5s linear ",
        fullmoon: "fullmoon 3s linear",
        glow: "glow 2s infinite",
      },
      colors: {
        primary: "#ff4800",
        darkblue: "#010512",
        moonlight: "#1F5078",
        footer: "#164058",
        night: "#091A2B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
