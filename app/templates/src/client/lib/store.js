import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers'
import history from './history'

const middlewares = applyMiddleware(
  routerMiddleware(history),
  thunk,
  multi,
  promise
)

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(process.env.ENV === 'development' ? composeWithDevTools(middlewares) : middlewares)
)

export default store
