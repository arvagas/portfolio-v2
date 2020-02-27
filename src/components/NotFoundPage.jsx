// library imports
import React from 'react'
// image import
import fourzerofour from '../assets/404.png'
// styles
import { StyledNotFoundPage, StyledNotFoundImg } from '../styles/StyledComps'

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <StyledNotFoundImg src={fourzerofour} alt='Page Not Found'/>
    </StyledNotFoundPage>
  )
}

export default NotFoundPage