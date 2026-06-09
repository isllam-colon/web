import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Official Rube Palette ── */
        "baby-pink":    "#E7C9D1",
        "dusty-pink":   "#DDBBC5",
        "soft-pink":    "#F1DDE2",
        "light-grey":   "#D9D9D9",
        "soft-grey":    "#BFC3C7",
        "medium-grey":  "#7B7B7B",
        charcoal:       "#2B2B2B",
        "off-white":    "#FAF8F6",
        "silver-grey":  "#E6E7E8",
        "accent-1":     "#B48FA1",
        "accent-2":     "#8E7A88",
        "accent-3":     "#6D4F5F",
        /* ── Semantic aliases (used in components) ── */
        cream:          "#FAF8F6",
        "cream-deep":   "#F1DDE2",
        sand:           "#D9D9D9",
        mauve:          "#DDBBC5",
        "mauve-light":  "#E7C9D1",
        stone:          "#7B7B7B",
        pebble:         "#BFC3C7",
        "charcoal-mid": "#3A3A3A",
        surface:        "#FDFCFC",
      },
      fontFamily: {
        sans:    ["Inter", "Montserrat", "system-ui", "sans-serif"],
        display: ["Inter", "Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        soft: "1rem",
        card: "1.25rem",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
