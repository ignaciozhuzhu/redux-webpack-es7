var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './components/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

//API代理地址,私有.
var server = require('./conf.js')

module.exports = {
  entry: [
    /*    'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',*/
    APP_PATH
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.(less|css)$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=50000'
    }],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './build',
    port: 8080,
    stats: { colors: true },

    proxy: {
      '/api': {
        target: server,
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },

}