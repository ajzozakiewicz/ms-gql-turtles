import { Monkey as IMonkey, MonkeySpecies, Resolvers, Scalars, MonkeyMutationResponse } from './../../@types'

class Monkey implements IMonkey {
  id: Scalars['ID']
  species: MonkeySpecies
  constructor(id: Scalars['ID'], species: MonkeySpecies) {
    this.id = id
    this.species = species
  }
}

const monkeys = [
  new Monkey('1', MonkeySpecies.Chimpanzee),
  new Monkey('2', MonkeySpecies.Gorilla),
  new Monkey('3', MonkeySpecies.Chimpanzee)
]

// TODO: What about field level resolvers?
const resolvers: Resolvers = {
  Query: {
    monkeys: (): Monkey[] => monkeys
  },
  Mutation: {
    createMonkey: (_, args): MonkeyMutationResponse => {
      monkeys.push(new Monkey(`${monkeys.length + 1}`, args.species))

      return {
        statusCode: 200,
        message: 'I Like Monkeys!'
      }
    },
    editMonkey: (_, args): MonkeyMutationResponse => {
      const monkeyToEdit = monkeys.findIndex((monkey: Monkey) => monkey.id === args.monkey.id)
      if (monkeyToEdit) {
        delete args.monkey.id
        monkeys[monkeyToEdit] = {
          ...monkeys[monkeyToEdit],
          ...args.monkey
        }
      }

      return {
        statusCode: 200,
        message: 'I Like Monkeys!'
      }
    }
  }
}

export default resolvers
