/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eo: {
          red: {
            100: "#F0626A",
            300: "#EE1B24",
            500: "#BA141D",
            700: "#6E2D30",
            900: "#6E0C11",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
