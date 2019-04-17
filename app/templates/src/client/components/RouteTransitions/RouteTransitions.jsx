import React from 'react'
import PropTypes from 'prop-types'
import { AnimatedSwitch } from 'react-router-transition'
import './routeTransitions.scss'

const RouteTransitions = (props) => {
  const { children } = props

  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className='route-wrapper'
    >
      {children}
    </AnimatedSwitch>
  )
}

RouteTransitions.defaultProps = {
  children: null
}

RouteTransitions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ])
}

export default RouteTransitions
