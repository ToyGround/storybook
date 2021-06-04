const colors = require('tailwindcss/colors');

module.exports = {
  purge   : [],
  darkMode: false, // or 'media' or 'class'
  theme   : {
    extend: {
      colors     : {
        blueGray  : colors.blueGray,
        coolGray  : colors.coolGray,
        lime      : colors.lime,
        teal      : colors.teal,
        cyan      : colors.cyan,
        lightBlue : colors.lightBlue,
        pink      : colors.pink,
        rose      : colors.rose,
        emerald   : colors.emerald,
        mainColor : '#459B77',
        subColor  : '#54B589',
        subBColor : '#5D94EC',
        pointColor: '#EB6564',
        alertColor: '#ED3432',
        textColor : '#11211A',
      },
      borderColor: {
        mainColor : '#459B77',
        subColor  : '#54B589',
        subBColor : '#5D94EC',
        pointColor: '#EB6564',
        alertColor: '#ED3432',
        textColor : '#11211A',
      },
      ringColor  : {
        mainColor : '#459B77',
        subColor  : '#54B589',
        subBColor : '#5D94EC',
        pointColor: '#EB6564',
        alertColor: '#ED3432',
        textColor : '#11211A',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      textColor      : ['responsive', 'hover', 'focus', 'active', 'disabled'],
      opacity        : ['disabled'],
      borderColor    : ['active'],
    }
  },
  plugins : [],
};
