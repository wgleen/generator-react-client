import axios from 'axios'
import config from '../config'
import { todosMock } from '../mocks/todosMock'

const api = axios.create({
  baseURL: config.api.baseURL,
  timeout: 10000
})

const generateShowResource = (resource, mock) => {
  if (process.env.ENV === 'test') {
    return () => ({
      then: ((callback) => {
        callback({
          data: mock
        })

        return ({ catch: () => null })
      })
    })
  } return resource()
}

const generateCreateResource = (resource, mock, data) => {
  if (process.env.ENV === 'test') {
    mock.push({
      id: mock.length + 1,
      ...data
    })

    return () => ({
      then: ((callback) => {
        callback({ data })

        return ({ catch: () => null })
      })
    })
  } return resource()
}

export const createTodosResource = data => generateCreateResource(
  () => api.post('todos', data),
  todosMock, data
)(data)

export const getTodosResource = generateShowResource(() => () => api.get('todos'), todosMock)

export default api
