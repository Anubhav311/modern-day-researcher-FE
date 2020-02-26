'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { SignInUpFormStyle } from './styles/index'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const signUp = actions.signUp
const signIn = actions.signIn

/**
 * Define component
 */

class SignInUpForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      username: '',
      password: '',
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()

    if (this.props.in_or_up === 'up') {
      this.props.signUp({ email: this.state.email, username: this.state.username, password: this.state.password })
        .then(res => {
          if (this.props.usersReducer.error) {
            this.setState({ email: '', username: '', password: '' })
            document.activeElement.blur()
          } else {
            window.location = '/home'
            this.props.history.push('/home')
          }
        })
    } else {
      this.props.signIn({ username: this.state.username, password: this.state.password })
        .then(res => {
          if (this.props.error) {
            this.setState({ email: '', username: '', password: '' })
            document.activeElement.blur()
          } else {
            window.location = '/home'
            this.props.history.push('/home')
          }
        })
    }
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <SignInUpFormStyle>
        {((this.props.usersReducer.isSigningIn || this.props.usersReducer.isSigningUp || this.props.usersReducer.current_user_token && !this.props.usersReducer.isSigningOut)) ?
          <div>
            <hr/>
            <h2>Success!</h2>
            <Link to="/home" className="btn btn-block btn-success">Get started</Link>
          </div> :

          <div>
            <form className="mb-4" onSubmit={this.handleOnSubmit}>
              {(this.props.usersReducer.error && this.props.usersReducer.error.constructor === String) ?
                <div className="alert alert-danger">Error: Incorrect username or password.</div> : ''}
              {(this.props.usersReducer.error && this.props.usersReducer.error.errno) ?
                <div className="alert alert-danger">Error: User already exists. Try logging in.</div> : ''}

              {(this.props.in_or_up === 'up') ?
              <div className="form-group">
                <label htmlFor="input_email" className="text-primary">Email <span className="text-danger">*</span></label>
                <input id="input_email" type="email" name="email" value={this.state.email} onChange={this.handleOnChange} className="form-control" autoFocus={true} required={true}></input>
              </div> : ''}

              <div className="form-group">
                <label htmlFor="input_username" className="text-primary">Username <span className="text-danger">*</span></label>
                <input id="input_username" type="text" name="username" value={this.state.username} onChange={this.handleOnChange} className="form-control" required={true}></input>
              </div>

              <div className="form-group">
                <label htmlFor="input_password" className="text-primary">Password <span className="text-danger">*</span></label>
                <input id="input_password" type="password" name="password" value={this.state.password} onChange={this.handleOnChange} className="form-control" required={true}></input>
              </div>

              <button type="submit" className="btn btn-block btn-primary">
                {(this.props.in_or_up === 'in') ? 'Sign in' : 'Sign up'}
              </button>
            </form>

            {(this.props.in_or_up === 'up') ?
              <Link to={{ pathname: "/users/signin", state: { fromSignUp: true }}}>I already have an account.</Link>
              : <Link to={{ pathname: "/users/signup", state: { fromSignIn: true }}}>I need an account.</Link>}
          </div>
        }
      </SignInUpFormStyle>
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

export default connect(mapStateToProps, { signUp, signIn })(SignInUpForm)
