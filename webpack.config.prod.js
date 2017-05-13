const path = require('path');
const webpack = require('webpack');

const NODE_ENV = 'production';
const EC2_HOST = process.env.EC2_HOST || 'ec2-52-53-231-190.us-west-1.compute.amazonaws.com';
const EC2_PORT = process.env.EC2_PORT || '80';

module.exports = {
  context: __dirname,
  entry: './app/index.jsx',
  output: {
    path: './',
    filename: './app/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /.node$/,
        loader: 'node-loader'
      },
      {
        test: [/.css?$/],
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
        'EC2_HOST': JSON.stringify(EC2_HOST),
        'EC2_PORT': JSON.stringify(EC2_PORT)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
      }
    })
  ]
};