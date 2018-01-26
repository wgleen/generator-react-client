import {
  FETCH_TODOS,
  RECEIVE_TODOS
} from '../constants/actionTypes'
import {
  createTodosResource,
  getTodosResource
} from '../lib/api'

const fetchTodos = (value = true) => ({
  type: FETCH_TODOS,
  payload: value
})

const receiveTodos = values => ({
  type: RECEIVE_TODOS,
  payload: values
})

export const createAndGetTodos = values => {
  return dispatch => {
    createTodosResource(values)
      .then(res =>
        dispatch(getTodos())
      )
  }
}

export const getTodos = values => {
  return dispatch => {
    dispatch(fetchTodos())

    getTodosResource()
      .then(res =>
        dispatch(receiveTodos(res.data.data))
      )
      .catch(err =>
        dispatch(fetchTodos(false))
      )
  }
}