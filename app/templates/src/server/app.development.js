import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'
import app from './app'
import webpackConfig from '../../webpack.config.babel.js'
import config from './config'

const compiler = webpack(webpackConfig)
const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    noInfo: true,
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  reload: true
}))
app.use(express.static(config.paths.public))

app.get('/*', (req, res) => {
  res.set('content-type', 'text/html')
  res.write(middleware.fileSystem.readFileSync(`${config.paths.dist}/index.html`))
  res.end()
})

export default app