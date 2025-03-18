const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as needed
    ],
    theme: {
        extend: {
            colors: {
                customBlue: '#214a5e',
                customBlueLight1: '#3b6b7a', // Add this line for the first lighter version
                customBlueLight2: '#558b97', // Add this line for the second lighter version
            },
            keyframes: {
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(-5px)' },
                },
                fadeInLeft: {
                    from: { opacity: '0', transform: 'translateX(-100%)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInRight: {
                    from: { opacity: '0', transform: 'translateX(100%)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(100%)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeOut: {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
                fadeOutDown: {
                    from: { opacity: '1', transform: 'translateY(0)' },
                    to: { opacity: '0', transform: 'translateY(100%)' },
                },
                fadeOutLeft: {
                    from: { opacity: '1', transform: 'translateX(0)' },
                    to: { opacity: '0', transform: 'translateX(-100%)' },
                },
                fadeOutRight: {
                    from: { opacity: '1', transform: 'translateX(0)' },
                    to: { opacity: '0', transform: 'translateX(100%)' },
                },
                fadeOutUp: {
                    from: { opacity: '1', transform: 'translateY(0)' },
                    to: { opacity: '0', transform: 'translateY(-100%)' },
                },
                slideInDown: {
                    from: { transform: 'translateY(-100%)' },
                    to: { transform: 'translateY(0)' },
                },
                slideInLeft: {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(0)' },
                },
                slideInRight: {
                    from: { transform: 'translateX(100%)' },
                    to: { transform: 'translateX(0)' },
                },
                slideInUp: {
                    from: { transform: 'translateY(100%)' },
                    to: { transform: 'translateY(0)' },
                },
                slideOutDown: {
                    from: { transform: 'translateY(0)' },
                    to: { transform: 'translateY(100%)' },
                },
                slideOutLeft: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                slideOutRight: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(100%)' },
                },
                slideOutUp: {
                    from: { transform: 'translateY(0)' },
                    to: { transform: 'translateY(-100%)' },
                },
                zoomIn: {
                    from: { transform: 'scale(0)' },
                    to: { transform: 'scale(1)' },
                },
                zoomOut: {
                    from: { transform: 'scale(1)' },
                    to: { transform: 'scale(0)' },
                },
                tada: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
                    '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
                    '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
                },
                spinnerGrow: {
                    '0%': { transform: 'scale(0)' },
                    '50%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' },
                },
                slideDown: {
                    from: { transform: 'translateY(-100%)' },
                    to: { transform: 'translateY(0)' },
                },
                slideLeft: {
                    from: { transform: 'translateX(100%)' },
                    to: { transform: 'translateX(0)' },
                },
                slideRight: {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(0)' },
                },
                slideUp: {
                    from: { transform: 'translateY(100%)' },
                    to: { transform: 'translateY(0)' },
                },
            },
            animation: {
                shake: 'shake 0.5s ease-in-out infinite',
                bounce: 'bounce 1s infinite', // Ensure bounce animation is enabled
                fadeInLeft: 'fadeInLeft 1s ease-in-out',
                fadeInRight: 'fadeInRight 1s ease-in-out',
                fadeInUp: 'fadeInUp 1s ease-in-out',
                fadeOut: 'fadeOut 1s ease-in-out',
                fadeOutDown: 'fadeOutDown 1s ease-in-out',
                fadeOutLeft: 'fadeOutLeft 1s ease-in-out',
                fadeOutRight: 'fadeOutRight 1s ease-in-out',
                fadeOutUp: 'fadeOutUp 1s ease-in-out',
                slideInDown: 'slideInDown 1s ease-in-out',
                slideInLeft: 'slideInLeft 1s ease-in-out',
                slideInRight: 'slideInRight 1s ease-in-out',
                slideInUp: 'slideInUp 1s ease-in-out',
                slideOutDown: 'slideOutDown 1s ease-in-out',
                slideOutLeft: 'slideOutLeft 1s ease-in-out',
                slideOutRight: 'slideOutRight 1s ease-in-out',
                slideOutUp: 'slideOutUp 1s ease-in-out',
                zoomIn: 'zoomIn 1s ease-in-out',
                zoomOut: 'zoomOut 1s ease-in-out',
                tada: 'tada 1s ease-in-out',
                spinnerGrow: 'spinnerGrow 1s infinite ease-in-out',
                slideDown: 'slideDown 1s ease-in-out',
                slideLeft: 'slideLeft 1s ease-in-out',
                slideRight: 'slideRight 1s ease-in-out',
                slideUp: 'slideUp 1s ease-in-out',
            },
        },
    },
    variants: {
        extend: {
            animation: ['hover'], // Ensure hover variant is enabled for animations
        },
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
};