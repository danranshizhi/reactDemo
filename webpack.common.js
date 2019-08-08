const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    filename: 'bundle-[hash].js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示这几个文件得后缀名可以省略不写
    alias: {
      '@src': path.join(__dirname, './src'),
      '@components': path.join(__dirname, './src/components'),
      '@layouts': path.join(__dirname, './src/layouts'),
      '@redux': path.join(__dirname, './src/redux'),
      '@images': path.join(__dirname, './src/static/images')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'个人介绍',
      template: './src/index.html'
    })
  ]
}

module.exports = config;