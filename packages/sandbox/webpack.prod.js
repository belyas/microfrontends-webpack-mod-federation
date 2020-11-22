const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: 'sandbox',
      remotes: {
        products: 'productsList@http://localhost:3001/bundle.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
    }),
  ],
};
