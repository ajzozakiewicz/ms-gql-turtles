import { Turtle as ITurtle, Species, Resolvers, TurtleMutationResponse, Scalars } from './../../@types'

class Turtle implements ITurtle {
  id: Scalars['ID']
  species: Species
  constructor(id: Scalars['ID'], species: Species) {
    this.id = id
    this.species = species
  }
}

const turtles = [
  new Turtle('1', Species.Box),
  new Turtle('2', Species.Loggerhead),
  new Turtle('3', Species.Painted)
]

// TODO: What about field level resolvers?
const resolvers: Resolvers = {
  Query: {
    turtles: (): Turtle[] => turtles
  },
  Mutation: {
    createTurtle: (_, args): TurtleMutationResponse => {
      turtles.push(new Turtle(`${turtles.length + 1}`, args.species))

      return {
        statusCode: 200,
        message: 'I Like Turtles!'
      }
    },
    editTurtle: (_, args): TurtleMutationResponse => {
      const turtleToEdit = turtles.findIndex((turtle: Turtle) => turtle.id === args.turtle.id)
      if (turtleToEdit) {
        delete args.turtle.id
        turtles[turtleToEdit] = {
          ...turtles[turtleToEdit],
          ...args.turtle
        }
      }

      return {
        statusCode: 200,
        message: 'I Like Turtles!'
      }
    }
  }
}

export default resolvers
