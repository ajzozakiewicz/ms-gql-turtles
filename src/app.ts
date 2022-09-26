'use strict'
const basePath = '/api/v1/brewcity-turtles'
import express from 'express'
import bodyParser from 'body-parser'
import gqlServer from './gql-server'
import { error } from './middleware/error-handling'

const app = express()

// Disable per IRM
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(`${basePath}/health`, (_: any, res: any) => res.json({ success: true }))
app.use(`${basePath}/graphql`, gqlServer)
app.use(error())

export default app
