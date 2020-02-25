import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { } from '../todos/TodoLoader'

import TodoType from '../todos/TodoType';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
    todos: {
      type: GraphQLList(TodoType),
      resolve: () => 5,
    },
  }),
});

/*

export default new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
    todos: {
      type: GraphQLList(TodoType),
    },
  },
});


type User {
  id: ID! @id
  username: String!
  email: String! @unique
  password: String!
  todos: [Todo!]!
}
*/