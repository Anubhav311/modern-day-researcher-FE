'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { SignInUpTitle, SignInUpForm } from '../components/SignInUp/index'
import { SignInUpStyle } from './styles/index'

/**
 * Define component
 */

function SignUp(props) {
  return (
    <SignInUpStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            <SignInUpTitle />
            <SignInUpForm {...props} in_or_up='up' />
          </div>
        </div>
      </div>
    </SignInUpStyle>
  )
}

/**
 * Export component
 */

export default SignUp
