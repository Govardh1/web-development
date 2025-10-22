/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        blue:{
          700:"#002b5b",
          500:"#19406a",
          200:"#8094ad"
        },
        green:{
          400:"#36c6c0"
        }
      }
    },
  },
  plugins: [],
}