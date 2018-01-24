
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.dist,
    filename: 'player.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
    new ExtractTextPlugin('player.css'),
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },
};
