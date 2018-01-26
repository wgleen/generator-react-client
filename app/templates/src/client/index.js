import './initializer'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  store
} from './lib/store'
import App from './components/App/App'
import './styles/theme/global.scss'

export const applicationContainer = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>
  , applicationContainer
)