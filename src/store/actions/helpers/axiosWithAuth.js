'use strict'

/**
 * Dependencies
 */

import axios from 'axios'

/**
 * Define helper
 */

const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
}

/**
 * Export helper
 */

export default axiosWithAuth
