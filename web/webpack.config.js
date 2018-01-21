'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const inputPath = path.resolve(__dirname, './src')
const outputPath = path.resolve(__dirname, './public')
const port = process.env.PORT || 8000

const extractSass = new ExtractTextPlugin({
  filename: 'main.css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: ['babel-polyfill', `${inputPath}/index.jsx`],
  output: {
    path: outputPath,
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    port,
    contentBase: outputPath,
    inline: true,
    historyApiFallback: true,
    open: 'Google Chrome'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }, {
      test: /\.js|.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|gif|jpg|svg)$/,
      use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
    }]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: `${inputPath}/index.html`,
      inject: 'html',
      filename: 'index.html'
    })
  ]
}
