import todosReducer, { INITIAL_STATE } from './todosReducer'
import {
  FETCH_TODO,
  RECEIVE_TODO,
  FETCH_TODOS,
  RECEIVE_TODOS
} from '../constants/actionTypes'
import {
  todosMock,
  todoMock
} from '../mocks/todosMock'

describe('TodosReducer', () => {
  it('should return store with initial state', () => {
    expect(todosReducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  describe('FETCH_TODO', () => {
    it('should return todo store with :received equal to false', () => {
      const action = { type: FETCH_TODO }

      expect(
        todosReducer(undefined, action)
          .todo.received
      ).toBeFalsy()
    })

    describe('when action payload equal to false', () => {
      it('should return todo store with :fetching equal to false', () => {
        const action = {
          type: FETCH_TODO,
          payload: false
        }

        expect(
          todosReducer(undefined, action).todo.fetching
        ).toBeFalsy()
      })
    })

    describe('when action payload equal to true', () => {
      it('should return todo store with :fetching equal to true', () => {
        const action = {
          type: FETCH_TODO,
          payload: true
        }

        expect(
          todosReducer(undefined, action).todo.fetching
        ).toBeTruthy()
      })
    })
  })

  describe('RECEIVE_TODO', () => {
    it('should return todo store with :fetching equal to false', () => {
      const action = { type: RECEIVE_TODO }

      expect(
        todosReducer(undefined, action).todo.fetching
      ).toBeFalsy()
    })

    it('should return todo store with :received equal to true', () => {
      const action = { type: RECEIVE_TODO }

      expect(
        todosReducer(undefined, action).todo.received
      ).toBeTruthy()
    })

    it('should return todo store with :content with todo', () => {
      const action = {
        type: RECEIVE_TODO,
        payload: todoMock
      }

      expect(
        todosReducer(undefined, action).todo.content
      ).toEqual(todoMock)
    })
  })

  describe('FETCH_TODOS', () => {
    it('should return todo store with :received equal to false', () => {
      const action = { type: FETCH_TODOS }

      expect(
        todosReducer(undefined, action)
          .todo.received
      ).toBeFalsy()
    })

    describe('when action payload equal to false', () => {
      it('should return todo store with :fetching equal to false', () => {
        const action = {
          type: FETCH_TODOS,
          payload: false
        }

        expect(
          todosReducer(undefined, action).todos.fetching
        ).toBeFalsy()
      })
    })

    describe('when action payload equal to true', () => {
      it('should return todo store with :fetching equal to true', () => {
        const action = {
          type: FETCH_TODOS,
          payload: true
        }

        expect(
          todosReducer(undefined, action).todos.fetching
        ).toBeTruthy()
      })
    })
  })

  describe('RECEIVE_TODOS', () => {
    it('should return todo store with :fetching equal to false', () => {
      const action = { type: RECEIVE_TODOS }

      expect(
        todosReducer(undefined, action).todos.fetching
      ).toBeFalsy()
    })

    it('should return todo store with :received equal to true', () => {
      const action = { type: RECEIVE_TODOS }

      expect(
        todosReducer(undefined, action).todos.received
      ).toBeTruthy()
    })

    it('should return todo store with :content with todo list', () => {
      const action = {
        type: RECEIVE_TODOS,
        payload: todosMock
      }

      expect(
        todosReducer(undefined, action).todos.content
      ).toEqual(todosMock)
    })
  })
})
