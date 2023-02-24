/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#460C68',
        secondary: '#CB1C8D',
        mutant:"#D09CFA",
        nutral:"#7F167F",
        gray:"#F3CCFF"
      }
    },

  },
  plugins: [],
}
