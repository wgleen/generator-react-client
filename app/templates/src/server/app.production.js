import app from './app'
import config from './config'
import preRender from 'prerender-node'
import express from 'express'

app.use(preRender)
app.use(express.static(`${config.paths.dist}`))

app.get('/*', (req, res) => {
  res.sendFile(`${config.paths.dist}/index.html`)
})

export default app