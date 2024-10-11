/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Roboto', 'sans-serif'],
            },
            colors: {
                'color-pallet': {
                    'primary': '#F9F9F9',
                    'secondary': '#F5F5F5',
                    'tertiary': '#E0E0E0',
                    'quaternary': '#BDBDBD',
                    'quinary': '#828282',
                    'senary': '#4F4F4F',
                    'septenary': '#333333',
                    'octonary': '#1A1A1A',
                    'nonary': '#121212',
                    'denary': '#000000',
                },
            },
        },
    },
    plugins: [],
}

