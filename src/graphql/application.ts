import { createApplication } from 'graphql-modules'
import { turtleModule, monkeyModule } from './index'

export const application = createApplication({
  modules: [
    turtleModule,
    monkeyModule
  ]
})