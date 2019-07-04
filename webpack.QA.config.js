const path = require('path');
const webpack = require('webpack');
const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');
const distApp = path.join(__dirname, 'dist');
const buildApp = path.join(__dirname, 'build');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackGitHash = require('webpack-git-hash');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ArchivePlugin = require('webpack-archive-plugin');

module.exports = {
  mode: 'development',
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
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    }),
    new CleanWebpackPlugin(),
    new WebpackGitHash(),
    new HtmlWebpackPlugin({
      template: path.join(dirApp, 'index.html')
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.js', to: 'index.js' },
      { context: 'src/images/', from: '**/*', to: 'images' },
      { context: 'src/sounds/', from: '**/*', to: 'sounds' },
      { context: 'src/css/', from: '**/*.css', to: 'css' }
    ]),
    new ArchivePlugin({format: 'zip', output: __dirname + '/dist/'+ require("./package.json").name + '_QA_' + require("./package.json").version})
  ],
  devServer: {
    port: 9001,
    contentBase: path.join(__dirname, 'src')
  }
}