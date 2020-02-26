// library imports
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import ReactGA from 'react-ga'

const TrackedRoute = ({ exact, path, component: Component, location }) => {
  // run once to grab page; should update user's current page as they switch
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location.pathname])

  return (
    <Route exact={exact} path={path} component={Component}/>
  )
}

export default TrackedRoute