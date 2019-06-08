const  path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', './src/docs.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'docs.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          plugins: ['transform-class-properties']
        }
      },
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ]
};