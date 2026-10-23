import type { Config } from "tailwindcss";

// Bangkok EXPO poster look: sky-blue gradient, U&I green, yellow highlights, white rounded cards, Prompt type.
// Token names are kept from the shared build so every component re-themes at once:
//   primary = poster green (50 is a pale sky tint used for section grounds), navy = deep navy text,
//   accent = poster yellow, coral = Australian-flag red.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF7FD",
          100: "#E1F3EC",
          300: "#8EDCC4",
          500: "#00936F",
          700: "#007860",
          900: "#005A48",
        },
        navy: {
          100: "#DCE8F2",
          300: "#5B6C82",
          700: "#12284A",
          900: "#0D1F3A",
        },
        accent: {
          100: "#FFF9D2",
          500: "#F8E844",
          600: "#EDD923",
        },
        coral: { 500: "#E4002B" },
        sky: { 500: "#1A8DCE", 700: "#1888C7", 300: "#49A6D8" },
        cream: "#F5FBFF",
        neutral: {
          50: "#FFFDFA",
          100: "#F6F3EE",
          200: "#E7E3DC",
          400: "#8C8A84",
          600: "#4A4844",
          700: "#3B3A36",
          900: "#12110F",
        },
      },
      fontFamily: {
        heading: ["var(--font-prompt)", "Noto Sans Thai", "system-ui", "sans-serif"],
        sans: ["var(--font-prompt)", "Noto Sans Thai", "system-ui", "sans-serif"],
        script: ["var(--font-yellowtail)", "cursive"],
      },
      fontSize: {
        "ds-small": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "ds-h2": ["2.625rem", { lineHeight: "1.15", fontWeight: "600" }],
      },
      backgroundImage: {
        bar: "linear-gradient(90deg, #00936F 0%, #007860 100%)",
        sky: "linear-gradient(180deg, #1888C7 0%, #1A8DCE 45%, #49A6D8 100%)",
        fade: "linear-gradient(0deg, rgba(18,17,15,.85) 0%, rgba(18,17,15,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
