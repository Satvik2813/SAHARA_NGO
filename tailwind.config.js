/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "1120px", xl: "1200px" },
    },
    extend: {
      colors: {
        brand: {
          green: "#018738", // sampled from SAHARA logo
          forest: "#0B4D2A",
          "green-700": "#0A6B30",
          "green-200": "#D3E7D8",
          "green-050": "#E9F3EC",
        },
        terracotta: {
          DEFAULT: "#C24A25",
          hover: "#A83E1E",
        },
        marigold: "#F2A61C",
        cream: "#FBF8F1",
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#1B1A17",
          muted: "#5A5750",
        },
        line: "#E7E1D5",
        state: {
          success: "#2E7D46",
          warning: "#B8860B",
          error: "#B0301F",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "22px",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(27,26,23,.06)",
        md: "0 8px 24px rgba(11,77,42,.10)",
        focus: "0 0 0 3px rgba(242,166,28,.55)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "240ms",
        slow: "400ms",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
