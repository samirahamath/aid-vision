/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#51565d',
        secondary: '#292c2e',
        light: '#F4F7FE',
        dark: '#14183E',
        brand: '#2142B1',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
