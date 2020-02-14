// library imports
import React from 'react'
import Typist from 'react-typist'
// styling
import { StyledLandingPageContainer, StyledName, StyledIAmA } from '../styles/StyledComps'

const LandingPage = () => {
  return (
    <StyledLandingPageContainer>
      <Typist cursor={{show: false}}>
        <StyledName>I am Arvin Agas.</StyledName>
        <Typist.Delay ms={1000} />
        <StyledIAmA>Performer.</StyledIAmA>
        <StyledIAmA>TV Show Addict.</StyledIAmA>
        <StyledIAmA>Wanderluster.</StyledIAmA>
        <StyledIAmA>Full Stack Web Developer.</StyledIAmA>
      </Typist>
    </StyledLandingPageContainer>
  )
}

export default LandingPage