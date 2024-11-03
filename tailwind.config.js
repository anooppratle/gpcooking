/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
