/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "poppins":[ "Poppins","sans-serif"],
        "bangla_font":['CharukolaUltraLight',"sans-serif"],
        "bangla_font2":[ 'Mukti',"sans-serif"]
      },
      colors:{
        "main_color":"#45aaf2"
      }
    },
  },
  plugins: [],
}