
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        pastel: {
          green: "#F2FCE2",
          yellow: "#FEF7CD",
          blue: "#D3E4FD",
          pink: "#FFDEE2",
          purple: "#E5DEFF",
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-in",
        "scale-in": "scale-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
