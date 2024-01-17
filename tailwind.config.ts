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
    fontSize: {
      body: [
        "0.8125rem",
        {
          lineHeight: "1.125rem",
          letterSpacing: "-0.1px",
          fontWeight: "400",
        },
      ],
      body_variant: [
        "0.8125rem",
        {
          lineHeight: "0.9375rem",
          letterSpacing: "-0.25px",
          fontWeight: "400",
        },
      ],
      sm_variant: [
        "0.9375rem",
        {
          lineHeight: "0.9375rem",
          letterSpacing: "-0.25px",
          fontWeight: "700",
        },
      ],
      sm: [
        "0.9375rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.25px",
          fontWeight: "700",
        },
      ],
      md: [
        "1.5rem",
        {
          lineHeight: "1.375rem",
          letterSpacing: "-0.75px",
          fontWeight: "700",
        },
      ],
      lg: [
        "2.25rem",
        {
          lineHeight: "2.0625rem",
          letterSpacing: "-1.13px",
          fontWeight: "700",
        },
      ],
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
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
        secondary: "#DFE3FA",
      },
    }),
  ],
};
export default config;
