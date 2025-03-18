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
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
        bounce: 'bounce 1s infinite', // Ensure bounce animation is enabled
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'], // Ensure hover variant is enabled for animations
    },
  },
  plugins: [],
};