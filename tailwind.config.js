export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: '#214a5e',
        customBlueLight1: '#3b6b7a', // Add this line for the first lighter version
        customBlueLight2: '#558b97', // Add this line for the second lighter version
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};