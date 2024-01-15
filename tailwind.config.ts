import type { Config } from "tailwindcss";
const { createThemes } = require("tw-colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#7C5DFA",
        lightPurple: "#9277FF",
        darkBlue: "#1E2139",
        lighterDarkBlue: "#252945",
        lightBlue: "#DFE3FA",
        gray: "#888EB0",
        mediumBlue: "#7E88C3",
        almostBlack: "#0C0E16",
        brightRed: "#EC5757",
        lightBrightRed: "#9277FF",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        base: "#F8F8F8",
        header: "#373B53",
        primary: "#0C0E16",
        secondary: "#888EB0",
      },
      dark: {
        base: "#141625",
        header: "#1E2139",
        primary: "#FFFFFF",
        secondary: "#DFE3FA"
      },
    }),
  ],
};
export default config;
