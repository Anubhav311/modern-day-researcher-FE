'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import { CategoryListStyle } from './styles/index'
import Category from './Category'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component

const getCategories = actions.getCategories

/**
 * Define component
 */

class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories(this.props.usersReducer.current_user_id)
  }

  render() {
    return (
      <CategoryListStyle>
        <div className="row">
          <div className="col-12">
            {(this.props.usersReducer.isFetchingCategories) ?
              <LinearProgress /> :
              <ul>
                {this.props.usersReducer.categories.map((category, i) => <Category key={i} {...category} fake_id={i} />)}
              </ul>
            }
          </div>
        </div>
      </CategoryListStyle>
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

export default connect(mapStateToProps, { getCategories })(CategoryList)
