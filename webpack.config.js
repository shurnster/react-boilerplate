const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.scss|\.css)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, 
      {
        test: /(\.woff|\.ttf|\.svg|\.eot|\.gif)/,
        use: 'url-loader'
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}