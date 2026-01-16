/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "var(--color-bg-accent)",
        muted: "var(--color-text-muted)",
        primary: "var(--color-text-primary)",
        price: "var(--color-text-price)",
        footer: "var(--color-text-footer)",
        name: "var(--color-text-name)",
        count: "var(--color-count)",
        "bg-footer": "var(--color-bg-footer)",
        "bg-button": "var(--color-button)",
        "text-button": "var(--color-text-button)",
        "button-wishlist": "var(--color-button-wishlist)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
