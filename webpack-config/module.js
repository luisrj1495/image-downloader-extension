module.exports = () => {
  return {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader", // Or use: ["ts-loader"]
        exclude: /node_modules/,
      },
    ],
  };
};
