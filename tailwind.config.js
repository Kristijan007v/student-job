module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //Text colors
        "heading-light": "#343434",
        "secondary-light": "#666666",
        "secondary-dark": "#D0D0D0",

        //Button colors
        "button-primary": "#1B84FF",
        "button-hover": "#59A6FF",

        //Borders
        "border-primary": "#E7E7E7",

        //Background colors
        "background-primary-light": "#FAFAFA",
        "background-secondary-light": "#F7F7F7",
        "background-primary-dark": "#262626",
        "background-secondary-dark": "#3C3C3C",

        //Special colors
        "green-light": "#EFF8E0",
        "blue-light": "#DCE7F5",
        "gray-light": "#E2E1E1",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
