import { times } from 'lodash'
import { name } from 'faker'

const todo = {
  id: 1,
  title: name.title(),
}

export const todoMock = {
  fetching: false,
  received: true,
  content: todo
}

const todos = times(6, i => ({
  ...todo,
  id: i,
  title: name.title()
}))

export const todosMock = {
  fetching: false,
  received: true,
  content: todos
}