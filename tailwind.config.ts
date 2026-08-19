import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080E1F",
          900: "#0B1330",
          800: "#101B45",
          700: "#162458",
        },
        cyan: {
          400: "#3FE3E0",
          500: "#22D3D9",
        },
        ink: "#0B1330",
        cloud: "#F5F7FB",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(63,227,224,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(63,227,224,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
