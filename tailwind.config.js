/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // or 'media' or 'selector'
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6', // blue-500
                secondary: '#64748b', // slate-500
                dark: {
                    bg: '#0f172a', // slate-900
                    surface: '#1e293b', // slate-800
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
