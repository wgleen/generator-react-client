import { name } from 'faker'
import store from '../lib/store'
import {
  FETCH_TODOS,
  RECEIVE_TODOS
} from '../constants/actionTypes'
import {
  fetchTodos,
  receiveTodos,
  getTodos,
  createAndGetTodos
} from './todosActions'
import { todosMock } from '../mocks/todosMock'

describe('todosActions', () => {
  describe('fetchTodos', () => {
    it('should return an object with :type and :payload properties', () => {
      const result = fetchTodos()

      chaiExpect(result).to.have.property('type', FETCH_TODOS)
      chaiExpect(result).to.have.property('payload')
    })

    describe('when argument passed is undefined', () => {
      it('should return an object with :payload properties equal to true', () => {
        expect(fetchTodos()).toEqual({
          type: FETCH_TODOS,
          payload: true
        })
      })
    })

    describe('when argument passed is true', () => {
      it('should return an object with :payload properties equal to true', () => {
        expect(fetchTodos(true)).toEqual({
          type: FETCH_TODOS,
          payload: true
        })
      })
    })

    describe('when argument passed is false', () => {
      it('should return an object with :payload properties equal to false', () => {
        expect(fetchTodos(false)).toEqual({
          type: FETCH_TODOS,
          payload: false
        })
      })
    })
  })

  describe('receiveTodos', () => {
    it('should return an object with :type and :payload properties', () => {
      const result = receiveTodos()

      chaiExpect(result).to.have.property('type', RECEIVE_TODOS)
      chaiExpect(result).to.have.property('payload')
    })

    it('should return an object with :payload properties equal to the passed argument', () => {
      const result = receiveTodos()

      chaiExpect(result).to.have.property('type', RECEIVE_TODOS)
      chaiExpect(result).to.have.property('payload')
    })
  })

  describe('getTodos', () => {
    it('should return an object with :type and :payload properties', async () => {
      const result = await store.dispatch(getTodos())

      chaiExpect(result).to.have.property('type', RECEIVE_TODOS)
      chaiExpect(result).to.have.property('payload')
    })

    it('should return an object with :payload properties equal to the todos list', async () => {
      const result = await store.dispatch(getTodos())

      chaiExpect(result).to.have.property('type', RECEIVE_TODOS)
      chaiExpect(result).to.have.property('payload', todosMock)
    })
  })

  describe('createAndGetTodos', () => {
    it('should return an object with :type and :payload properties', async () => {
      const result = await store.dispatch(createAndGetTodos({}))

      chaiExpect(result).to.have.property('type', RECEIVE_TODOS)
      chaiExpect(result).to.have.property('payload')
    })

    it('should create a new todo, add todo list and return an object with :payload properties equal to todo list with todo created', async () => {
      const _todosMock = [...todosMock]
      const todo = {
        id: _todosMock.length + 1,
        title: name.title()
      }

      _todosMock.push(todo)

      const result = await store.dispatch(createAndGetTodos(todo))

      chaiExpect(result).to.have.property('type', RECEIVE_TODOS)
      expect(result.payload).toEqual(_todosMock)
    })
  })
})
