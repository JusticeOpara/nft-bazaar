/** @type {import('tailwindcss').Config} */
import 'tailwindcss-image-rendering';
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {

    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/nft-background.jpg')",
       
      },
      fontFamily: {
        // font-family: 'pp-telegraf-3', sans-serif;
        'poppins': ['Poppins', 'sans-serif']
      },
      screen: {  
        'small': {'max':'475px' },  // Define your custom breakpoint for 375px and below
      },
    },
  },
  variants: { // all the following default to ['responsive']
    imageRendering: ['responsive'],
  },
  plugins: [ ] 
}

