import winston, { createLogger } from 'winston'
import morgan from 'morgan'

const level = process.env.LOG_LEVEL || 'debug'

const logger = createLogger({
  transports: [
    new winston.transports.Console({
      level,
      timestamp: () => (new Date()).toISOString()
    })
  ],
  exitOnError: false
})

logger.stream = { write: message => logger.info(message) }

export default morgan('combined', { stream: logger.stream })
