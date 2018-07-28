import React from 'react'
import { AnimatedSwitch } from 'react-router-transition'
import './routeTransitions.scss'

const RouteTransitions = props => {
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

export default RouteTransitions