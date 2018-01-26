import axios from 'axios'
import config from '../config'

const api = axios.create({
  baseURL: config.api.baseURL,
  timeout: 10000
})

export const createTodosResource = values =>
  api.post('todos', values)

export const getTodosResource = () =>
  api.get('todos')

export default api