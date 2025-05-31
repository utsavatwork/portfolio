import path from "path";

export default {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
  },
  devServer: {
    static: path.resolve(process.cwd(), "dist"),
    port: 3000, // Runs on localhost:3000
    open: true, // Opens browser automatically
    hot: true, // Enables hot-reloading
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/, // Handle images automatically
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // Saves assets in `dist/images`
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
