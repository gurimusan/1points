import webpack from 'webpack'

const config = [{
  entry: `${__dirname}/src/index.js`,

  output: {
    path: `${__dirname}/public/js`,
    filename: '1points.js',
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
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: 'url-loader'
      }
    ],
  },
}]

export default config
