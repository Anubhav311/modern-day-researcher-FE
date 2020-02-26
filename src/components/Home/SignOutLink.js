'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { Link, Router } from 'react-router-dom'
import { SignOutLinkStyle } from './styles/index'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const signOut = actions.signOut

/**
 * Define component
 */

class SignOutLink extends Component {
  handleSignOut = (event) => {
    this.props.signOut()
  }

  render() {
    return (
      <SignOutLinkStyle>
        <Link to="/users/signin" onClick={this.handleSignOut}>Sign out</Link>
      </SignOutLinkStyle>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return state
}

/**
 * Export component
 */

export default connect(null, { signOut })(SignOutLink)
