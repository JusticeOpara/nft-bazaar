/** @type {import('tailwindcss').Config} */
import 'tailwindcss-image-rendering';
export default {
  content: ["./src/**/*.{html,ts,js,jsx,tsx}"],
  theme: {

    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/nft-background.jpg')",
       
      },
      fontFamily: {
        // font-family: 'pp-telegraf-3', sans-serif;
        'poppins': ['Poppins', 'sans-serif']
      },
     
    },
  },
  variants: { // all the following default to ['responsive']
    imageRendering: ['responsive'],
  },
  plugins: [ ] 
}

