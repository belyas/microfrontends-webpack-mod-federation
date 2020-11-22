const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'productsList',
      filename: 'bundle.js',
      exposes: {
        './bootstrap': './src/bootstrap'
      }
    }),
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
    }),
  ],
};
