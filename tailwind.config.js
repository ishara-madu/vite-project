/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: 'selector',
  theme: {
    extend: {
      keyframes: {
        rightSlide: {
          '0%': { transform: 'translateX(0)', opacity: 1, visibility: 'visible' },
          '30%': { transform: 'translateX(100%)', opacity: 0, visibility: 'hidden' },
          '60%': { transform: 'translateX(-100%)', opacity: 0, visibility: 'hidden' },
          '100%': { transform: 'translateX(0)', opacity: 1, visibility: 'visible' },
        },
        leftSlide: {
          '0%': { transform: 'translateX(0)', opacity: 1, visibility: 'visible' },
          '30%': { transform: 'translateX(-100%)', opacity: 0, visibility: 'hidden' },
          '60%': { transform: 'translateX(100%)', opacity: 0, visibility: 'hidden' },
          '100%': { transform: 'translateX(0)', opacity: 1, visibility: 'visible' },
        },
      },
        animation: {
          rightSlide: 'rightSlide 1.3s ease-in-out',
          leftSlide: 'leftSlide 1.3s ease-in-out',
        },
    },
  },
  plugins: [],
}

