const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
    }),
  ],
};
