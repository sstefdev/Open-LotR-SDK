const path = require("path");

module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "*": path.resolve(__dirname, "./"),
      axios: path.resolve(__dirname, "node_modules/axios"),
    },
    fallback: {
      fs: false,
      os: require.resolve("os-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
