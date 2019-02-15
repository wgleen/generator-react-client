import React from 'react'
import history from '../../lib/history'
import MuiProvider from '../MuiProvider/MuiProvider'
import Head from '../Head/Head'
import { ConnectedRouter } from 'connected-react-router'
import Routes from '../Routes/Routes'

const App = props => (
  <div>
    <Head />
    <MuiProvider>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiProvider>
  </div>
)

export default App