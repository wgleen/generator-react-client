import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from './index'

export const development = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    `${config.paths.client}/index.js`
  ],
  output: {
    filename: '[name].js',
    publicPath: config.cdnUrl,
    path: config.paths.dist
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('development'),
      ENV: config.env,
      DEBUG: true
    }),
    new HtmlWebpackPlugin({
      template: `${config.paths.client}/index.html`,
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

export const production = {
  entry: [
    `${config.paths.client}/index.js`
  ],
  output: {
    path: config.paths.assets,
    publicPath: config.cdnUrl,
    filename: '[name].[chunkHash].js',
    sourceMapFilename: '[name].[chunkHash].map'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                importLoaders: 1
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production'),
      ENV: config.env,
      DEBUG: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true
      }
    }),
    new HtmlWebpackPlugin({
      template:  `${config.paths.client}/index.html`,
      filename: 'index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
    new ExtractTextPlugin('[name].[chunkHash].css')
  ]
}