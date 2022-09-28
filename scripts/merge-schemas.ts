import 'graphql-import-node'
import { application } from '../src/graphql'
import { printSchema } from 'graphql'
import fs from 'fs'

fs.writeFileSync('schema.graphql', printSchema(application.schema))