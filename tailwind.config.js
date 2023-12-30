/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: () => ({
        dark: '#1a1a1a',
        lightdark: '#ebebeb',
        naturegreen: '#5d712f',
        lemon: '#c5ee4f',
        leaf: '#FFBE00',
        darkgreen: '#2e4303',
      }),
      fontFamily: {
        'ui-sans':
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans- serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        sohne: 'Sohne, sans-serif',
      },
    },
  },
  plugins: [],
};
