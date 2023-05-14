/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["SF Mono", "Inter", "sans-serif"],
        descFont: ["Inter", "san-serif"],
        navFont: ["Calibre", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#404258",
        bodyDark: "#404258",
        bodyLight: "#CDC2AE",
        textPrimary: "#DD7732",
        textLink: "#0E8388",
        textLight: "#ccd6f6",
        textDark: "#1A120B",
        dark1: "#1B2430",
        dark2: "#394867",
        dark3: "#354259",
        light1: "#E1D4BB",
        light2: "#FCF8E8",
        light3: "#E6BA95",
        // bodyColor: "#0A192F",
        // textGreen: "#64ffda",
        // textLight: "#ccd6f6",
        // textDark: "#8892b0",
        hoverColor: "rgba(115, 115, 115, 0.3)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
