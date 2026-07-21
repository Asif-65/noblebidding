import type { Config } from "tailwindcss";

/**
 * Design tokens for Noblie Bidding.
 * Palette, type scale, spacing and shadow are defined here so components
 * reference named tokens (bg-ink, text-brass, shadow-elevation) rather than
 * inline hex values. See §4 of the brief.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A1226",
        slate: "#1B2540",
        brass: {
          DEFAULT: "#C8A951",
          dim: "#8A7233",
        },
        paper: "#F7F6F2",
        graphite: "#2F3542",
        mist: "#E3E6EC",
      },
      fontFamily: {
        // Wired to the next/font CSS variables set in app/layout.tsx.
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
        h3: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        h2: ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },
      lineHeight: {
        body: "1.65",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "12px",
        control: "8px",
      },
      boxShadow: {
        elevation: "0 8px 30px rgba(10, 18, 38, 0.08)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
