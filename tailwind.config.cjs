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
      numPagination:['24px', '18px'],
      h4degrade:['24px', '28px'],
      lg: ['30px', '34px'],
      xl: ['60px', '66px'],
    },
    colors:{
      white: ['#FFFFFF'],
      purple: ['#8D4ED8'],
      coral: ['#FF6A60'],
      red: ['#FC1616'],
      lpurple: ['#F3EDFB'],
      noir: ['#0A0909'],
      cyan: ['#80D4F8'],
      grey:['rgba(0, 0, 0, 0.5)'],
    },
    width:{
      'imgCard': '306px',
      'icon': '44px',
      'social': '34px',
      'logo': '150px',
      'wCard': '298px',
      'wDirection': '17px',
      'container': '1280px',
      'wBoxCta': "844px",
      'wCircle': '36px',
      'r-imgcard': '341px',

    },
    height:{
      'social': '33px',
      'hCard': '355px',
      'hDirection': '24px',
      'hButton': '56px',
      'hBoxCta': '256px',
      'hCircle': '36px',
      'h-r-BoxCta': '300px',
      'hr-card': '190px',
    },
    fontFamily:{
      'Poppins': ['Poppins', 'sans-serif'],
    },
    boxShadow:{
      'shadowCard': '2px 8px 30px rgba(37, 33, 32, 0.06)',
    },
    borderRadius:{
      'radiusCard': '20px',
      'radiusButton': '30px',
      'radiusFull': '100%',
    }
  },
  plugins: [],
}
