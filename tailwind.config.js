/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    maxWidth: {
        '1/2': '50%',
        '80p': '80%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
