/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.tsx",
        "./resources/**/*.ts",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors : {
                primary: "#061e36",
            }
        },
    },
    plugins: [],
};
