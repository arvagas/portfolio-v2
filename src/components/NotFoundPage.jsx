// library imports
import React from 'react'
// image import
import fourzerofour from '../assets/404.png'
// styles
import { StyledNotFoundPage, StyledNotFoundContainer, StyledNotFoundImg } from '../styles/StyledComps'

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <StyledNotFoundContainer>
        <StyledNotFoundImg src={fourzerofour} alt='Page Not Found'/>
      </StyledNotFoundContainer>
    </StyledNotFoundPage>
  )
}

export default NotFoundPage