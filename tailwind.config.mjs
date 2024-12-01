/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white-primary)",
        black: "var(--black-primary)",
        primary: "var(--primary)",
        seconday: "var(--secondary)"
      },
      fontFamily: {
        homemade: ["Homemade Apple", "cursive"],
        oleo: ["Oleo Script Swash Caps", "system-ui"],
      },
    },
  },
  plugins: [],
};
