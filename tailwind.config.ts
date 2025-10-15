import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/(pages)/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand color using CSS variable with alpha support
        brand: "rgb(var(--brand) / <alpha-value>)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: { lg: "1100px" },
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
    },
  },
  plugins: [],
} satisfies Config;


