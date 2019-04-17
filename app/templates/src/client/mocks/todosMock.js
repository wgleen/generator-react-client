import { times } from 'lodash'
import { name } from 'faker'

export const todoMock = {
  id: 1,
  title: name.title()
}

export const todosMock = times(6, i => ({
  ...todoMock,
  id: i,
  title: name.title()
}))
