const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/Gridify',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'Gridify.js',
    libraryTarget: 'umd',
    library: 'reactBootstrapGridify'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
