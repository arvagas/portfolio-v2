// library imports
import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
// component imports
import TrackedRoute from './TrackedRoute'
import LandingPage from '../LandingPage'
import ProjectsPage from '../projects/ProjectsPage'
import AboutPage from '../about/AboutPage'
import SkillsPage from '../skills/SkillsPage'
import ContactPage from '../contact/ContactPage'
// context api
import { ProjectIndicesContext } from '../../contexts/ProjectIndicesContext'

// initialize google analytics
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const AppRouter = () => {
  const [isCreated, setIsCreated] = useState(false)
  const [prevIndex, setPrevIndex] = useState()
  const [leftIndex, setLeftIndex] = useState()
  const [middleIndex, setMiddleIndex] = useState()
  const [rightIndex, setRightIndex] = useState()
  const [nextIndex, setNextIndex] = useState()

  let value = {
    isCreated, setIsCreated,
    prevIndex, setPrevIndex,
    leftIndex, setLeftIndex,
    middleIndex, setMiddleIndex,
    rightIndex, setRightIndex,
    nextIndex, setNextIndex
  }

  return (
    <ProjectIndicesContext.Provider value={value}>
      <Switch style={{flex: 1}}>
        <TrackedRoute exact path='/' component={LandingPage} />
        <TrackedRoute path='/projects' component={ProjectsPage} />
        <TrackedRoute path='/about' component={AboutPage} />
        <TrackedRoute path='/skills' component={SkillsPage} />
        <TrackedRoute path='/contact' component={ContactPage} />
      </Switch>
    </ProjectIndicesContext.Provider>
  )
}

export default AppRouter