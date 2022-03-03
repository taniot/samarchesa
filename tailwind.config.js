module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display-bold': ['Montserrat Bold'],
        'display-semibold': ['Montserrat Semibold'],
        'sans-bold': ['Lato Bold'],
      },
      colors: {
        logo: '#919195',
        display: '#c3bca9',
        gray: {
          white: '#efefef',
          light: '#dedede',
          dark: '#313131',
        },
        black: {
          other: '#111111',
          medium: '#1a1a1a',
        },
      },
      keyframes: {
        'mouse-moves': {
          '0%': {
            opacity: 1,
            top: '29%',
          },

          '15%': {
            opacity: 1,
            top: '70%',
          },

          '50%': {
            opacity: 0,
            top: '70%',
          },

          '100%': {
            opacity: 0,
            top: '29%',
          },
        },
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'mouse-moves': 'mouse-moves 1.5s linear infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd':
          ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  plugins: [],
};
