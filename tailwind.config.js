/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryColor: " #FA4A0C",
      white: "#fff",
      black: "#00000",
      lightBlack: "#252B42",
      darkGray: "#737373",
      lightGray: "#FAFAFA",
    },

    fontFamily: {
      melody: ["Hi Melody", "cursive"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    // screens: {
    //   lg: "1024px",
    //   sm: "375px",
    //   xs: "360px",
    // },
    extend: {},
  },
  plugins: [],
};
