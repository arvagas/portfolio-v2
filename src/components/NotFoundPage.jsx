// library imports
import React from 'react'
// styles
import { StyledNotFoundPage, StyledNotFoundContainer, StyledNotFoundMessageContainer, StyledNotFoundHeader, StyledNotFoundSubHeader } from '../styles/StyledComps'

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <StyledNotFoundContainer>
        <StyledNotFoundMessageContainer>
          <StyledNotFoundHeader>404</StyledNotFoundHeader>
          <StyledNotFoundSubHeader>Page Not Found</StyledNotFoundSubHeader>
        </StyledNotFoundMessageContainer>
      </StyledNotFoundContainer>
    </StyledNotFoundPage>
  )
}

export default NotFoundPage