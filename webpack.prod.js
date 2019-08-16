const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const config = merge(common, {
  devtool:false,
  mode:"production",
  // output: {
  //   filename: 'bundle-[hash].js',
  //   path: path.join(__dirname, 'bulid')
  // },
  plugins:[
    new CleanWebpackPlugin(['./dist']),
    new UglifyJSPlugin()
  ]
});

module.exports = config;