const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: 'productsList',
      filename: 'bundle.js',
      exposes: {
        './bootstrap': './src/bootstrap'
      },
      shared: {
        react: {
          import: "react",
          shareKey: "react",
          shareScope: "default",
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
