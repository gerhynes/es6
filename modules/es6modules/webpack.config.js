const webpack = require("webpack");
const path = require("path");
const nodeEnv = process.env.NODE_ENV || "production";
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    filename: "./app.js"
  },
  output: {
    filename: "_build/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    // env plugin
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};
