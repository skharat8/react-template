import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Color Shades Generator: https://mdigi.tools/color-shades
      colors: {
        primary: {
          50: "hsl(274, 28%, 95%)",
          100: "hsl(276, 26%, 85%)",
          200: "hsl(277, 27%, 75%)",
          300: "hsl(276, 26%, 65%)",
          400: "hsl(276, 26%, 55%)",
          500: "hsl(276, 26%, 45%)",
          600: "hsl(276, 26%, 35%)",
          700: "hsl(275, 27%, 25%)",
          800: "hsl(276, 26%, 15%)",
          900: "hsl(274, 28%, 5%)",
        },
        secondary: {
          50: "hsl(342, 52%, 95%)",
          100: "hsl(340, 51%, 85%)",
          200: "hsl(341, 51%, 75%)",
          300: "hsl(340, 51%, 65%)",
          400: "hsl(341, 51%, 55%)",
          500: "hsl(341, 51%, 45%)",
          600: "hsl(341, 51%, 35%)",
          700: "hsl(341, 51%, 25%)",
          800: "hsl(342, 51%, 15%)",
          900: "hsl(342, 52%, 5%)",
        },
        neutral: colors.gray,
        "light-accent": {
          100: "#ecd4c6",
          200: "#ddb39b",
        },
        "fire-orange": "#f47c07",
        "fire-red": "#f4541c",
        "link-color": "#646cff",
        "link-color-hover": "#535bf2",
        "nearly-black": "#242424",
      },

      fontFamily: {
        chocolateWithBrownie: ["chocolateWithBrownie", "serif"],
        noticia: ["Noticia Text", "serif"],
      },

      dropShadow: {
        logo: "0 0 2em theme(colors.secondary.500)",
      },
    },
  },
  plugins: [],
};
