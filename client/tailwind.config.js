module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "b-yellow": "#F9C22E",
        "b-black": "#171614",
        "b-aqua": "#5DFDCB",
        "b-blue": "#7CC6FE",
        "b-white": "#F4FAFF",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
