/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     // Screen Sizes
     screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      // Portfolio Color Scheme
      colors:{
        bgColor: '#e15554',
        primaryColor: '#4d9de0',
        secColor: '#e1bc29',
        successColor: '#3bb273',
        whiteColor: 'rgb(2555, 255, 255)',
        darkColor: '#333',
      },
      // Background Images
      backgroundImage:{
        "hero-one": "url(./assets/img/hero-one.jpg)",
        "BreakFast": "url(./assets/img/BreakFast.svg)",
        "hero-two": "url(https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209220.jpg?t=st=1715908891~exp=1715912491~hmac=ff30563622c1778dbf4bcbde71e3269d568c7d195dbdf602459bb8fac7240987&w=900)",
        "hero-three": "url(https://img.freepik.com/free-psd/urfa-biber-isolated-transparent-background_191095-27948.jpg?t=st=1715905783~exp=1715909383~hmac=413512850de7c0a68a7b144153b0e5cf6eda84ff067ff1a0105a4ff87ef09200&w=740)",
        "hero-four": "url(https://img.freepik.com/free-photo/close-up-view-delicious-dinner-fried-chicken-dish-with-various-spices-foods-garlics-fallen-oil-bottle-lemon-dried-peppers-mushrooms-kumquats_140725-157903.jpg?t=st=1715906192~exp=1715909792~hmac=e5128c449f3d6d94326d72982fdce0546ce3b99fbb24ecb4bdae9ada316e7360&w=900)"

      }
    },
  },
  plugins: [require("daisyui")],
}

