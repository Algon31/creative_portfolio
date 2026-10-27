/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#B75A48',
        light: '#E8ECD6',
        dark: '#000000',
      },
      fontFamily: {
        display: ['Unbounded', 'Epilogue', 'sans-serif'],
        sans: ['Epilogue', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
