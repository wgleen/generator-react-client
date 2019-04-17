import cluster from 'cluster'
import os from 'os'
import config from './config'
import logger from './lib/logger'
import app from './app'

if (cluster.isMaster) {
  logger.info(`Master ${process.pid} is running`)

  const numCPUs = os.cpus().length

  for (let i = 0; i < numCPUs; i += 1) cluster.fork()

  cluster.on('exit', (worker) => {
    logger.info(`worker ${worker.process.pid} died`)

    cluster.fork()
  })
} else {
  app.listen(config.port, (err) => {
    if (err) logger.error(err)

    logger.info(`Express server listening on port 3000 as Worker ${cluster.worker.id} running @ process ${cluster.worker.process.pid}!`)
  })
}
