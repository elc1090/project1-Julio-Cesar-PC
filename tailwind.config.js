/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
        "./public/**/*.{html,css,js}",
        "./views/*.ejs",
            ],
    theme: { 
      extend: {
        colors: {
            primary: "#ACC12F",
            secondary: "#96A13A",
            tertiary: "#D3DBC6",
            quaternary: "#575C55",
            quinary: "#45425A",
            primaryHover: "#A1B135",

        },
    },
    },
    plugins: [
        require("tw-elements/dist/plugin"),
    ],
}