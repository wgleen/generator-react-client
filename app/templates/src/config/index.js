import path from 'path'
import merge from 'webpack-merge'
import envConfig from './environments'

const root = path.join(__dirname, '../../')
const env = process.env.ENV || 'development'
const config = envConfig[env]

export default merge(config, {
  env,
  nodeEnv: process.env.NODE_ENV || 'development',
  paths: {
    client: `${root}src/client`,
    server: `${root}src/server`,
    public: `${root}public`,
    dist: `${root}dist`,
    assets: `${root}dist/assets`
  }
})
