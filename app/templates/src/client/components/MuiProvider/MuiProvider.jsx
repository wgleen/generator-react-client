import React from 'react'
import PropTypes from 'prop-types'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

const theme = createMuiTheme({

})

const MuiProvider = (props) => {
  const { children } = props

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

MuiProvider.defaultProps = {
  children: null
}

MuiProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ])
}

export default MuiProvider
