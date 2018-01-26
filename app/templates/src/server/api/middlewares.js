import api from '../lib/api'

export const setAccessToken = (req, res, next) => {
  const token = req.headers.authorization

  if (token)
    api.defaults.headers.common['Authorization'] = token
  else
    delete api.defaults.headers.common['Authorization']

  next()
}