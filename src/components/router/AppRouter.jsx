// library imports
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
// component imports
import LandingPage from '../LandingPage'
import ProjectsPage from '../projects/ProjectsPage'
import AboutPage from '../about/AboutPage'
import SkillsPage from '../skills/SkillsPage'
import ContactPage from '../contact/ContactPage'
// context api
import { ProjectIndicesContext } from '../../contexts/ProjectIndicesContext'

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