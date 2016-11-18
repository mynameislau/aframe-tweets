const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname,'/src'),
  entry: {
    app: './js/app.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path:  path.join(__dirname, 'dev'),
    publicPath: '/assets/js/',
  },
  resolve: {
    modules: ['src/js', 'node_modules'],
    extensions: ['.js', '.jsx'],
    // plugins: [new DirectoryNamedWebpackPlugin()]
  },
  devtool: 'inline-sourcemap',
  devServer: {
    contentBase: path.join(__dirname, '/dev'),
    port: '7777',
    inline: true,
    historyApiFallback: true,
    // hot: true,
    host: '0.0.0.0',
    stats: 'minimal'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0'] }
        }],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-0'] }
        }],
      }
    ],
  },
};
