/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize:{
      xs: ['10px', '18px'],
      sm: ['12px', '18px'],
      footer: ['14px', '22px'],
      base: ['16px', '22px'],
      lg: ['30px', '34px'],
      xl: ['60px', '66px'],
    },
    colors:{
      white: ['#FFFFFF'],
      purple: ['#8D4ED8'],
      red: ['#FF6A60'],
      lpurple: ['#F3EDFB'],
      noir: ['#0A0909'],
    },
    width:{
      'imgCard': '306px',
      'icon': '44px',
      'social': '34px',
      'logo': '150px',
    },
    height:{
      'social': "33px",
    }
  },
  plugins: [],
}
