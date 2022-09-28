'use strict'
import { graphqlHTTP } from 'express-graphql'
import { application } from './graphql'
import { createHive } from '@graphql-hive/client'

const hive = createHive({
  enabled: true,
  debug: true,
  token: process.env.HIVE_TOKEN,
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
    commit: process.env.GIT_SHA || 'N/A'
  }
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
