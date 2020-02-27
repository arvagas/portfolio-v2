// library imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// component imports
import App from './App'
// styles
// import './index.css'
import { GlobalStyle } from './styles/GlobalStyle'
// other
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
