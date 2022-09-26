'use strict'
import 'graphql-import-node'
import app from './app'
const https = require('https')
const http = require('http')
const config = require('config')

let httpListenerPort = 8080
let httpsListenerPort = 8443

const httpServer = http.createServer(app).listen(httpListenerPort, () => {
  console.log('app is listening at localhost:' + httpListenerPort)
})

const httpsServer = https.createServer(app).listen(httpsListenerPort, () => {
  console.log('app is listening at localhost:' + httpsListenerPort)
})

process.on('SIGTERM', () => {
  httpServer.close(() => {
    console.log('SIGTERM issued...app is shutting down')
    process.exit(0)
  })
  httpsServer.close(() => {
    console.log('SIGTERM issued...app is shutting down')
    process.exit(0)
  })
})
