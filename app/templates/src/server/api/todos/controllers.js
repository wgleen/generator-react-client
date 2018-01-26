import {
  create as createTodo,
  index as indexTodo
} from './services'

export const create = (req, res) => {
  const { title } = req.body

  createTodo({ title })
    .then(data =>
      res.json({
          data,
          messages: 'Create Todo with success'
        })
    )
    .catch(err =>
      res
        .status(400)
        .json({ errors: err })
    )
}

export const index = (req, res) => {
  indexTodo()
    .then(data =>
      res.json({ data })
    )
    .catch(err =>
      res
        .status(400)
        .json({ errors: err })
    )
}