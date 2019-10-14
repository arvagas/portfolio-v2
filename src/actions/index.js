import axios from 'axios'

import axiosWithAuth from '../utils/axiosWithAuth'

export const POST_LOGIN_START = 'POST_LOGIN_START'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAIL = 'POST_LOGIN_FAIL'
export const GET_PROJECTS_START = 'GET_PROJECTS_START'
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_FAIL = 'GET_PROJECTS_FAIL'
export const POST_PROJECTS_START = 'POST_PROJECTS_START'
export const POST_PROJECTS_SUCCESS = 'POST_PROJECTS_SUCCESS'
export const POST_PROJECTS_FAIL = 'POST_PROJECTS_FAIL'

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

export const getProjects = () => dispatch => {
  dispatch({ type: GET_PROJECTS_START })
  axios
    .get(`backendwebsite.com/projects`) //will need to update with backend website
    .then(res => dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_PROJECTS_FAIL, payload: err.response }))
}

export const addProject = (newProj) => dispatch => {
  dispatch({ type: POST_PROJECTS_START })
  axiosWithAuth
    .post(`backendwebsite.com/projects`, newProj) //will need to update with backend website
    .then(res => dispatch({ type: POST_PROJECTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_PROJECTS_FAIL, payload: err.response }))
}