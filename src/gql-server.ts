'use strict'
import { graphqlHTTP } from 'express-graphql'
import { createApplication } from 'graphql-modules'
import { turtleModule, monkeyModule } from './graphql'
import { createHive } from '@graphql-hive/client'
import getHiveToken from './get-hive-token'

const hive = createHive({
  enabled: true,
  debug: true,
  token: getHiveToken(),
  usage: {
    clientInfo: (context) => {
      if (context.headers['user-agent'].includes('insomnia')) {
        return {
          name: 'insomnia',
          version: '0'
        }
      }

      return {
        name: 'unknown',
        version: 'unknown'
      }
    }
  },
  reporting: {
    author: 'AJ Zozakiewicz',
    serviceName: 'ms-gql-turtles',
    commit: 'test'
  }
})

const application = createApplication({
  modules: [
    turtleModule,
    monkeyModule
  ]
})

const schema = application.schema
const execute = application.createExecution()

hive.reportSchema({ schema })

const gqlServer = graphqlHTTP({
    schema,
    customExecuteFn: async (args) => {
      const finish = hive.collectUsage(args)
      const result = await execute(args)
      finish(result)
      return result
    },
    graphiql: true
})

export default gqlServer
