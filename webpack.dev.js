//开发环境
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

const config = merge(common, {
  devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  mode:"development",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;