// library imports
import React from 'react'
// image imports
import headshot from '../../assets/headshot.jpg'
// styling
import { StyledAboutPage, StyledAboutContainer, StyledAboutImage, StyledAboutContent, StyledAboutHeader, StyledAboutPara } from '../../styles/StyledComps'

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <StyledAboutContainer>
        <StyledAboutImage src={headshot} alt='Picture of Arvin Agas'/>

        <StyledAboutContent>
          <StyledAboutHeader>About Me</StyledAboutHeader>
          <StyledAboutPara>This section will be about me</StyledAboutPara>
          <StyledAboutPara>This section will be about me</StyledAboutPara>
          <StyledAboutPara>This section will be about me</StyledAboutPara>
        </StyledAboutContent>
      </StyledAboutContainer>
    </StyledAboutPage>
  )
}

export default AboutPage