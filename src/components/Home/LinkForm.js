'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { LinkFormStyle } from './styles/index'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const shareLink = actions.shareLink
const getMainLinks = actions.getMainLinks

/**
 * Define component
 */

class LinkForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      title: '',
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()

    this.props.shareLink({
      url: this.state.url,
      title: this.state.title,
      created_by: this.props.usersReducer.current_user_id,
      shared_with: this.props.usersReducer.current_user_id,
    }).then(() => {
      document.activeElement.blur()
      this.setState({ url: '', title: '' })
      this.props.getMainLinks(this.props.usersReducer.current_user_id)
    })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <LinkFormStyle>
        <form onSubmit={this.handleOnSubmit}>
          <div className="row">
            <div className="col-9 pr-1">
              <div className="form-group">
                <input type="text" name="title" placeholder="Title"
                       value={this.state.title} onChange={this.handleOnChange}
                       className="form-control form-control-sm"></input>
              </div>
              <div className="form-group mb-0">
                <input type="text" name="url" placeholder="https://google.com"
                       value={this.state.url} onChange={this.handleOnChange}
                       className="form-control form-control-sm" required={true}></input>
              </div>
            </div>
            <div className="col-3 pl-0">
              <button type="submit" className="btn btn-block btn-primary btn__add">Add</button>
            </div>
          </div>
        </form>
      </LinkFormStyle>
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

export default connect(mapStateToProps, { shareLink, getMainLinks })(LinkForm)
