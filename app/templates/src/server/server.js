import config from './config'
import logger from './lib/logger'
import app from './app'

const server = app.listen(config.port, (err) => {
  if (err) logger.error(err)

  logger.info(`Listening on port ${config.port}`)
})

export default server
