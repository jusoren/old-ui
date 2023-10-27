/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/ui/components/**/*.tsx", "./pages/**/*.mdx"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("../../packages/ui/tailwind.config.js")],
};
