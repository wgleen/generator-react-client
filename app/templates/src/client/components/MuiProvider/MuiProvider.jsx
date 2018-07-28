import React from 'react'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

const theme = createMuiTheme({

})

const MuiProvider = props => {
  const { children } = props

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default MuiProvider