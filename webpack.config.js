const path = require('path');

module.exports = {
  entry: {
    ex1: './src/app/exercicio-01/exercicio-01.js',
    ex2: './src/app/exercicio-02/exercicio-02.js',

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  devServer: {
    static: './src',
    port: 8080,
    open: true
  }
};