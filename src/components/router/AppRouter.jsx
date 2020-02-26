// library imports
import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
// component imports
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

  // run once to grab initial page; will run as normal afterwards
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <ProjectIndicesContext.Provider value={value}>
      <Switch style={{flex: 1}}>
        <Route exact path='/' component={LandingPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/skills' component={SkillsPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </ProjectIndicesContext.Provider>
  )
}

export default AppRouter