import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
// import LandingPage from '../LandingPage'
// import ProjectsPage from '../projects/ProjectsPage'
// import LoginForm from '../forms/LoginForm'

const AppRouter = () => {
  return (
    <Switch>
      {/* <Route exact path='/' component={LandingPage} /> */}
      <Route path='/projects' component={ProjectsPage} />
      {/* <Route path='/login' component={LoginForm} /> */}
      {/* <PrivateRoute path='/dashboard' component={} /> */}
    </Switch>
  )
}

export default AppRouter