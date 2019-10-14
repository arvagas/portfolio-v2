import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  POST_PROJECTS_START,
  POST_PROJECTS_SUCCESS,
  POST_PROJECTS_FAIL,
} from '../actions'

const initialState = {
  projects: [],
  isLoggedIn: false,
  isLoading: false,
  errors: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_LOGIN_START :
      return {
        isLoading: true,
        errors: ''
      }
    case POST_LOGIN_SUCCESS :
      return {
        isLoading: false,
        isLoggedIn: true,
        errors: ''
      }
    case POST_LOGIN_FAIL :
      return {
        isLoading: false,
        errors: action.payload //update with how backend is set up
      }
    case GET_PROJECTS_START :
      return {
        isLoading: true,
        errors: ''
      }
    case GET_PROJECTS_SUCCESS :
      return {
        projects: action.payload, //update with how backend is set up
        isLoading: false,
        errors: ''
      }
    case GET_PROJECTS_FAIL :
      return {
        isLoading: false,
        errors: action.payload //update with how backend is set up
      }
    case POST_PROJECTS_START :
      return {
        isLoading: true,
        errors: ''
      }
    case POST_PROJECTS_SUCCESS :
      return {
        projects: action.payload, //update with how backend is set up
        isLoading: false,
        errors: ''
      }
    case POST_PROJECTS_FAIL :
      return {
        isLoading: false,
        errors: action.payload //update with how backend is set up
      }
    default :
      return state
  }
}

export default reducer