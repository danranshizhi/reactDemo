const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['babel-polyfill','./src/index.js'],
  // output: {
  //   filename: 'bundle-[hash].js',
  //   path: path.join(__dirname, 'dist')
  // },
  output: {
    filename: 'bundle-[hash].js',
    path: path.join(__dirname, 'build')
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
    new HtmlWebpackPlugin({
      title:'个人介绍',
      template: './src/index.html'
    })
  ]
}

module.exports = config;