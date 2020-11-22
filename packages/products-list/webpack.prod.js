const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'productsList',
      filename: 'bundle.js',
      exposes: {
        './bootstrap': './src/bootstrap'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: resolve('public', 'index.html'),
    }),
  ],
};
