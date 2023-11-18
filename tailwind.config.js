/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'audiowide': ['Audiowide', 'cursive'],
        'montserrat-alt': ['Montserrat Alternates', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'],
        'wix-madefor-display': ['Wix Madefor Display', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      colors: {
        softgreen: "rgba(9, 151, 124, 1)",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

