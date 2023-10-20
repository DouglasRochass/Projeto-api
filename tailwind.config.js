/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ['Poppins', 'sans'],
        },
        backgroundColor: {
          'beige-200': 'rgb(219, 216, 203)',
          'beige-300': 'rgb(200, 195, 182)',
          'beige-400': 'rgb(180, 175, 162)',
        },
      },
    },
    variants: {},
    plugins: [],
  }

