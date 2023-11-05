/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: () => ({
        dark: '#d8d8d8',
        lightdark: '#ebebeb',
        naturegreen: '#337402',
        lemon: '#d3e59f',
        leaf: '#FFBE00',
        darkgreen: '#0B472D',
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
