// library imports
import React, { useState, useEffect } from 'react'
//component imports
import AppRouter from './components/router/AppRouter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// image imports
import bg1 from './assets/backgrounds/bg1.jpg'
import bg2 from './assets/backgrounds/bg2.jpg'
import bg3 from './assets/backgrounds/bg3.jpg'
// styling
import { StyledApp } from './styles/StyledComps'
import './styles/index.scss'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const App = () => {
  const [bgImg, setBgImg] = useState()
  // const [arrIndex, setArrIndex] = useState(0)
  // shuffle this array eventually
  const imgArr = [bg1, bg2, bg3]

  // load initial bg
  useEffect(() => {
    if (!bgImg) {
      let randomIndex = getRandomInt(imgArr.length)
      setBgImg(imgArr[randomIndex])
      // setArrIndex(arrIndex => arrIndex + 1)
    }
  }, [])

  // change background every 45 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (arrIndex < imgArr.length) {
  //       setBgImg(imgArr[arrIndex])
  //       setArrIndex(arrIndex => arrIndex + 1)
  //     } else {
  //       setBgImg(imgArr[0])
  //       setArrIndex(1)
  //     }
  //   }, 45000)
  //   return () => clearInterval(interval)
  // })
  
  return (
    <StyledApp style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${bgImg})` }}>
      <NavBar />
      <AppRouter />
      <Footer />
    </StyledApp>
  )
}

export default App
