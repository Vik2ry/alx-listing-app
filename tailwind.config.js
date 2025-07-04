/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#FF5A5F', // Airbnb red
                'secondary': '#008489', // Airbnb teal
            },
            fontFamily: {
                sans: ['var(--font-inter)'], // If using custom fonts
            },
        },
    },
    plugins: [],
};