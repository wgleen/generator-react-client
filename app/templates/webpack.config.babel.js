import merge from 'webpack-merge'
import config from './src/config'
import {
  development,
  production
} from './src/config/webpackEnv'

const envConfig = config.env.match(/development|test/) ? development : production

export default merge({}, envConfig, {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        loaders: 'file-loader'
      }
    ]
  }
})