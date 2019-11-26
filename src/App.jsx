import React from 'react'

import AppRouter from './components/router/AppRouter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

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
