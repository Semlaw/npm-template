const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const pkg = require('./package.json')

module.exports.umdConfigDev = {
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'npmTemplate',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        loader:'babel-loader'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(pkg.version),
    }),
  ],
}

module.exports.umdConfigPro = merge(module.exports.umdConfigDev, {
  mode: 'production'
})