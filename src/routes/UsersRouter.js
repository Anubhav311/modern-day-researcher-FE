'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { SignIn, SignUp } from '../views/index'

/**
 * Define router
 */

function UsersRouter({ mount }) {
  return (
    <>
      <Route path={`${mount}/signin`} render={(props) => <SignIn {...props} />} />
      <Route path={`${mount}/signup`} render={(props) => <SignUp {...props} />} />
      <Route path={`${mount}/login`} render={() => <Redirect to="/users/signin" />} />
      <Route path={`${mount}/register`} render={() => <Redirect to="/users/signup" />} />
    </>
  )
}

/**
 * Export router
 */

export default UsersRouter
