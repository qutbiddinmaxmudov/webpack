import HTMLWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

export default {
  entry: {
    main: path.resolve(__dirname, "./app/src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "./app/dist/"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["awesome-typescript-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "Webpack App",
      template: path.resolve(__dirname, "./app/src/template.html"),
      filename: "index.html",
    }),
  ],
};
