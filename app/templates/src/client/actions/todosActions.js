import {
  FETCH_TODOS,
  RECEIVE_TODOS
} from '../constants/actionTypes'
import {
  createTodosResource,
  getTodosResource
} from '../lib/api'

export const fetchTodos = (value = true) => ({
  type: FETCH_TODOS,
  payload: value
})

export const receiveTodos = values => ({
  type: RECEIVE_TODOS,
  payload: values
})

export const getTodos = () => (dispatch) => {
  dispatch(fetchTodos())

  return new Promise((resolve, reject) => getTodosResource()
    .then(res => resolve(dispatch(receiveTodos(res.data))))
    .catch(() => reject(dispatch(fetchTodos(false)))))
}

export const createAndGetTodos = values => dispatch => new Promise((resolve, reject) => {
  createTodosResource(values)
    .then(() => resolve(dispatch(getTodos())))
    .catch(err => reject(err))
})
