/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px) rotate(0deg)'
                    },
                    '25%': {
                        transform: 'translateY(-15px) rotate(2deg)'
                    },
                    '50%': {
                        transform: 'translateY(-25px) rotate(0deg)'
                    },
                    '75%': {
                        transform: 'translateY(-10px) rotate(-2deg)'
                    },
                },
                'pulse-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)',
                        filter: 'brightness(1)'
                    },
                    '50%': {
                        boxShadow: '0 0 60px rgba(59, 130, 246, 1), 0 0 120px rgba(147, 51, 234, 0.6)',
                        filter: 'brightness(1.3)'
                    },
                },
                'gradient-shift': {
                    '0%': {
                        backgroundPosition: '0% 50%'
                    },
                    '25%': {
                        backgroundPosition: '100% 50%'
                    },
                    '50%': {
                        backgroundPosition: '200% 50%'
                    },
                    '75%': {
                        backgroundPosition: '100% 50%'
                    },
                    '100%': {
                        backgroundPosition: '0% 50%'
                    },
                },
                sparkle: {
                    '0%, 100%': {
                        opacity: '0',
                        transform: 'scale(0) rotate(0deg)'
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'scale(1) rotate(180deg)'
                    },
                },
                rainbow: {
                    '0%': {
                        filter: 'hue-rotate(0deg) saturate(1)'
                    },
                    '25%': {
                        filter: 'hue-rotate(90deg) saturate(1.2)'
                    },
                    '50%': {
                        filter: 'hue-rotate(180deg) saturate(1.5)'
                    },
                    '75%': {
                        filter: 'hue-rotate(270deg) saturate(1.2)'
                    },
                    '100%': {
                        filter: 'hue-rotate(360deg) saturate(1)'
                    },
                },
                glow: {
                    '0%, 100%': {
                        textShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(147, 51, 234, 0.2)'
                    },
                    '50%': {
                        textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(147, 51, 234, 0.4)'
                    },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                gradient: 'gradient-shift 3s ease-in-out infinite',
                sparkle: 'sparkle 2s ease-in-out infinite',
                rainbow: 'rainbow 4s ease-in-out infinite',
                glow: 'glow 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}