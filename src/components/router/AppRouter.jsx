// library imports
import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
// component imports
import TrackedRoute from './TrackedRoute'
import Landing from '../LandingPage'
import Projects from '../projects/ProjectsPage'
import About from '../about/AboutPage'
import Skills from '../skills/SkillsPage'
import Contact from '../contact/ContactPage'
import NotFound from '../NotFoundPage'
import { withTitle } from './TitleHeadChange'
// context api
import { ProjectIndicesContext } from '../../contexts/ProjectIndicesContext'

// initialize google analytics
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

// add title heads to components
const LandingPage = withTitle({ component: Landing })
const ProjectsPage = withTitle({ component: Projects, title: 'Projects' })
const AboutPage = withTitle({ component: About, title: 'About' })
const SkillsPage = withTitle({ component: Skills, title: 'Skills' })
const ContactPage = withTitle({ component: Contact, title: 'Contact' })
const NotFoundPage = withTitle({ component: NotFound, title: 'Page Not Found' })

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
        <TrackedRoute component={NotFoundPage} />
      </Switch>
    </ProjectIndicesContext.Provider>
  )
}

export default AppRouter