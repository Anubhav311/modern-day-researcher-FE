'use strict'

/**
 * Dependencies
 */

import axios from 'axios'
import { axiosWithAuth } from './helpers/index'

/**
 * Constants
 */

const backend_url = 'https://modern-day-researcher-mdr.herokuapp.com'
const SIGNUP_START = 'SIGNUP_START'
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_ERROR = 'SIGNUP_ERROR'
const SIGNIN_START = 'SIGNIN_START'
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
const SIGNIN_ERROR = 'SIGNIN_ERROR'
const SIGNOUT_START = 'SIGNOUT_START'
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'
const FETCH_PRIORITY_LINKS_START = 'FETCH_PRIORITY_LINKS_START'
const FETCH_PRIORITY_LINKS_SUCCESS = 'FETCH_PRIORITY_LINKS_SUCCESS'
const FETCH_PRIORITY_LINKS_ERROR = 'FETCH_PRIORITY_LINKS_ERROR'
const FETCH_MAIN_LINKS_START = 'FETCH_MAIN_LINKS_START'
const FETCH_MAIN_LINKS_SUCCESS = 'FETCH_MAIN_LINKS_SUCCESS'
const FETCH_MAIN_LINKS_ERROR = 'FETCH_MAIN_LINKS_ERROR'
const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START'
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
const DELETE_CATEGORY_START = 'DELETE_CATEGORY_START'
const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'
const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR'
const CREATE_CATEGORY_START = 'CREATE_CATEGORY_START'
const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS'
const CREATE_CATEGORY_ERROR = 'CREATE_CATEGORY_ERROR'
const COMPLETE_LINK_START = 'COMPLETE_LINK_START'
const COMPLETE_LINK_SUCCESS = 'COMPLETE_LINK_SUCCESS'
const COMPLETE_LINK_ERROR = 'COMPLETE_LINK_ERROR'
const DELETE_LINK_START = 'DELETE_LINK_START'
const DELETE_LINK_SUCCESS = 'DELETE_LINK_SUCCESS'
const DELETE_LINK_ERROR = 'DELETE_LINK_ERROR'
const TOGGLE_LINK_PRIORITY_START = 'TOGGLE_LINK_PRIORITY_START'
const TOGGLE_LINK_PRIORITY_SUCCESS = 'TOGGLE_LINK_PRIORITY_SUCCESS'
const TOGGLE_LINK_PRIORITY_ERROR = 'TOGGLE_LINK_PRIORITY_ERROR'
const FILTER_BY_CATEGORY_START = 'FILTER_BY_CATEGORY_START'
const FILTER_BY_CATEGORY_SUCCESS = 'FILTER_BY_CATEGORY_SUCCESS'
const FILTER_BY_CATEGORY_ERROR = 'FILTER_BY_CATEGORY_ERROR'
const FILTER_BY_SEARCH_START = 'FILTER_BY_SEARCH_START'
const FILTER_BY_SEARCH_SUCCESS = 'FILTER_BY_SEARCH_SUCCESS'
const FILTER_BY_SEARCH_ERROR = 'FILTER_BY_SEARCH_ERROR'
const UPDATE_LINK_TITLE_START = 'UPDATE_LINK_TITLE_START'
const UPDATE_LINK_TITLE_SUCCESS = 'UPDATE_LINK_TITLE_SUCCESS'
const UPDATE_LINK_TITLE_ERROR = 'UPDATE_LINK_TITLE_ERROR'
const ADD_CATEGORY_TO_LINK_START = 'ADD_CATEGORY_TO_LINK_START'
const ADD_CATEGORY_TO_LINK_SUCCESS = 'ADD_CATEGORY_TO_LINK_SUCCESS'
const ADD_CATEGORY_TO_LINK_ERROR = 'ADD_CATEGORY_TO_LINK_ERROR'
const SHARE_LINK_START = 'SHARE_LINK_START'
const SHARE_LINK_SUCCESS = 'SHARE_LINK_SUCCESS'
const SHARE_LINK_ERROR = 'SHARE_LINK_ERROR'
const SHARE_LINK_WITH_OTHERS_START = 'SHARE_LINK_WITH_OTHERS_START'
const SHARE_LINK_WITH_OTHERS_SUCCESS = 'SHARE_LINK_WITH_OTHERS_SUCCESS'
const SHARE_LINK_WITH_OTHERS_ERROR = 'SHARE_LINK_WITH_OTHERS_ERROR'

/**
 * Define actions
 */

