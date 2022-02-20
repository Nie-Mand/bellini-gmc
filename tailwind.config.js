module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/btnBg.svg')",
        'background-main': "url('/img/mainBg.svg')",
      }
    },
  },
  plugins: [],
};
