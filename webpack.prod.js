const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = merge(common, {
  devtool:false,
  mode:"production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use:[
          'babel-loader'
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
        test: /\.(png|jpg|svg|gif)/,
        use:[
          "file-loader"
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['./dist']),
    new UglifyJSPlugin()
  ]
});

module.exports = config;