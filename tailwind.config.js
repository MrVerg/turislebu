/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lebu: {
          magenta: '#d9277d',
          orange: '#f37329',
          yellow: '#f9bb2d',
          green: '#3bb54a',
          teal: '#00a9a1',
          dark: '#414141'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
