// library imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// component imports
import LandingPage from '../LandingPage'
import ProjectsPage from '../projects/ProjectsPage'
import SkillsPage from '../skills/SkillsPage'
import ContactPage from '../contact/ContactPage'

const AppRouter = () => {
  return (
    <Switch style={{flex: 1}}>
      <Route exact path='/' component={LandingPage} />
      <Route path='/projects' component={ProjectsPage} />
      {/* <Route path='/about' component={} /> */}
      <Route path='/skills' component={SkillsPage} />
      <Route path='/contact' component={ContactPage} />
    </Switch>
  )
}

export default AppRouter