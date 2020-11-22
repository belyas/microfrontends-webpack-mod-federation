const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
    }),
  ],
};
