/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D97706", // Amber 600
                secondary: "#92400E", // Amber 800
                accent: "#15803D", // Green 700
                background: "#FFFBEB", // Amber 50
                surface: "#FFFFFF",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
