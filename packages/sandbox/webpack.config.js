const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
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
