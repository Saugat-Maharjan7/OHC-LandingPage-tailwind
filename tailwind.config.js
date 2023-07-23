/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary-500': '#EB5B49',
      },
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}