/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "991px",
    },

    extend: {
      colors: {
        "secondary-white": "#f02d34",
      },
    },
  },
  plugins: [],
};
