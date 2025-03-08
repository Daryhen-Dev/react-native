/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
          primary: '#49129C',
          secondary: {
            DEFAULT: '#B40086',
            100: '#C51297',
            200: '#831266',
          }, 
          tertiary: '#EF2967',
      },
      fontFamily:{
        'play-write': ['PlaywriteITModerna-ExtraLight', 'sans-serif'],
        'play-light': ['PlaywriteITModerna-Light', 'sans-serif'],
        'play-regular': ['PlaywriteITModerna-Regular', 'sans-serif'],
        'play-thin': ['PlaywriteITModerna-Thin', 'sans-serif']
      }
    },
  },
  plugins: [],
}

