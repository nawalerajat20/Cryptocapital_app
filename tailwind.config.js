/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#1B1B1B",
        red: "#EB0028",
        grey: "#DBDBDB",
        dimBlue: "#00BDF9",
        dimRed: "#ffd7dd ",
        dimGrey: "#A9A9A9",
        lightBlue: "#B7E4F2",
        darkGrey: "#343434",
        lightGrey: "#D9D9D9"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
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
  plugins: [],
};
