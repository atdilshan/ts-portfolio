/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        system: ['"Noto Sans"', '"Noto Sans Tamil"', 'sans-serif'],
        accent: ['"Fascinate Inline"', '"Noto Sans Tamil"', 'cursive'],
      },
    },
  },
  plugins: [],
}
