import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#050505",
          800: "#0C0C0E",
          700: "#151518",
          600: "#212226",
        },
        steel: {
          200: "#E4E5E8",
          300: "#C7CBD1",
          400: "#A9AEB6",
          500: "#8B909A",
        },
        line: "rgba(255,255,255,0.09)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};
export default config;