const signUp = creds => dispatch => {
  dispatch({ type: SIGNUP_START })

  return axios
    .post(`${backend_url}/api/auth/register`, creds)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
    })
    .catch(err => {
      let err_msg

      if (err && err.response && err.response.data) {
        err_msg = err.response.data
      } else {
        err_msg = 'Authentication failed. Please try again.'
      }

      dispatch({ type: SIGNUP_ERROR, payload: err.response.data })
    })
}

const signIn = creds => dispatch => {
  dispatch({ type: SIGNIN_START })

  return axios
    .post(`${backend_url}/api/auth/login`, creds)
    .then(res => {
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      let err_msg

      if (err && err.response && err.response.data && err.response.data.message) {
        err_msg = err.response.data.message
      } else {
        err_msg = 'Authentication failed. Please try again.'
      }

      dispatch({ type: SIGNIN_ERROR, payload: err_msg })
    })
}

const signOut = () => dispatch => {
  dispatch({ type: SIGNOUT_START })
  dispatch({ type: SIGNOUT_SUCCESS })
}

const getPriorityLinks = (user_id) => dispatch => {
  dispatch({ type: FETCH_PRIORITY_LINKS_START })

  return axiosWithAuth()
    .get(`${backend_url}/api/auth/users/${user_id}/links?priority=true`)
    .then(res => {
      dispatch({ type: FETCH_PRIORITY_LINKS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_PRIORITY_LINKS_ERROR, payload: err })
    })
}

const getMainLinks = (user_id) => dispatch => {
  dispatch({ type: FETCH_MAIN_LINKS_START })

  return axiosWithAuth()
    .get(`${backend_url}/api/auth/users/${user_id}/links`)
    .then(res => {
      dispatch({ type: FETCH_MAIN_LINKS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_MAIN_LINKS_ERROR, payload: err })
    })
}

const getCategories = (user_id) => dispatch => {
  dispatch({ type: FETCH_CATEGORIES_START })

  return axiosWithAuth()
    .get(`${backend_url}/api/auth/users/${user_id}/categories`)
    .then(res => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_CATEGORIES_ERROR, payload: err })
    })
}

const createCategory = ({created_by, title, color}) => dispatch => {
  dispatch({ type: CREATE_CATEGORY_START })

  return axiosWithAuth()
    .post(`${backend_url}/api/auth/users/${created_by}/categories`, {title, color})
    .then(res => {
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: CREATE_CATEGORY_ERROR, payload: err })
    })
}

const deleteCategory = (user_id, id) => dispatch => {
  dispatch({ type: DELETE_CATEGORY_START })

  return axiosWithAuth()
    .delete(`${backend_url}/api/auth/users/${user_id}/category/${id}`)
    .then(res => {
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_CATEGORY_ERROR, payload: err })
    })
}

const completeLink = (user_id, id) => dispatch => {
  dispatch({ type: COMPLETE_LINK_START })

  return axiosWithAuth()
    .put(`${backend_url}/api/auth/users/${user_id}/links/${id}/completed`)
    .then(res => {
      dispatch({ type: COMPLETE_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: COMPLETE_LINK_ERROR, payload: err })
    })
}

const deleteLink = (user_id, id) => dispatch => {
  dispatch({ type: DELETE_LINK_START })

  return axiosWithAuth()
    .delete(`${backend_url}/api/auth/users/${user_id}/links/${id}`)
    .then(res => {
      dispatch({ type: DELETE_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_LINK_ERROR, payload: err })
    })
}

const toggleLinkPriority = (user_id, link_id) => dispatch => {
  dispatch({ type: TOGGLE_LINK_PRIORITY_START })

  return axiosWithAuth()
    .put(`${backend_url}/api/auth/users/${user_id}/links/${link_id}/pinned`)
    .then(res => {
      dispatch({ type: TOGGLE_LINK_PRIORITY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: TOGGLE_LINK_PRIORITY_ERROR, payload: err })
    })
}

const filterByCategory = (user_id, category_id) => dispatch => {
  dispatch({ type: FILTER_BY_CATEGORY_START })

  return axiosWithAuth()
    .get(`${backend_url}/api/auth/users/${user_id}/links?category=${category_id}`)
    .then(res => {
      dispatch({ type: FILTER_BY_CATEGORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FILTER_BY_CATEGORY_ERROR, payload: err })
    })
}

const filterBySearch = (user_id, query) => dispatch => {
  dispatch({ type: FILTER_BY_SEARCH_START })

  return axiosWithAuth()
    .get(`${backend_url}/api/auth/users/${user_id}/links`)
    .then(res => {
      dispatch({ type: FILTER_BY_SEARCH_SUCCESS, payload: res.data, query: query })
    })
    .catch(err => {
      dispatch({ type: FILTER_BY_SEARCH_ERROR, payload: err })
    })
}

