import React from 'react'
import MuiProvider from '../MuiProvider/MuiProvider'
import Head from '../Head/Head'
import Routes from '../Routes/Routes'

const App = props => (
  <div>
    <Head />
    <MuiProvider>
      <Routes />
    </MuiProvider>
  </div>
)

export default App