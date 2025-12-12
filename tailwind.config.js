module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#BFA07A",
        soft: "#F5F5F4",
      },
    },
  },
  plugins: [],
};