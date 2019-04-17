import config from '../../config'
import environments from './environments'

const {
  env,
  paths
} = config

export default {
  ...environments[config.env],
  env,
  paths
}
