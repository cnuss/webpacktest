const path = require("path");
const webpack = require("webpack");

// eslint-disable-next-line no-undef
module.exports = {
  // CLI Bundling
  target: "node",

  // bundling mode
  mode: "production",

  // entry files
  entry: "./src/main.ts",

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  devtool: "source-map",
};
