import environments from './environments'

export default {
  ...environments[process.env.ENV]
}