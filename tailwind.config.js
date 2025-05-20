// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        // you can also add 'serif' or 'mono' variants if desired
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light --default', 'dark --prefersdark', 'cupcake', 'dracula'],
    darkTheme: 'dark',
  },
}
