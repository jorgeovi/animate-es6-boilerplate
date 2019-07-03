const path = require('path');
const webpack = require('webpack');
const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');
const distApp = path.join(__dirname, 'dist');
const buildApp = path.join(__dirname, 'build');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackGitHash = require('webpack-git-hash');

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.join(dirApp, 'js/app')
  },
  output: {
    path: buildApp,
    filename: '[name].[githash].js'
  },
  resolve: {
    modules: [
      dirNode,
      dirApp
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackGitHash(),
    new HtmlWebpackPlugin({
      template: path.join(dirApp, 'index.html')
    })
  ],
  devServer: {
    port: 9001,
    contentBase: path.join(__dirname, 'src')
  }
}