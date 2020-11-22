const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'cart',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './cart': './src/bootstrap'
    //   },
    //   shared: {
    //     react: {
    //       import: "react",
    //       shareKey: "react",
    //       shareScope: "default",
    //       singleton: true,
    //     },
    //     "react-dom": {
    //       singleton: true,
    //     },
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
    }),
  ],
};
