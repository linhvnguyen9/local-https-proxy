const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'https://192.168.1.109:8090/'
  },
  devServer: {
    https: true,
    host: '192.168.1.109',//your ip address
    port: 8090,
    contentBase: './dist',
    proxy: {
      '/ipfs/*': {
        target: 'http://localhost:8080/'
      }
    }
  }
};