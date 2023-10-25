module.exports = {
  resolve: {
    extensions: ['.ts'],
  },
  mode: 'production',
  entry: './main.ts',
  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
