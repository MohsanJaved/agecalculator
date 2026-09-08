/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        calcNavy: {
          DEFAULT: '#084d8c',
          dark: '#003366',
          light: '#0b5da8',
          subtle: '#e9eff5'
        },
        calcGreen: {
          DEFAULT: '#4a8505',
          hover: '#3e7004',
          light: '#eef8e8',
          border: '#b8e2a3'
        },
        calcBlue: {
          DEFAULT: '#085494',
          hover: '#064375',
          light: '#eaf3fb'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
