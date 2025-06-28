module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-void': '#16151A',
        'liquid-lava': '#F67011',
        'slate-grey': '#262626',
        'glount-lova': '#873800',
        'dusty-grey': '#878787',
        'marigold': '#FFE4D0',
      },
      backgroundImage: {
        'lava-gradient': 'linear-gradient(135deg, #F67011 0%, #873800 100%)',
        'dark-gradient': 'linear-gradient(180deg, #16151A 0%, #262626 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(246, 112, 17, 0.3)',
        'glow-lg': '0 0 30px rgba(246, 112, 17, 0.4)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hover\\:glow:hover': {
          'box-shadow': '0 0 20px rgba(246, 112, 17, 0.3)',
          'transform': 'translateY(-2px)',
          'transition': 'all 0.3s ease',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 