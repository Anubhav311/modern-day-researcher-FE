'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { connect } from 'react-redux'
import { LinkStyle } from './styles/index'
import CategoryIndicator from './CategoryIndicator'
// import SimpleDialog from './SimpleDialog'
import actions from '../../store/actions/index'

/**
 * Constants
 */

const Component = React.Component

const toggleLinkPriority = actions.toggleLinkPriority
const completeLink = actions.completeLink
const getPriorityLinks = actions.getPriorityLinks
const getMainLinks = actions.getMainLinks
const deleteLink = actions.deleteLink
const updateLink = actions.updateLink
const addCategoryToLink = actions.addCategoryToLink
const shareLinkWithOthers = actions.shareLinkWithOthers

/**
 * Define component
 */

class Link extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_modal_open: false,
      link_id: props.link_id,
      shared_by: props.shared_by,
      shared_with: props.shared_with,
      title: props.title,
      url: props.url,
      isPriority: props.isPriority,
      categories: props.categories,
      user_id: props.usersReducer.current_user_id,
    }
  }

  handleCompleteLink = (event) => {
    this.props.completeLink(this.state.user_id, this.state.link_id)
      .then(() => {
        document.activeElement.blur()
        this.props.getPriorityLinks(this.props.usersReducer.current_user_id)
        this.props.getMainLinks(this.props.usersReducer.current_user_id)
      })
  }

  handleToggleLinkPriority = (event) => {
    this.props.toggleLinkPriority(this.state.user_id, this.state.link_id)
      .then(() => {
        document.activeElement.blur()
        this.props.getPriorityLinks(this.props.usersReducer.current_user_id)
        this.props.getMainLinks(this.props.usersReducer.current_user_id)
      })
  }

  handleDeleteLink = () => {
    let yes = window.confirm("Are you sure?")

    if (yes) {
      this.props.deleteLink(
        this.state.user_id,
        this.state.link_id,
      )
      .then(() => {
        this.props.getPriorityLinks(this.props.usersReducer.current_user_id)
        this.props.getMainLinks(this.props.usersReducer.current_user_id)
      })
    }
  }

  handleEditLinkTitle = () => {
    let title = prompt("New Link Title")

    if (title) {
      this.props.updateLink(
        this.state.user_id,
        this.state.link_id,
        title,
      )
      .then(() => {
        this.props.getPriorityLinks(this.props.usersReducer.current_user_id)
        this.props.getMainLinks(this.props.usersReducer.current_user_id)
      })
    }
  }

  handleAddCategoryToLink = () => {
    this.props.addCategoryToLink(
      this.state.user_id,
      this.state.link_id,
      7
    )
    .then(() => {
      this.props.getPriorityLinks(this.props.usersReducer.current_user_id)
      this.props.getMainLinks(this.props.usersReducer.current_user_id)
    })
  }

  handleShareLinkWithOthers = () => {
    let email = prompt("Share link with this user (Email)")

    if (email) {
      this.props.shareLinkWithOthers(
        this.state.user_id,
        this.state.link_id,
        email
      )
    }
  }

  // handleClose = value => {
  //   this.setState({ is_modal_open: false })
  // }

  render() {
    return (
      <LinkStyle>
        <div className="row">
          <div className="col-12 col-lg-2 col-xl-1 d-flex">
            <svg onClick={this.handleCompleteLink} className="control control__completed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>

            <svg onClick={this.handleToggleLinkPriority} className="control control__priority" style={(this.props.is_pinned === 1) ? { fill: 'red' } : { fill: '#AAA' }}
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>

            <svg onClick={this.handleShareLinkWithOthers} className="control control__share" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
          </div>

          <div className="col-10 col-lg-9 col-xl-10">
            <a href={this.props.url} target="_blank" className="a__link">
              <div>
                <p className="text__title">
                  <b>{this.props.title}</b>
                  <svg className="glyph__open" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                </p>
                <span className="text__link">{this.props.url}</span>
              </div>
            </a>

            <ul className="list__categories">
              {this.props.categories && this.props.categories.map((category, i) => <span key={i} className="glyph__circle" style={{ backgroundColor: category.category_color }}></span>)}
            </ul>
          </div>

          <div className="col-2 col-lg-1 col-xl-1">
            <span className="btn__control" onClick={this.handleEditLinkTitle}>edit</span>
            <span className="btn__control" onClick={this.handleDeleteLink}>x</span>
          </div>
        </div>
      </LinkStyle>
    )
  }
}
// <button onClick={this.handleAddCategoryToLink}>Add Category</button>
// <SimpleDialog open={this.state.is_modal_open} onClose={this.handleClose} />

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return state
}

/**
 * Export component
 */

export default connect(mapStateToProps, {
  toggleLinkPriority,
  completeLink,
  getPriorityLinks,
  getMainLinks,
  deleteLink,
  updateLink,
  addCategoryToLink,
  shareLinkWithOthers,
})(Link)
