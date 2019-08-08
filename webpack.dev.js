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
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use:[
          'babel-loader'
          // 'eslint-loader'   代码风格检查
        ]
      },{
        test: /\.(sass|scss|css)/,
        use: [
        "style-loader",
        "css-loader",
        "resolve-url-loader",
        "sass-loader?sourceMap"
        ]
      },{
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },{
        test: /\.(png|jpg|svg|gif)/,
        use:[
          "file-loader"
        ]
      },{
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: "fonts/",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;