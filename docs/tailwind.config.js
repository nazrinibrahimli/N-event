/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    [
      './docs/*.html',
  ],

  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'consert': "url('./images/consert-4.jpg')",
      // },
      // colors:{
      //   gradientGray: 'rgb(255,255,255)',
      // }
    },
  },
  plugins: [
    require('tailwindcss-intersect')


  ],
}


// blue: #1d2132