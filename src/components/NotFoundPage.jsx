// library imports
import React from 'react'
// styles
import { StyledNotFoundPage, StyledNotFoundContainer, StyledNotFoundMessageContainer, StyledNotFoundHeader, StyledNotFoundSubHeader, StyledNotFoundLink, StyledNotFoundOr } from '../styles/StyledComps'

const NotFoundPage = ({ history }) => {
  const renderOptions = () => {
    if (history.location.state && history.location.state.hasOwnProperty('prevPage') && history.location.state.prevPage !== '/') {
      return (
        <div>
          <StyledNotFoundLink to='/'>Go Home</StyledNotFoundLink>
          <StyledNotFoundOr>OR</StyledNotFoundOr>
          <StyledNotFoundLink to={history.location.state.prevPage}>Go Back</StyledNotFoundLink>
        </div>
      )
    } else {
      return (
        <div>
          <StyledNotFoundLink to='/'>Go Home</StyledNotFoundLink>
        </div>
      )
    }
  }

  return (
    <StyledNotFoundPage>
      <StyledNotFoundContainer>
        <StyledNotFoundMessageContainer>
          <StyledNotFoundHeader>404</StyledNotFoundHeader>
          <StyledNotFoundSubHeader>Page Not Found</StyledNotFoundSubHeader>
        </StyledNotFoundMessageContainer>

        {renderOptions()}
      </StyledNotFoundContainer>
    </StyledNotFoundPage>
  )
}

export default NotFoundPage