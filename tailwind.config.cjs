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
      'wCard': '298px',
      'wDirection': '17px',
      'container': '1280px',
    },
    height:{
      'social': '33px',
      'hCard': '355px',
      'hDirection': '24px',
    },
    fontFamily:{
      'Poppins': ['Poppins', 'sans-serif'],
    },
    boxShadow:{
      'shadowCard': '2px 8px 30px rgba(37, 33, 32, 0.06)',
    },
    borderRadius:{
      'radiusCard': '20px',
    }
  },
  plugins: [],
}
