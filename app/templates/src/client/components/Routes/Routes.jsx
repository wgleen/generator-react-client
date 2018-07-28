import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import history from '../../lib/history'
import routePaths from '../../constants/routes'
import RouteTransitions from '../RouteTransitions/RouteTransitions'
import Todos from '../Todos/Todos'

const Routes = props => {
  return (
    <ConnectedRouter history={history}>
      <RouteTransitions>
        <Route
          exact
          path={routePaths.root.path}
          component={Todos}
        />
      </RouteTransitions>
    </ConnectedRouter>
  )
}

export default Routes