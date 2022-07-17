/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {TW: " 'Titillium Web', sans-serif "},
            height: {
                '128': '32rem',
                '160': '38rem'
            },
            colors:{
                black: colors.black,
                darkMode: '#202124',
                innerDark: '#191919',
            }
        },
    },
    plugins: [],
}