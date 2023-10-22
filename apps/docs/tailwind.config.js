/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/ui/components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("../../packages/ui/tailwind.config.js")],
};
