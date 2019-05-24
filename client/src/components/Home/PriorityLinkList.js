'use strict'

/**
 * Dependencies
 */

import React from 'react'
const react_redux = require('react-redux')
const material_ui = require('@material-ui/core')
import styles from './styles/index'
const Link = require('./Link')
const actions = require('../../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const LinearProgress = material_ui.LinearProgress
const getPriorityLinks = actions.getPriorityLinks

/**
 * Define component
 */

class PriorityLinkList extends Component {
  componentDidMount() {
    this.props.getPriorityLinks(this.props.usersReducer.current_user_id)
  }

  render() {
    return (
      <styles.PriorityLinkListStyle>
        {(this.props.usersReducer.priority_links.length > 0) ?
          <div className="row">
            <div className="col-12">
              <h4>Priority</h4>

              <hr/>

              {(this.props.usersReducer.isFetchingPriorityLinks) ?
                <LinearProgress /> :
                <ul>
                  {this.props.usersReducer.priority_links.map((link, i) => <Link key={i} {...link} />)}
                </ul>
              }
            </div>
          </div>
          : ''}
      </styles.PriorityLinkListStyle>
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

export default connect(mapStateToProps, { getPriorityLinks })(PriorityLinkList)
