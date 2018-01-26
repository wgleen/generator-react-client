import axios from 'axios'
import config from '../config'

const api = axios.create({
  baseURL: config.api.baseURL,
  timeout: 10000
})

export default api