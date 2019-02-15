import React from 'react'
import { Provider } from 'react-redux'
import {
  store
} from '../../lib/store'

const Wrapper = props => (
  <Provider store={store}>
    {props.children}
  </Provider>
)

export default Wrapper