export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial'],
      },
      colors: {
        ink: '#111111',
        charcoal: '#181818',
        panel: '#242428',
        gold: '#d0ad61',
        soft: '#f5f1e8'
      },
      boxShadow: {
        glow: '0 0 40px rgba(208, 173, 97, 0.2)'
      }
    },
  },
  plugins: [],
}
