export default {
  darkMode: 'class',
  important: 'html',
  content: [
    'index.html',
    './src/App.tsx',
    './src/components/**/*.{tsx,jsx,js,css,html}',
    './src/routes/**/*.{tsx,jsx,js,css,html}',
    './src/pages/**/components/**/*.{tsx,jsx,js,css,html}',
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm': '1312px', // Custom screen size 1
        'custom-md': '1530px', // Custom screen size 2
        'custom-lg': '1588px', // Custom screen size 3
      },
      fontSize: {
        '2xl': ['1.5rem', '2rem'], // Adjust line-height if needed
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
      },
      container: {
        center: true,
        screens: {
          lg: '1296px', // Set custom max-width for large screens
        },
      },
    },
  },
  plugins: [],
};
