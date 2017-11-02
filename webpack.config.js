var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      Js: path.join(__dirname, "./src/js"),
      Common: path.join(__dirname, "./src/js/common"),
      Style: path.join(__dirname, "./src/style"),
      Tpl: path.join(__dirname, "./src/tpl")
    }
  },
  entry: {
    demo: "./src/js/demo/demo.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "js/[name].js"
  },
  module: {
    rules: [
      //合并js到一个
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "css/[name].css", allChunks: true }),
    new BabiliPlugin()
  ]
};
