var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');  //加载webpack依赖包

module.exports = {
  devtool: 'eval-source-map',
  entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'src/index.jsx')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css?$/,
        loader: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 9000,
    contentBase: './src',
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:9000' }),
    new webpack.HotModuleReplacementPlugin()
  ],
}
