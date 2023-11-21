
/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [ "./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins':['Poppins','sans'],
    },},
  },
  plugins: [],
}