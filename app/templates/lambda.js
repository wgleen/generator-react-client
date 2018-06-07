'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./dist/server/app.production').default
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)