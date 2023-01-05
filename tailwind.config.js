/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./partials/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        quicksand: "Quicksand",
        montserrat: "Montserrat",
      },
      colors: {
        primary: "#A174DB",
        secondary: "#49BE55",
        baseText: "#666666",
        titleText: "#222222",
      },
    },
  },
  plugins: [],
};
