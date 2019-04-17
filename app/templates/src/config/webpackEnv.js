import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import config from './index'

export const development = {
  mode: 'development',
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
        oneOf: [
          {
            test: /\.s?css$/,
            resourceQuery: /^\?global$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  importLoaders: 1
                }
              }
            ]
          },
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
  mode: 'production',
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
        oneOf: [
          {
            test: /\.s?css$/,
            resourceQuery: /^\?global$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  importLoaders: 1
                }
              }
            ]
          },
          {
            test: /\.s?css$/,
            use: [
              MiniCssExtractPlugin.loader,
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
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production'),
      ENV: config.env,
      DEBUG: false
    }),
    new HtmlWebpackPlugin({
      template: `${config.paths.client}/index.html`,
      filename: 'index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]
}
