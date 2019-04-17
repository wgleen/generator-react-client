import './initializer'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './lib/store'
import applicationContainer from './container'
import App from './components/App/App'
import './styles/theme/global.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  applicationContainer
)
