import express from 'express'
import { setAccessToken } from './middlewares'
import {
  index,
  notFound
} from './controllers'
import todosRoutes from './todos/routes'

const router = express.Router()

router.all('/', index)
router.use(setAccessToken)
router.use('/todos', todosRoutes)
router.all('/*', notFound)

export default router