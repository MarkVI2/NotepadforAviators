/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background-dark": "#383838",
      "background-sidebar":"#474747",
      "primary1": "#bbadcd",
      "primary": "#AB9AC1",
      "secondary": "#CACDCE",
      "accent": "#a69ed6",
    },
    extend: {
      gridTemplateColumns: {
        "sidebar-flightInfo": "repeat(6, minmax(0.5, 1fr)) auto",
      },
      gridTemplateRows: {
        '2': 'repeat(2, minmax(1, 1fr)) auto',
        '6': 'repeat(6, minmax(1, 1fr)) auto',
        '9': 'repeat(9, minmax(1, 1fr)) auto',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
      },
      gridRowStart: {
        '8':'8',
        '9': '9',
      },
      gridRowEnd: {
        '8':'8',
        '9': '9',
      },
      borderWidth: {
        "1": "1px",
        '3': '3px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

