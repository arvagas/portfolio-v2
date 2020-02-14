// library imports
import React from 'react'
//component imports
import AppRouter from './components/router/AppRouter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// styling
import { StyledApp } from './styles/StyledComps'
import './styles/index.scss'

const App = () => {
  
  return (
    <StyledApp>
      <NavBar />
      <AppRouter />
      <Footer />
    </StyledApp>
  )
}

export default App
