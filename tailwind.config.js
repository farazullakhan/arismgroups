/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-ink': '#000d10',
        'pure-white': '#ffffff',
        'cool-ash': '#8e8e95',
        pebble: '#d5d3d4',
        'midnight-hull': '#0f0f1c',
        'charcoal-deck': '#151623',
        'clay-ember': '#bc7155',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
