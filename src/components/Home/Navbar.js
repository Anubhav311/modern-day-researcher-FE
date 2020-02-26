'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { NavbarStyle } from './styles/index'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const shareLink = actions.shareLink
const getMainLinks = actions.getMainLinks
const filterBySearch = actions.filterBySearch

/**
 * Define component
 */

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  handleFilterBySearch = (event) => {
    event.preventDefault()
    this.props.filterBySearch(
      this.props.usersReducer.current_user_id,
      this.state.query,
    )
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <NavbarStyle>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">

              <form className="form-inline" onSubmit={this.handleFilterBySearch}>
                <input className="form-control mr-sm-2" type="search" name="query" placeholder="Search" aria-label="Search" value={this.state.query} onChange={this.handleOnChange}></input>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
              </form>

            </div>
          </div>
        </nav>
      </NavbarStyle>
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

export default connect(mapStateToProps, { filterBySearch, getMainLinks })(Navbar)
