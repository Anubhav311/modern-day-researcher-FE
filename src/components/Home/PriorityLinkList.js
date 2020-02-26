'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import { PriorityLinkListStyle } from './styles/index'
import Link from './Link'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const getPriorityLinks = actions.getPriorityLinks

/**
 * Define component
 */

class PriorityLinkList extends Component {
  componentDidMount() {
    this.props.getPriorityLinks(this.props.usersReducer.current_user_id)
  }

  render() {
    console.log("this.props.usersReducer.priority_links", this.props.usersReducer.priority_links)
    return (
      <PriorityLinkListStyle>
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
      </PriorityLinkListStyle>
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
