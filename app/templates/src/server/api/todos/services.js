import api from '../../lib/api'

export const create = values =>
  new Promise((resolve, reject) =>
    api
      .post('/todos', values)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  )

export const index = () =>
  new Promise((resolve, reject) =>
    api
      .get('/todos')
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  )