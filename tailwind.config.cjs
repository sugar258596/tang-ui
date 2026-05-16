/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const spacingScale = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  base: "14px",
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
}

const radiusScale = {
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
}

const fontSizeScale = {
  xs: ['12px', '18px'],
  sm: ['14px', '20px'],
  md: ['16px', '24px'],
  lg: ['18px', '26px'],
  xl: ['20px', '28px'],
  '2xl': ['24px', '32px'],
}

module.exports = {
  content: [
    './main.uts',
    './index.uts',
    './pages/**/*.{uvue,vue,uts}',
    './components/**/*.{uvue,vue,uts}',
    './composables/**/*.{uvue,vue,uts}',
  ],
  blocklist: ['static', 'shadow'],
  theme: {
    extend: {
      colors: {
        page: 'var(--tui-page-bg)',
        surface: 'var(--tui-surface)',
        primary: 'var(--tui-text-primary)',
        secondary: 'var(--tui-text-secondary)',
        tertiary: 'var(--tui-text-tertiary)',
        disabled: 'var(--tui-text-disabled)',
        inverse: 'var(--tui-text-inverse)',
        border: 'var(--tui-border)',
        'border-soft': 'var(--tui-border-soft)',
        divider: '#e8e8e8',
        'white-12': 'rgba(255, 255, 255, 0.12)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-24': 'rgba(255, 255, 255, 0.24)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
        'white-80': 'rgba(255, 255, 255, 0.8)',
        'white-90': 'rgba(255, 255, 255, 0.9)',
        'white-92': 'rgba(255, 255, 255, 0.92)',
        'white-95': 'rgba(255, 255, 255, 0.95)',
      },
      spacing: spacingScale,
      fontSize: {
        ...fontSizeScale,
        hero: ['32px', '40px'],
      },
      minHeight: {
        page: '1000px',
      },
      maxHeight: {
        actions: '400px',
      },
      minWidth: {
        badge: '14px',
        theme: '74px',
      },
      width: {
        icon: '24px',
        version: '34px',
      },
      height: {
        full: '100%',
        badge: '14px',
        line: '2px',
      },
      lineHeight: {
        badge: '13px',
      },
      zIndex: {
      },
      borderWidth: {
      },
      borderRadius: {
        ...radiusScale,
        pill: '999px',
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(135deg, var(--tui-page-gradient-start) 0%, var(--tui-page-gradient-end) 100%)',
        'header-overlay': 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      transitionProperty: {
        bg: 'background-color',
      },
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
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(-4px)' },
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
    boxShadow: false,
    transitionProperty: false,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-action-divider': {
          'background-color': '#f5f5f5',
        },
        '.bg-danger': {
          'background-color': '#f56c6c',
        },
        '.shadow-card': {
          'box-shadow': '0 2px 12px 0 var(--tui-shadow-color)',
        },
        '.shadow-tag-active': {
          'box-shadow': '0 2px 6px rgba(var(--active-color-rgb), 0.2)',
        },
        '.scale-soft': {
          transform: 'scale(1.05)',
        },
        '.translate-badge': {
          transform: 'translateX(30%)',
        },
        '.translate-card-active': {
          transform: 'translateY(-1px)',
        },
        '.text-brand': {
          color: '#667eea',
        },
        '.text-title': {
          color: '#323233',
        },
        '.text-desc': {
          color: '#969799',
        },
        '.text-white': {
          color: '#ffffff',
        },
        '.text-indigo': {
          color: '#4f46e5',
        },
        '.transition-bg': {
          'transition-property': 'background-color',
        },
      })
    }),
  ],
}
