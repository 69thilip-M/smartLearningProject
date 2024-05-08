/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        
        'my-image': "url('/assests/home.jpg')",
      },
    },
  },
  plugins: [],
}
 
