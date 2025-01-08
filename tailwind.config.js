/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-main)",
        foreground: "var(--text-primary)",
        border: "var(--border-color)",
        input: "var(--bg-secondary)",
        primary: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--text-primary)",
        },
        secondary: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-secondary)",
        },
        muted: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-secondary)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--text-primary)",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} 