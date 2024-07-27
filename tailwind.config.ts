import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Nimbus", "sans-serif"],
        content: ["Duhacks", "serif"],
        date: ["ShadedFont", "serif"],
        monte: ["Monteserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      ss: "500px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1920px",
    },
  },
  plugins: [],
};
export default config;
