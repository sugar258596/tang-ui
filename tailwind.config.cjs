/** @type {import('tailwindcss').Config} */
const path = require('path')

module.exports = {
  content: [
    path.resolve(__dirname, './App.uvue'),
    path.resolve(__dirname, './main.uts'),
    path.resolve(__dirname, './index.uts'),
    path.resolve(__dirname, './pages/**/*.{uvue,vue,uts}'),
    path.resolve(__dirname, './components/**/*.{uvue,vue,uts}'),
    path.resolve(__dirname, './composables/**/*.{uvue,vue,uts}'),
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-soft': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '0.65', transform: 'translateY(0)' },
        },
        'notice-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'shake-soft': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-8rpx)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(8rpx)' },
        },
      },
      animation: {
        'fade-in-soft': 'fade-in-soft 0.5s ease forwards',
        'notice-scroll': 'notice-scroll 10s linear infinite',
        'shake-soft': 'shake-soft 0.5s ease-in-out',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}
