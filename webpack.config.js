const path = require('path');
const webpack = require('webpack');
const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.join(dirApp, 'js/app')
  },
  resolve: {
    modules: [
      dirNode,
      dirApp
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(dirApp, 'index.html')
    })
  ],
  devServer: {
    port: 9001,
    contentBase: path.join(__dirname, 'src')
  }
}