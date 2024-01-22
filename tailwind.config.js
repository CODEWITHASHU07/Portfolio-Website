/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor:'#0EA5E9',
        secondColor:'#081B28',
      },
      fontFamily: {
        custom: ['montserrat'],
      },
    },
  },
  plugins: [],
}

