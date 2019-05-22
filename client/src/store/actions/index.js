'use strict'

/**
 * Dependencies
 */

const axios = require('axios')
const helpers = require('./helpers/index')

/**
 * Constants
 */

const SIGNUP_START = 'SIGNUP_START'
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_ERROR = 'SIGNUP_ERROR'
const SIGNIN_START = 'SIGNIN_START'
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
const SIGNIN_ERROR = 'SIGNIN_ERROR'
const FETCH_PRIORITY_LINKS_START = 'FETCH_PRIORITY_LINKS_START'
const FETCH_PRIORITY_LINKS_SUCCESS = 'FETCH_PRIORITY_LINKS_SUCCESS'
const FETCH_PRIORITY_LINKS_ERROR = 'FETCH_PRIORITY_LINKS_ERROR'
const FETCH_MAIN_LINKS_START = 'FETCH_MAIN_LINKS_START'
const FETCH_MAIN_LINKS_SUCCESS = 'FETCH_MAIN_LINKS_SUCCESS'
const FETCH_MAIN_LINKS_ERROR = 'FETCH_MAIN_LINKS_ERROR'
const CREATE_LINK_START = 'CREATE_LINK_START'
const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS'
const CREATE_LINK_ERROR = 'CREATE_LINK_ERROR'
const UPDATE_LINK_START = 'UPDATE_LINK_START'
const UPDATE_LINK_SUCCESS = 'UPDATE_LINK_SUCCESS'
const UPDATE_LINK_ERROR = 'UPDATE_LINK_ERROR'
const DELETE_LINK_START = 'DELETE_LINK_START'
const DELETE_LINK_SUCCESS = 'DELETE_LINK_SUCCESS'
const DELETE_LINK_ERROR = 'DELETE_LINK_ERROR'
const axiosWithAuth = helpers.axiosWithAuth

/**
 * Define actions
 */

const signUp = creds => dispatch => {
  dispatch({ type: SIGNUP_START })

  return axios
    .post('https://modern-day-researcher-mdr.herokuapp.com/api/auth/register', creds)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data })
    })
}

const signIn = creds => dispatch => {
  dispatch({ type: SIGNIN_START })

  return axios
    .post('https://modern-day-researcher-mdr.herokuapp.com/api/auth/login', creds)
    .then(res => {
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SIGNIN_ERROR, payload: err.data.message })
    })
}

const getMainLinks = (user_id) => dispatch => {
  dispatch({ type: FETCH_MAIN_LINKS_START })

  return axiosWithAuth()
    .get(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links`)
    .then(res => {
      dispatch({ type: FETCH_MAIN_LINKS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_MAIN_LINKS_ERROR, payload: err.response.data.message })
    })
}

const getPriorityLinks = (user_id) => dispatch => {
  dispatch({ type: FETCH_PRIORITY_LINKS_START })

  return axiosWithAuth()
    .get(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links?priority=true`)
    .then(res => {
      dispatch({ type: FETCH_PRIORITY_LINKS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_PRIORITY_LINKS_ERROR, payload: err.response.data.message })
    })
}

/**
 * Export actions
 */

module.exports = {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  signUp: signUp,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  signIn: signIn,
  FETCH_MAIN_LINKS_START,
  FETCH_MAIN_LINKS_SUCCESS,
  FETCH_MAIN_LINKS_ERROR,
  getMainLinks: getMainLinks,
  FETCH_PRIORITY_LINKS_START,
  FETCH_PRIORITY_LINKS_SUCCESS,
  FETCH_PRIORITY_LINKS_ERROR,
  getPriorityLinks: getPriorityLinks,
}