const updateLink = (user_id, id, title) => dispatch => {
  dispatch({ type: UPDATE_LINK_TITLE_START })

  // TODO find out why this endpoint caused CORS error and the new endpoint didn't
  // Access to XMLHttpRequest at 'https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/17/links/54/title' from origin 'https://moderndayresearcher.firebaseapp.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  // console.log(`${backend_url}/api/auth/users/${user_id}/links/${id}/title?title=${title}`)
  // console.log(`${backend_url}/api/auth/users/${user_id}/links/${id}?title=${title}`)

  return axiosWithAuth()
    .put(`${backend_url}/api/auth/users/${user_id}/links/${id}?title=${title}`)
    .then(res => {
      dispatch({ type: UPDATE_LINK_TITLE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: UPDATE_LINK_TITLE_ERROR, payload: err })
    })
}

const addCategoryToLink = (user_id, link_id, category_id) => dispatch => {
  dispatch({ type: ADD_CATEGORY_TO_LINK_START })

  // .put(`${backend_url}/api/auth/users/${user_id}/links/${link_id}?category=${category_id}`)
  return axiosWithAuth()
    .post(`${backend_url}/api/auth/users/${user_id}/links/${link_id}/categories/8`)
    .then(res => {
      dispatch({ type: ADD_CATEGORY_TO_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_CATEGORY_TO_LINK_ERROR, payload: err })
    })
}

const shareLink = (link) => dispatch => {
  dispatch({ type: SHARE_LINK_START })

  return axiosWithAuth()
    .post(`${backend_url}/api/auth/users/${link.created_by}/links`, link)
    .then(res => {
      dispatch({ type: SHARE_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SHARE_LINK_ERROR, payload: err })
    })
}

const shareLinkWithOthers = (user_id, link_id, email) => dispatch => {
  dispatch({ type: SHARE_LINK_WITH_OTHERS_START })

  return axiosWithAuth()
    .post(`${backend_url}/api/auth/users/${user_id}/links/share?social=true`, {link_id, email})
    .then(res => {
      dispatch({ type: SHARE_LINK_WITH_OTHERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SHARE_LINK_WITH_OTHERS_ERROR, payload: err })
    })
}

/**
 * Export actions
 */

export default {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  signUp,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  signIn,
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  signOut,
  FETCH_PRIORITY_LINKS_START,
  FETCH_PRIORITY_LINKS_SUCCESS,
  FETCH_PRIORITY_LINKS_ERROR,
  getPriorityLinks,
  FETCH_MAIN_LINKS_START,
  FETCH_MAIN_LINKS_SUCCESS,
  FETCH_MAIN_LINKS_ERROR,
  getMainLinks,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  getCategories,
  CREATE_CATEGORY_START,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  createCategory,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  deleteCategory,
  COMPLETE_LINK_START,
  COMPLETE_LINK_SUCCESS,
  COMPLETE_LINK_ERROR,
  completeLink,
  DELETE_LINK_START,
  DELETE_LINK_SUCCESS,
  DELETE_LINK_ERROR,
  deleteLink,
  TOGGLE_LINK_PRIORITY_START,
  TOGGLE_LINK_PRIORITY_SUCCESS,
  TOGGLE_LINK_PRIORITY_ERROR,
  toggleLinkPriority,
  FILTER_BY_CATEGORY_START,
  FILTER_BY_CATEGORY_SUCCESS,
  FILTER_BY_CATEGORY_ERROR,
  filterByCategory,
  FILTER_BY_SEARCH_START,
  FILTER_BY_SEARCH_SUCCESS,
  filterBySearch,
  UPDATE_LINK_TITLE_START,
  UPDATE_LINK_TITLE_SUCCESS,
  UPDATE_LINK_TITLE_ERROR,
  updateLink,
  ADD_CATEGORY_TO_LINK_START,
  ADD_CATEGORY_TO_LINK_SUCCESS,
  ADD_CATEGORY_TO_LINK_ERROR,
  addCategoryToLink,
  SHARE_LINK_START,
  SHARE_LINK_SUCCESS,
  SHARE_LINK_ERROR,
  shareLink,
  SHARE_LINK_WITH_OTHERS_START,
  SHARE_LINK_WITH_OTHERS_SUCCESS,
  SHARE_LINK_WITH_OTHERS_ERROR,
  shareLinkWithOthers,
}
