// library imports
import React from 'react'
//component imports
import AppRouter from './components/router/AppRouter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// image imports
import bg1 from './assets/backgrounds/bg1.jpg'
// styling
import { StyledApp } from './styles/StyledComps'
import './styles/index.scss'

const App = () => {
  
  return (
    <StyledApp style={{backgroundImage: `url(${bg1})`}}>
      <NavBar />
      <AppRouter />
      <Footer />
    </StyledApp>
  )
}

export default App
