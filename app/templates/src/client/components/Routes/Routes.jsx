import React from 'react'
import { Route } from 'react-router-dom'
import routePaths from '../../constants/routes'
import RouteTransitions from '../RouteTransitions/RouteTransitions'
import Todos from '../Todos/Todos'

const Routes = () => (
  <RouteTransitions>
    <Route
      exact
      path={routePaths.root.path}
      component={Todos}
    />
  </RouteTransitions>
)

export default Routes
