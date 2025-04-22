// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'soccer-green': '#1d9b55',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }