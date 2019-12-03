//library imports
import React from 'react'
//component imports
import AppRouter from './components/router/AppRouter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
//styling
import './styles/index.scss'

const App = () => {
  
  return (
    <div>
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
