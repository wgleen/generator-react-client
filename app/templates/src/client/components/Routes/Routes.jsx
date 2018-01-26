import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import routePaths from '../../constants/routes'
import DefaultLayout from '../Layouts/DefaultLayout'
import Todos from '../Todos/Todos'

const Routes = props => {
  return (
    <Router>
      <DefaultLayout>
        <Route
          exact
          path={routePaths.root.path}
          component={Todos}
        />
      </DefaultLayout>
    </Router>
  )
}

export default Routes