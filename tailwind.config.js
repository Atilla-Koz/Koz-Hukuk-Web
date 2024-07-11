/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/src/assets/Hero/Build.png')",
      },
      colors: {
        headerTop: '#252B42',
        white: '#FFFFFF',
        title: '#252B42',
        softText: '#737373',
        click: '#23A6F0',
        oldP: '#BDBDBD',
        newP: '#23856D',
      },
    },
  },
  plugins: [],
};
