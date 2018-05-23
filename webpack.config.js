const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = env => {

  console.log('Production: ', env.production)

  return {
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
        }
      },
    ]
  },
  performance: {
    hints: false,
  },
  devtool: env.production === "false" ? '' : 'eval-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'DEVELOPMENT_MODE': env.production === "false" ? true : false 
    }),
  ]
}};