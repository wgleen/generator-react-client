import express from 'express'
import {
  create,
  index
} from './controllers'

const router = express.Router()

router
  .route('/')
    .post(create)
    .get(index)

export default router