'use strict'

/**
 * Dependencies
 */

import { combineReducers } from 'redux'
import usersReducer from './usersReducer'

/**
 * Combine reducers
 */

const reducers = combineReducers({
  usersReducer
})


/**
 * Export reducers
 */

export default reducers
