import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config = [{
  entry: `${__dirname}/src/js/index.js`,

  output: {
    path: `${__dirname}/public`,
    filename: 'js/1points.js',
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },

},{
  entry: `${__dirname}/src/scss/1points.scss`,

  output: {
    path: `${__dirname}/public`,
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: true,
            minimize: true,
            importLoaders: 2,
          },
        },
        {
          loader: 'sass-loader',
          options: {}
        }
      ]
    },
    {
      test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
      loader: 'url-loader'
    }]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/1points.css",
    }),
  ],
}]

export default config
