import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
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
    default :
      return state
  }
}

export default reducer