'use strict'
import { graphqlHTTP } from 'express-graphql'
import { createApplication } from 'graphql-modules'
import { turtleModule, monkeyModule } from './graphql'

const application = createApplication({
  modules: [
    turtleModule,
    monkeyModule
  ]
})

const gqlServer = graphqlHTTP(async () => {
  return {
    schema: application.schema,
    customExecuteFn: application.createExecution(),
    graphiql: true
  }
})

export default gqlServer
