const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, './demo/demo.js')
  ],
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'demo')
        ]
      }
    ]
  }
};
