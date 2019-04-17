import React from 'react'
import PropTypes from 'prop-types'

const DefaultLayout = (props) => {
  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}

DefaultLayout.defaultProps = {
  children: null
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ])
}

export default DefaultLayout
