const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // `content` will be replaced if present in the project configuration.
  // Check https://tailwindcss.com/docs/presets#merging-logic-in-depth
  content: ["./components/**/*.{jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      fontSize: {
        base: "0.97rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
