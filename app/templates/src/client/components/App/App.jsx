import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from '../Routes/Routes'

const App = props => (
  <div>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </div>
)

export default App