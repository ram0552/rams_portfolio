/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#ef4444",
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
        dark: {
          DEFAULT: "#09090b",
          50: "#27272a",
          100: "#18181b",
          200: "#121215",
        },
        light: {
          DEFAULT: "#ffffff",
          50: "#fafafa",
          100: "#f4f4f5",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.35" },
        },
      },
    },
  },
  plugins: [],
}
