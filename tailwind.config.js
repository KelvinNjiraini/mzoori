/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#008c8e',
                'custom-yellow': '#ffd40e',
            },
        },
    },
    plugins: [],
};
