/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir"],
      },
      backgroundImage : {
        'img' : "url('./src/assets/Rectangle 32.png')",
      },
    },
  },
  plugins: [
    require("tailwindcss-inner-border"),
  ],
};
