
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Constant with our paths
const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
};

const extractSCSS = new ExtractTextPlugin({
  filename: 'raw-player.min.css',
  allChunks: true,
});

// Webpack configuration
module.exports = {
  entry: [
    path.join(paths.src, 'index.js'),
    path.join(paths.src, 'sass/raw-player.scss'),
  ],
  //entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.dist,
    filename: 'raw-player.min.js'
  },

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
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'sass-loader',
          }]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    extractSCSS,
    new UglifyJsPlugin(),
  ],

  resolve: {
    extensions: ['.js'],
  },
};
