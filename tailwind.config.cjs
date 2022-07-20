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
                '160': '42rem'
            },
            colors:{
                white:  colors.white,
                black: colors.black,
                purple: colors.purple,
                indigo: colors.indigo,
                green: colors.green,
                darkMode: '#202124',
                innerDark: '#191919',
                darkPurple: '#221C35'
            }
        },
    },
    plugins: [],
}