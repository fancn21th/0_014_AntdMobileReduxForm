import path from 'path';

export default {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/,
          include: __dirname,
        }
    ],
  },
  resolve: {
      modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
      extensions: ['', '.web.js', '.jsx', '.js', '.json'],
  },
};
