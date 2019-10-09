import axios from 'axios'

import axiosWithAuth from '../utils/axiosWithAuth'

const POST_LOGIN_START = 'POST_LOGIN_START'
const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
const POST_LOGIN_FAIL = 'POST_LOGIN_FAIL'

export const login = (creds, history) => dispatch => {
  dispatch({ type: POST_LOGIN_START })
  axios
    .post(`backendwebsite.com/auth/login`, creds) //will need to update with backend website
    .then(res => {
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem('token', res.data.token)
      history.push('/')
    })
    .catch(err => dispatch({ type: POST_LOGIN_FAIL, payload: err.response }))
}