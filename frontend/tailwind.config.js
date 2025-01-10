const { default: daisyui } = require('daisyui');

// tailwind.config.js
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,svg}',
    './src/**/*.svg',
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#570df8',
          secondary: '#f000b8',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      'light', // Default light theme
      'dark', // Default dark theme
    ],
  },
  theme: {
    extend: {
      extend: {
        spacing: {
          'btn-lg': '3rem', // Example: Custom height/width
        },
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'red-hat-text': ['Red Hat Text', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        commissioner: ['Commissioner', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        'dm-serif-display': ['DM Serif Display', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      keyframes: {
        comeIn: {
          '0%': { opacity: '0', transform: 'translateX(-200vw)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        comeOut: {
          '0%': { opacity: '1', zIndex: '10', transform: 'scale(1.1)' },
          '10%': { transform: 'scale(1.5)' },
          '20%': { zIndex: '-10', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'translateX(-150vw)' },
        },
        walk: {
          '0%': {
            transform: 'translateX(-6.25rem)', // 6.25rem = 100px
            opacity: '0',
          },
          '50%': {
            transform: 'translateX(6.25rem)',
            opacity: '0.2',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        // comeIn1: {
        //   '0%': {
        //     transform: 'translateX(20rem)',
        //     opacity: '0',
        //   },
        //   '100%': {
        //     transform: 'translateX(0)',
        //     opacity: '1',
        //   },
        // },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-in-out',
          },
          '25%': {
            transform: 'translateY(-20%)',
            'animation-timing-function': 'ease-in',
          },
          '50%': {
            transform: 'translateY(10%)',
            'animation-timing-function': 'ease-out',
          },
          '75%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'ease-in-out',
          },
        },
        bounceCombo: {
          '0%': {
            transform: 'translate(-3.125rem, -50%) scale(0.8)', // 3.125rem = 50px
            opacity: '0',
          },
          '50%': {
            transform: 'translate(0, 50%) scale(1.5)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
            zIndex: '50',
          },
          '100%': {
            opacity: '0',
            zIndex: '0',
          },
        },
      },
      animation: {
        comeIn: 'comeIn .5s forwards',
        fadeOut: 'fadeOut .5s forwards',
        comeOut: 'comeOut 1s forwards',
        walk: 'walk 2s backwards',
        bounce: 'bounce 3.6s forwards',
        bounceCombo: 'bounceCombo 3.5s forwards',
      },
      colors: {
        'desaturated-dark-cyan-bg': 'var(--desaturated-dark-cyan)',
        'light-grayish-cyan': 'var(--light-grayish-cyan)',
        'light-grayish-cyan-filter-tables':
          'var(--light-grayish-cyan-filter-tables)',
        'dark-grayish-cyan': 'var(--dark-grayish-cyan)',
        'very-dark-grayish-cyan': 'var(--very-dark-grayish-cyan)',
        border: {
          'light-grayish-blue': 'var(--light-grayish-blue)',
          'grayish-blue': 'var(--grayish-blue)',
          'ticket-border-gradient': 'var(--ticket-gradient)',
        },
      },
      translate: {
        1.0625: '17rem',
        // 1.375: '22rem',
        // 1.25: '10rem',
        1.375: '25rem',
      },
      maxWidth: {
        'container-100': '6.25rem',
        'container-200': '12.5rem',
        'container-300': '18.75rem',
        'container-400': '25rem',
        'container-500': '31.25rem',
        'container-600': '37.5rem',
        'container-700': '43.75rem',
        'container-800': '50rem',
        'container-900': '56.25rem',
        'container-1000': '62.5rem',
        'container-1100': '68.75rem',
        'container-1200': '75rem',
        'container-1300': '81.25rem',
        'container-1400': '87.5rem',
        'container-1500': '93.75rem',
      },
      minWidth: {
        'container-100': '6.25rem', // 100px
        'container-200': '12.5rem', // 200px
        'container-300': '18.75rem', // 300px
        'container-400': '25rem', // 400px
        'container-500': '31.25rem', // 500px
        'container-600': '37.5rem', // 600px
        'container-700': '43.75rem', // 700px
        'container-800': '50rem', // 800px
        'container-900': '56.25rem', // 900px
        'container-1000': '62.5rem', // 1000px
        'container-1100': '68.75rem', // 1100px
        'container-1200': '75rem', // 1200px
        'container-1300': '81.25rem', // 1300px
        'container-1400': '87.5rem', // 1400px
        'container-1500': '93.75rem', // 1500px
      },
      width: {
        '1W': '0.0039rem', // 1px
        '1.6W': '0.0625rem', // 1px
        '8W': '0.3125rem', // 5px
        '16W': '1rem', // 16px
        '24W': '1.5rem', // 24px
        '28-8W': '1.8rem', // 28.8px
        '32W': '2rem', // 32px
        '48W': '3rem', // 48px
        '64W': '4rem', // 64px
        '80W': '5rem', // 80px
        '96W': '6rem', // 96px
        '112W': '7rem', // 112px
        '128W': '8rem', // 128px
        '144W': '9rem', // 144px
        '160W': '10rem', // 160px
        '200W': '12.5rem', // 200px
        '208W': '13rem', // 208px
        '256W': '16rem', // 256px
        '272W': '17rem', // 272px
        '288W': '18rem', // 288px
        '300W': '18.75rem', // 300px
        '316W': '19.75rem', // 316px
        '400W': '25rem', // 400px
        '464W': '29rem', // 464px
        '600W': '37.5rem', // 600px
        '736W': '46rem', // 736px
        '800W': '50rem', // 800px
        '936W': '58.5rem', // 936px
        logo: '7.8125rem', // 125px
        how: '11.375rem', // 182px
        btn: '35%', // no conversion needed
      },
      maxHeight: {
        'container-100': '6.25rem',
        'container-200': '12.5rem',
        'container-300': '18.75rem',
        'container-400': '25rem',
        'container-500': '31.25rem',
        'container-600': '37.5rem',
        'container-700': '43.75rem',
        'container-800': '50rem',
        'container-900': '56.25rem',
        'container-1000': '62.5rem',
        'container-1100': '68.75rem',
        'container-1200': '75rem',
        'container-1300': '81.25rem',
        'container-1400': '87.5rem',
        'container-1500': '93.75rem',
      },
      height: {
        '1.6H': '0.0625rem',
        '2H': '0.125rem',
        '8H': '0.3125rem',
        '16H': '1rem',
        '24H': '1.5rem',
        '32H': '2rem',
        '33.6H': '2.1rem',
        '40H': '2.5rem',
        '48H': '3rem',
        '56H': '3.5rem',
        '64H': '4rem',
        '1-6H': '0.0625rem',
        '24H': '1.5rem',
        '28-8H': '1.8rem',
        '73.6H': '4.6rem',
        '80H': '5rem',
        '96H': '6rem',
        '100H': '6.25rem',
        '112H': '7rem',
        '128H': '8rem',
        '144H': '9rem',
        '160H': '10rem',
        '200H': '12.5rem',
        '208H': '13rem',
        '256H': '16rem',
        '272H': '17rem',
        '288H': '18rem',
        '300H': '18.75rem',
        '304H': '19rem',
        '316H': '19.75rem',
        '320H': '20rem',
        '400H': '25rem',
        '464H': '29rem',
        '500H': '31.25rem',
        '564H': '35.25rem',
        '600H': '37.5rem',
        '800H': '50rem',
      },
      screens: {
        '3xs': '0px',
        '2xs': '23.75rem', // 380px
        custom: '26.875rem', // 430px
        xs: '30rem', // 480px
        sm: '40rem', // 640px
        md: '48rem', // 768px
        lg: '64rem', // 1024px
        xl: '80rem', // 1280px
        '2xl': '96rem', // 1536px
      },
      fontSize: {
        '2xs': 'var(--font-size-2xs)',
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        md: 'var(--font-size-md)',
        'md-1': 'var(--font-size-md-1)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '2-2xl': 'var(--font-size-2-2xl)',
        '2-4xl': 'var(--font-size-2-4xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '4-5xl': 'var(--font-size-4-5xl)',
      },
      margin: {
        socialM: '-4rem',
        '1.6M': '0.1rem',
        '4M': '0.25rem',
        '8M': '0.5rem',
        '10M': '0.625rem',
        '12M': '0.75rem',
        '16M': '1rem',
        '28.8M': '1.8rem',
        '32M': '2rem',
        '1.2M': '1.2rem',
        '48M': '3rem',
        '64M': '4rem',
        '96M': '6rem',
        '108M': '6.75',
        '128M': '8rem',
        '144M': '9rem',
        '160M': '10rem',
      },
      inset: {
        '16negI': '-1rem',
        '1.12I': '0.07rem',
        '1.6I': '0.1rem',
        '2.4I': '0.15rem',
        '4I': '0.25rem',
        '8I': '0.5rem',
        '10I': '0.625rem',
        '12.8I': '0.8rem',
        '16I': '1rem',
        '19.2I': '1.2rem',
        '24I': '1.5rem',
        '26I': '1.625rem',
        '28I': '1.75rem',
        '28.8I': '1.8rem',
        '32I': '2rem',
        '48I': '3rem',
        '60.8I': '3.8rem',
        '64I': '4rem',
        '68.8I': '4.3rem',
        '80I': '5rem',
        '83-2I': '5.2rem',
        '86.4I': '5.4rem',
        '96I': '6rem',
        '105.6I': '6.6rem',
        '112I': '7rem',
        '116.8I': '7.3rem',
        '124.8I': '7.8rem',
        '128I': '8rem',
        '136.8I': '8.55rem',
        '140I': '8.75rem',
        '146.4I': '9.15rem',
        '152.8I': '9.55rem',
        '160I': '10rem',
        '176I': '11rem',
        '182.4I': '11.4rem',
        '192I': '12rem',
        '200I': '12.5rem',
        '208I': '13rem',
        '224I': '14rem',
        '240I': '15rem',
        '243.2I': '15.2rem',
        '256I': '16rem',
        '280I': '17.5rem',
        '300I': '18.75rem',
        '304I': '19rem',
        '320I': '20rem',
        '352I': '22rem',
        '400I': '25rem',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg,hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
        'ticket-border-gradient': 'var(--ticket-gradient)',
      },
      padding: {
        '1.2P': '1.2rem',
        '1.6P': '0.1rem',
        '3.2P': '0.2rem',
        '4P': '0.25rem',
        '6P': '0.375rem',
        '8P': '0.5rem',
        '10P': '0.625rem',
        '12P': '0.75rem',
        '16P': '1rem',
        '22.4P': '1.4rem',
        '24P': '1.5rem',
        '28P': '1.75rem',
        '28.8P': '1.8rem',
        '32P': '2rem',
        '48P': '3rem',
        '56P': '3.5rem',
        '64P': '4rem',
        '80P': '5rem',
        '96P': '6rem',
        '112P': '7rem',
        '128P': '8rem',
      },
      borderRadius: {
        '5BR': '0.3125rem', // 5px to rem
        '10BR': '0.625rem', // 10px to rem
        '20BR': '1.25rem', // 20px to rem
        '30BR': '1.875rem', // 30px to rem
        '40BR': '2.5rem', // 40px to rem
        '50BR': '3.125rem', // 50px to rem
        '80BR': '5rem', // 80px to rem
        '100BR': '6.25rem', // 100px to rem
        '150BR': '9.375rem', // 150px to rem
      },
      borderWidth: {
        '1BW': '0.0625rem', // 1px to rem
        '2BW': '0.125rem', // 2px to rem
        '3BW': '0.1875rem', // 3px to rem
        '4BW': '0.25rem', // 4px to rem
        '5BW': '0.3125rem', // 5px to rem
      },
      boxShadow: {
        'custom-light':
          '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.06)', // 1px to rem
        'custom-medium':
          '0 0.25rem 0.375rem rgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem rgba(0, 0, 0, 0.06)', // 4px to rem
        'custom-dark':
          '0 0.625rem 0.9375rem rgba(0, 0, 0, 0.2), 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)', // 10px to rem
        'custom-xl':
          '0 1.25rem 1.5625rem rgba(0, 0, 0, 0.25), 0 0.625rem 0.625rem rgba(0, 0, 0, 0.22)', // 20px to rem
        'custom-dark-cyan':
          '0 0.1875rem 0.0625rem rgba(0, 100, 0, 0.9), 0 0.25rem 0.375rem rgba(38, 186, 164, 0.9)', // 3px to rem
        'custom-dark-light-blue':
          '0 0.1875rem 0.0625rem rgba(80, 70, 100, 0.9), 0 0.25rem 0.375rem rgba(97, 115, 255, 0.9)', // 3px to rem
        'centered-black-soft':
          '0 0 0.3125rem 0.0625rem rgba(0, 0, 0, 0.3), 0 0 0.625rem 0.1875rem rgba(0, 0, 0, 0.2)', // 5px to rem
        'centered-black-strong':
          '0 0 0.9375rem 0.3125rem rgba(0, 0, 0, 0.7), 0 0 1.875rem 0.625rem rgba(0, 0, 0, 0.5)', // 15px to rem
      },
      userSelect: {
        none: 'none',
      },
      letterSpacing: {
        0.2: '0.2rem',
        0.3: '0.3rem',
        0.4: '0.4rem',
      },
      lineHeight: {
        '3xs-tight': '.8',
        '2xs-tight': '1',
        'xs-tight': '1.2',
        'extra-loose': '2.5',
        xxl: '3',
      },
      zIndex: {
        5: '5',
        60: '60',
        100: '100',
      },
    },
  },
  plugins: [require('daisyui')],
};
