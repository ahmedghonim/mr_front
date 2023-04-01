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
          primary: "#E7BB4C",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      borderRadius: {
        "3xl": "30px",
      },
      colors: {
        primary: {
          100: "#E7BB4C",
        },
        secondary: {},

        error: {},
        light: {},
        dark: {
          100: "#181818",
          200: "#1D1D1D",
        },
      },
    },
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
      Inter: ["inter", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-rtl"), require("daisyui")],
};
