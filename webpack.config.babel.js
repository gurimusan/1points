import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config = {
  mode: process.env.NODE_ENV,

  entry: `${__dirname}/src/index.js`,

  output: {
    path: `${__dirname}/public`,
    filename: 'js/1points.js',
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
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
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg|ico)$/,
        loader: 'url-loader'
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/html/index.html`
    }),
    new CopyWebpackPlugin([{
      from: `${__dirname}/src/img`,
      to: 'img',
    }])
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.output.filename = 'js/1points.[chunkhash].js'
}

export default config
