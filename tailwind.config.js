module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Text colors
        "heading-light": "#343434",
        "secondary-light": "#666666",
        "secondary-dark": "#D0D0D0",

        //Button colors
        "button-primary": "#1B84FF",

        //Borders
        "border-primary": "#E7E7E7",

        //Background colors
        "background-secondary-light": "#F7F7F7",
        "background-secondary-dark": "#3C3C3C",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
