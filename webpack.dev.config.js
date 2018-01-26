
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  src: path.resolve(__dirname, 'src'),
  demo: path.resolve(__dirname, 'demo'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.src, 'index.js'),

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.demo, 'index.html'),
    }),
    new ExtractTextPlugin('raw-player.css'),
  ],

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },
};
