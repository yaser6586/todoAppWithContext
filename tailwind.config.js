/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // below code define the dark and light theme for daisy ui
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
