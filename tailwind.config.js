/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0261E0",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0261E0",
        },
        secondary: {},

        error: {},
        light: {},
        dark: {
          100: "#181818",
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl"), require("daisyui")],
};
