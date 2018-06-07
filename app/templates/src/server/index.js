import config from './config'
import logger from './lib/logger'

const app = require(`./app.${config.env == 'development' ? 'development' : 'production'}.js`).default

export const server = app.listen(config.port, err => {
  if (err) logger.error(err)

  logger.info(`Listening on port ${config.port}`)
})