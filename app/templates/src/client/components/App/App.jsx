import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import history from '../../lib/history'
import MuiProvider from '../MuiProvider/MuiProvider'
import Head from '../Head/Head'
import Routes from '../Routes/Routes'

const App = () => (
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
