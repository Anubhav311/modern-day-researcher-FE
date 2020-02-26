'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { CategoryFormStyle } from './styles/index'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const getCategories = actions.getCategories
const createCategory = actions.createCategory

/**
 * Define component
 */

class CategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#333333',
      title: '',
      created_by: props.usersReducer.current_user_id
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createCategory(this.state)
      .then(() => {
        document.activeElement.blur()
        this.setState({ color: '#333333', title: '' })
        this.props.getCategories(this.props.usersReducer.current_user_id)
      })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <CategoryFormStyle>
        <form className="form-inline" onSubmit={this.handleOnSubmit}>
          <input type="color" name="color" value={this.state.color} onChange={this.handleOnChange} className="form-control form-control-sm input__color" required={true}></input>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Category" className="form-control form-control-sm input__category" required={true}></input>
          <button type="submit" className="btn btn-sm btn-block btn-light btn__submit">Add</button>
        </form>
      </CategoryFormStyle>
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

export default connect(mapStateToProps, { createCategory, getCategories })(CategoryForm)
