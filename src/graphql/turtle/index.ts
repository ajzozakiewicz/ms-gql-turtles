import typeDefs from './schema.graphql'
import resolvers from './resolvers'
import { createModule } from 'graphql-modules'

export const turtleModule = createModule({
  id: 'turtle-module',
  typeDefs,
  resolvers
})
