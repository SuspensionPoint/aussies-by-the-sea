const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.join(__dirname, './src/assets'),
      },
    },
    plugins: [
      // Copy the images folder and optimize all the images
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets' },
        ],
      }),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    ],
  },
};
