const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// search .env file, then load all variables as global variables from process.env
// require('dotenv').config();

// rules.loader is applied from last to top
// postcss-loader >> css-loader (css available in js file using require) >> style-loader
// (inject style to header of html file)
// API_URL availble to use in /src
// exclude: /node_modules/ => Babel skips this folder
// devServer: { historyApiFallback: true, },: fallback to index.html when URL is not defined
// publicPath: '/': to fix ROOT/recipe/2 because the bundle.js is at ROOT/bundle.js
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  ],
};
