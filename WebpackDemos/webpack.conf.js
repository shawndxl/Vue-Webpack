var Webpack = require('webpack');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: './dist/',
    filename: 'chart.js'
  },

  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    grogress: true,
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=10240' // 直出 limit 10kb
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  plugins: [
    new Webpack.BannerPlugin('@author:http://codepen.io/dongxl/, 头部注释 ') //这是一个数组。。
  ]
}