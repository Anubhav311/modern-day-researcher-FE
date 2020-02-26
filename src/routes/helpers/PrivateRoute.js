'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, exact: is_exact, path }) => {
  let token = localStorage.getItem("token")

  if (is_exact) {
    return (
      <Route exact path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/users/signup" />} />
    )
  } else {
    return (
      <Route path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/users/signup" />} />
    )
  }
}

/**
 * Export route component
 */

export default PrivateRoute
