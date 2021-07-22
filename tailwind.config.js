module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        lilac: {
          logo: "#3060AD",
          light: "#476FB1"
        },
      },
      colors:{
        lilac: {
          logo: "#3060AD",
          light: "#476FB1"
        }
      }
    },
    animation: {
      bounce200: 'bounce 1s infinite 200ms',
      bounce400: 'bounce 1s infinite 400ms',
  },
  },
  variants: {
    extend: {
      opacity:['disabled']
    },
  },
  plugins: [],
}
