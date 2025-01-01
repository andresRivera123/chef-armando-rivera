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
        oleo: ["Oleo Script Swash Caps", "system-ui"],
      },
    },
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    }

  },
  plugins: [],
};
