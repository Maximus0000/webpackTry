const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title:"DatascienceBlockly",
        header:"tester2",
        template: "./src/index.html",
        filename:"./index.html",
        inject: "body"
    })
  ],
  mode: "development",
  output:{
      clean: true
  },
//   devServer: {
//     static: {
//         directory: path.join(__dirname, 'dist'),
//       },
//       compress: true,
//       port: 8080
//   }
};