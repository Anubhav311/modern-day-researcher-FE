'use strict'

/**
 * Dependencies
 */

import actions from '../actions/index'

/**
 * Constants
 */

const initialState = {
  isSigningIn: false,
  isSigningUp: false,
  isSigningOut: false,
  isFetchingPriorityLinks: false,
  isFetchingMainLinks: false,
  isFetchingCategories: false,
  isDeletingCategory: false,
  isSharingLink: false,
  isCreatingCategory: false,
  isCompletingLink: false,
  isDeletingLink: false,
  isFilteringBySearch: false,
  isSettingLinkPriority: false,
  isFilteringByCategory: false,
  isUpdatingLinkTitle: false,
  isAddingCategoryToLink: false,
  current_user_id: (localStorage.getItem('user_id') || null),
  current_user_email: (localStorage.getItem('user_email') || null),
  current_user_username: (localStorage.getItem('user_username') || null),
  current_user_is_private: (localStorage.getItem('user_is_private') || null),
  current_user_token: (localStorage.getItem('token') || null),
  categories: [],
  priority_links: [],
  main_links: [],
  error: null
}

/**
 * Define reducer
 */

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGNUP_START:
      return Object.assign({}, state, {
        isSigningUp: true,
        error: ''
      })
    case actions.SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user_id', action.payload.user.id)
      localStorage.setItem('user_email', action.payload.user.email)
      localStorage.setItem('user_username', action.payload.user.username)
      localStorage.setItem('user_is_private', action.payload.user.is_private)
      console.log('actions.SIGNUP_SUCCESS')
      return Object.assign({}, state, {
        isSigningUp: false,
        current_user_id: action.payload.user.id,
        current_user_email: action.payload.user.email,
        current_user_username: action.payload.user.username,
        current_user_is_private: action.payload.user.is_private,
        current_user_token: action.payload.current_user_token,
        error: ''
      })
    case actions.SIGNUP_ERROR:
      return Object.assign({}, state, {
        isSigningUp: false,
        error: action.payload
      })
    case actions.SIGNIN_START:
      return Object.assign({}, state, {
        isSigningIn: true,
        error: ''
      })
    case actions.SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user_id', action.payload.user.id)
      localStorage.setItem('user_email', action.payload.user.email)
      localStorage.setItem('user_username', action.payload.user.username)
      localStorage.setItem('user_is_private', action.payload.user.is_private)
      console.log('actions.SIGNIN_SUCCESS')
      return Object.assign({}, state, {
        isSigningIn: false,
        current_user_id: action.payload.user.id,
        current_user_email: action.payload.user.email,
        current_user_username: action.payload.user.username,
        current_user_is_private: action.payload.user.is_private,
        current_user_token: action.payload.current_user_token,
        current_user_token: action.payload.token,
        error: ''
      })
    case actions.SIGNIN_ERROR:
      return Object.assign({}, state, {
        isSigningIn: false,
        error: action.payload
      })
    case actions.SIGNOUT_START:
      localStorage.clear()
      return Object.assign({}, state, {
        isSigningOut: true,
        error: action.payload
      })
    case actions.SIGNOUT_SUCCESS:
      return Object.assign({}, state, {
        isSigningOut: false,
        error: action.payload
      })
    case actions.FETCH_PRIORITY_LINKS_START:
      return Object.assign({}, state, {
        isFetchingPriorityLinks: true,
        error: ''
      })
    case actions.FETCH_PRIORITY_LINKS_SUCCESS:
      let priority_links = {}

      action.payload.forEach(link => {
        priority_links[link.link_id] = (priority_links[link.link_id] || {})
        priority_links[link.link_id].categories = (priority_links[link.link_id].categories || [])

        priority_links[link.link_id] = {
          link_id: link.link_id,
          is_pinned: link.is_pinned,
          read: link.read,
          shared_by: link.shared_by,
          shared_with: link.shared_with,
          title: link.title,
          url: link.url,
          categories: priority_links[link.link_id].categories.concat({
            category_color: link.category_color,
            category_title: link.category_title,
            category_id: link.category_id,
          })
        }
      })

      let new_priority_links = Object.keys(priority_links).map(key => {
        return priority_links[key]
      })

      return Object.assign({}, state, {
        isFetchingPriorityLinks: false,
        priority_links: new_priority_links,
        error: ''
      })
    case actions.FETCH_PRIORITY_LINKS_ERROR:
      return Object.assign({}, state, {
        isFetchingPriorityLinks: false,
        error: action.payload
      })
    case actions.FETCH_MAIN_LINKS_START:
      return Object.assign({}, state, {
        isFetchingMainLinks: true,
        error: ''
      })
    case actions.FETCH_MAIN_LINKS_SUCCESS:
      let main_links = {}

      action.payload.forEach(link => {
        main_links[link.link_id] = (main_links[link.link_id] || {})
        main_links[link.link_id].categories = (main_links[link.link_id].categories || [])

        main_links[link.link_id] = {
          link_id: link.link_id,
          is_pinned: link.is_pinned,
          read: link.read,
          shared_by: link.shared_by,
          shared_with: link.shared_with,
          title: link.title,
          url: link.url,
          categories: main_links[link.link_id].categories.concat({
            category_color: link.category_color,
            category_title: link.category_title,
            category_id: link.category_id,
          })
        }
      })

      let new_main_links = Object.keys(main_links).map(key => {
        return main_links[key]
      })

      return Object.assign({}, state, {
        isFetchingMainLinks: false,
        main_links: new_main_links,
        error: ''
      })
    case actions.FETCH_MAIN_LINKS_ERROR:
      return Object.assign({}, state, {
        isFetchingMainLinks: false,
        error: action.payload
      })
    case actions.FETCH_CATEGORIES_START:
      return Object.assign({}, state, {
        isFetchingCategories: true,
        error: ''
      })
    case actions.FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        categories: action.payload,
        isFetchingCategories: false,
        error: ''
      })
    case actions.FETCH_CATEGORIES_ERROR:
      return Object.assign({}, state, {
        isFetchingCategories: false,
        error: action.payload
      })
    case actions.CREATE_CATEGORY_START:
      return Object.assign({}, state, {
        isCreatingCategory: true,
        error: ''
      })
    case actions.CREATE_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isCreatingCategory: false,
        error: ''
      })
    case actions.CREATE_CATEGORY_ERROR:
      return Object.assign({}, state, {
        isCreatingCategory: false,
        error: action.payload
      })
    case actions.DELETE_CATEGORY_START:
      return Object.assign({}, state, {
        isDeletingCategory: true,
        error: ''
      })
    case actions.DELETE_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isDeletingCategory: false,
        error: ''
      })
    case actions.DELETE_CATEGORY_ERROR:
      return Object.assign({}, state, {
        isDeletingCategory: false,
        error: action.payload
      })
    case actions.COMPLETE_LINK_START:
      return Object.assign({}, state, {
        isCompletingLink: true,
        error: ''
      })
    case actions.COMPLETE_LINK_SUCCESS:
      return Object.assign({}, state, {
        isCompletingLink: false,
        error: ''
      })
    case actions.COMPLETE_LINK_ERROR:
      return Object.assign({}, state, {
        isCompletingLink: false,
        error: action.payload
      })
    case actions.DELETE_LINK_START:
      return Object.assign({}, state, {
        isDeletingLink: true,
        error: ''
      })
    case actions.DELETE_LINK_SUCCESS:
      return Object.assign({}, state, {
        isDeletingLink: false,
        error: ''
      })
    case actions.DELETE_LINK_ERROR:
      return Object.assign({}, state, {
        isDeletingLink: false,
        error: action.payload
      })
    case actions.TOGGLE_LINK_PRIORITY_START:
      return Object.assign({}, state, {
        isSettingLinkPriority: true,
        error: ''
      })
    case actions.TOGGLE_LINK_PRIORITY_SUCCESS:
      return Object.assign({}, state, {
        isSettingLinkPriority: false,
        error: ''
      })
    case actions.TOGGLE_LINK_PRIORITY_ERROR:
      return Object.assign({}, state, {
        isSettingLinkPriority: false,
        error: action.payload
      })
    case actions.FILTER_BY_CATEGORY_START:
      return Object.assign({}, state, {
        isFilteringByCategory: true,
        error: ''
      })
    case actions.FILTER_BY_CATEGORY_SUCCESS:
      let filtered = {}

      action.payload.forEach(link => {
        filtered[link.link_id] = (filtered[link.link_id] || {})
        filtered[link.link_id].categories = (filtered[link.link_id].categories || [])

        filtered[link.link_id] = {
          link_id: link.link_id,
          is_pinned: link.is_pinned,
          read: link.read,
          shared_by: link.shared_by,
          shared_with: link.shared_with,
          title: link.title,
          url: link.url,
          categories: filtered[link.link_id].categories.concat({
            category_color: link.category_color,
            category_title: link.category_title,
            category_id: link.category_id,
          })
        }
      })

      let new_filtered = Object.keys(filtered).map(key => {
        return filtered[key]
      })

      return Object.assign({}, state, {
        isFilteringByCategory: false,
        main_links: new_filtered,
        error: ''
      })
    case actions.FILTER_BY_CATEGORY_ERROR:
      return Object.assign({}, state, {
        isFilteringByCategory: false,
        error: action.payload
      })
    case actions.FILTER_BY_SEARCH_START:
      return Object.assign({}, state, {
        isFilteringBySearch: true,
        error: ''
      })
    case actions.FILTER_BY_SEARCH_SUCCESS:
      let search_filtered = {}

      action.payload.forEach(link => {
        search_filtered[link.link_id] = (search_filtered[link.link_id] || {})
        search_filtered[link.link_id].categories = (search_filtered[link.link_id].categories || [])

        search_filtered[link.link_id] = {
          link_id: link.link_id,
          is_pinned: link.is_pinned,
          read: link.read,
          shared_by: link.shared_by,
          shared_with: link.shared_with,
          title: link.title,
          url: link.url,
          categories: search_filtered[link.link_id].categories.concat({
            category_color: link.category_color,
            category_title: link.category_title,
            category_id: link.category_id,
          })
        }
      })

      let new_search_filtered = Object.keys(search_filtered).map(key => {
        return search_filtered[key]
      })

      let query_search_filtered = new_search_filtered.filter(link => link.title.includes(action.query))

      return Object.assign({}, state, {
        isFilteringBySearch: false,
        main_links: query_search_filtered,
        error: ''
      })
    case actions.FILTER_BY_SEARCH_ERROR:
      return Object.assign({}, state, {
        isFilteringBySearch: false,
        error: action.payload
      })
    case actions.UPDATE_LINK_TITLE_START:
      return Object.assign({}, state, {
        isUpdatingLinkTitle: true,
        error: ''
      })
    case actions.UPDATE_LINK_TITLE_SUCCESS:
      return Object.assign({}, state, {
        isUpdatingLinkTitle: false,
        error: ''
      })
    case actions.UPDATE_LINK_TITLE_ERROR:
      return Object.assign({}, state, {
        isUpdatingLinkTitle: false,
        error: action.payload
      })
    case actions.ADD_CATEGORY_TO_LINK_START:
      return Object.assign({}, state, {
        isAddingCategoryToLink: true,
        error: ''
      })
    case actions.ADD_CATEGORY_TO_LINK_SUCCESS:
      return Object.assign({}, state, {
        isAddingCategoryToLink: false,
        main_links: action.payload,
        error: ''
      })
    case actions.ADD_CATEGORY_TO_LINK_ERROR:
      return Object.assign({}, state, {
        isAddingCategoryToLink: false,
        error: action.payload
      })
    case actions.SHARE_LINK_START:
      return Object.assign({}, state, {
        isSharingLink: true,
        error: ''
      })
    case actions.SHARE_LINK_SUCCESS:
      return Object.assign({}, state, {
        isSharingLink: false,
        main_links: state.main_links.concat(action.payload),
        error: ''
      })
    case actions.SHARE_LINK_ERROR:
      return Object.assign({}, state, {
        isSharingLink: false,
        error: action.payload
      })
    default:
      return state
  }
}


/**
 * Export reducer
 */

export default usersReducer
