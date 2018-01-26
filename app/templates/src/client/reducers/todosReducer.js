import {
  FETCH_TODO,
  RECEIVE_TODO,
  FETCH_TODOS,
  RECEIVE_TODOS
} from '../constants/actionTypes'
import { merge } from 'lodash'
import {
  todoMock,
  todosMock
} from '../mocks/todosMock'

const INITIAL_STATE = {
  todo: {
    fetching: false,
    received: false,
    content: {
      id: '',
      title: ''
    },
    //...todoMock
  },
  todos: {
    fetching: false,
    received: false,
    content: [],
    //...todosMock
  }
}

let newState

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODO:
      newState = merge({}, state, {
        todo: {
          fetching: action.payload,
          received: false
        }
      })

      newState.todo.content = INITIAL_STATE.todo.content

      return newState

    case RECEIVE_TODO:
      return merge({}, state, {
        todo: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    case FETCH_TODOS:
      newState = merge({}, state, {
        todos: {
          fetching: action.payload,
          received: false
        }
      })

      newState.todos.content = INITIAL_STATE.todos.content

      return newState

    case RECEIVE_TODOS:
      return merge({}, state, {
        todos: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    default:
      return state
  }
}