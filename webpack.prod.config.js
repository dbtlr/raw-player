
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    filename: 'player.min.js'
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
        test: /\.css$/,
        use: [
          'css-loader',
        ],
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
    new UglifyJsPlugin()
  ],

  resolve: {
    extensions: ['.js'],
  },
};
