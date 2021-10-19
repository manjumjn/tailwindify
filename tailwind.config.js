module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
         '34r': '34rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
