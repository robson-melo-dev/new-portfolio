import type { Config } from "tailwindcss";

/**
 * Design tokens ported from the former `src/assets/sass/` partials:
 * `_colors.scss`, `_fonts.scss` and `_animations.scss`.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#171a1b",
        "dark-grey": "#1c1e22",
        grey: "#e5e5e5",
        white: "#ffffff",
        purple: "#7000ff",
        // Readable on the dark background; #7000ff is for fills, not text.
        "purple-light": "#b794ff",
        "accent-green": "#0ee6b7",
        // Terminal window chrome
        chrome: {
          border: "#4a4a4a",
          title: "rgba(32, 34, 38, 0.9)",
          red: "#ff5f56",
          yellow: "#ffbd2e",
          green: "#27c93f",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        code: ["'Fira Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Ported from the FntSmaller…FntXLarge mixins.
        smaller: ["0.625rem", { lineHeight: "1rem" }],
        small: ["1rem", { lineHeight: "1.5rem" }],
        medium: ["1.125rem", { lineHeight: "1.75rem" }],
        "medium-large": ["1.5rem", { lineHeight: "2rem" }],
        large: ["2.25rem", { lineHeight: "2.5rem" }],
        xlarge: ["4rem", { lineHeight: "1.1" }],
      },
      screens: {
        // The original stylesheets keyed off 767px / 1250px / 1900px.
        xl2: "1250px",
        xl3: "1900px",
      },
      keyframes: {
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slide: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.2" },
          "100%": { transform: "translate(0)", opacity: "1" },
        },
        "full-width": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        caret: {
          "0%, 49%": { borderColor: "#0ee6b7" },
          "50%, 100%": { borderColor: "transparent" },
        },
      },
      animation: {
        fade: "fade 0.3s ease forwards",
        slide: "slide 0.4s ease forwards",
        "full-width": "full-width 0.4s ease-in-out forwards",
        bounce: "bounce 2s infinite",
        caret: "caret 1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
