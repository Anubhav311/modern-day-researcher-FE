'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { CategoryStyle } from './styles/index'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const getCategories = actions.getCategories
const filterByCategory = actions.filterByCategory
const deleteCategory = actions.deleteCategory

/**
 * Define component
 */

class Category extends Component {
  handleDeleteCategory = () => {
    let yes = window.confirm("Are you sure?")

    if (yes) {
      this.props.deleteCategory(
        this.props.usersReducer.current_user_id,
        this.props.id,
      )
      .then(() => {
        this.props.getCategories(this.props.usersReducer.current_user_id)
      })
    }
  }

  handleFilterByCategory = (event) => {
    event.preventDefault()
    // this.props.filterByCategory(
    //   this.props.usersReducer.current_user_id,
    //   this.props.id,
    // )
  }

  render() {
    return (
      <CategoryStyle>
        <div className="row">
          <div className="col-10 col__category" onClick={this.handleFilterByCategory}>
            <span className="glyph__circle" style={{ backgroundColor: this.props.color }}></span>
            <span className="text__category">{this.props.title}</span>
          </div>

          <div className="col-2">
            <span className="btn__delete" onClick={this.handleDeleteCategory}>x</span>
          </div>
        </div>
      </CategoryStyle>
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

export default connect(mapStateToProps, { getCategories, filterByCategory, deleteCategory })(Category)
