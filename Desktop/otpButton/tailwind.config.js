/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blu: {
          600: "#001733",
          700: "#002451",
          800: "#001126",
        },
        grey:{
          200:"#46515e"
        }
      },
    },
  },
  plugins: [],
};
