'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import { MainLinkListStyle } from './styles/index'
import Link from './Link'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component
const getMainLinks = actions.getMainLinks

/**
 * Define component
 */

class MainLinkList extends Component {
  componentDidMount() {
    this.props.getMainLinks(this.props.usersReducer.current_user_id)
  }

  render() {
    return (
      <MainLinkListStyle>
        {(this.props.usersReducer.main_links.length > 0) ?
          <div className="row">
            <div className="col-12">
              <h4>All</h4>

              <hr/>

              {(this.props.usersReducer.isFetchingMainLinks) ?
                <LinearProgress /> :
                <ul>
                  {this.props.usersReducer.main_links.map((link, i) => <Link key={i} {...link} />)}
                </ul>
              }
            </div>
          </div>
          : ''}
      </MainLinkListStyle>
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

export default connect(mapStateToProps, { getMainLinks })(MainLinkList)
