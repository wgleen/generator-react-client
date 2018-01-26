import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory } from 'react-router'
import reducers from '../reducers'

const middlewares = applyMiddleware(thunk, multi, promise)

export const store = createStore(
  reducers,
  process.env.ENV == 'development' ? composeWithDevTools(middlewares) : middlewares
)