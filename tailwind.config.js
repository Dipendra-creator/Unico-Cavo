module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'light': ['Eina Light'],
            'semibold': ['Eina SemiBold'],
        }
    },
  },
  plugins: [],
}
