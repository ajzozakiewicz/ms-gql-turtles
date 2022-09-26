import typeDefs from './schema.graphql'
import resolvers from './resolvers'
import { createModule } from 'graphql-modules'

export const monkeyModule = createModule({
  id: 'monkey-module',
  typeDefs,
  resolvers
})
