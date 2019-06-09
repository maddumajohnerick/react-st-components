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
    path: path.resolve(__dirname, 'docs'),
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
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ]
};