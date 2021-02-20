module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
    position: ['absolute'],
  },
  theme: {
    inset: {
      15: '15px',
      25: '25px',
      40: '40px',
      0: '0px'
    },
    fontSize: {
      f11: '0.68rem',
      f12: '0.75rem',
      f13: '0.81rem',
      f20: '1.25rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
        },
      });
    },
  ],
};
