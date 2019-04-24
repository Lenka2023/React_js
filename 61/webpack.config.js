var webpack = require('webpack');
module.exports = {
  entry:"./js/main.js",
  output:{
    path: __dirname + "public/build",
    publicPath:"build/",
   filename: 'bundle.js'
  }
}
