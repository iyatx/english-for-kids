const path = require(`path`);
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/assets/scss/global.scss',
      },
    },
  ],
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces')
    }
  },
};