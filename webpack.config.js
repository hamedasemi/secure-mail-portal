const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}


