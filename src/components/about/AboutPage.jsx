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
          <StyledAboutPara>I am a full stack web developer. I specialize in developing single-page applications utilizing React, as well as creating back ends with frameworks such as Express and Django.</StyledAboutPara>
          <StyledAboutPara>My experience in the food and health care industry over the years has strengthened my interpersonal skills and taught me the importance of patience and compassion for the customer or patient. Applying these assets to web development can and will yield high quality results that will benefit both company and consumer.</StyledAboutPara>
          <StyledAboutPara>When I'm not coding, you can catch me watching gratuitous amounts of television, doing some experimental cooking, bicycling all over the place, and play some rage-inducing tabletop games with my enemies. Okay, fine... my friends.</StyledAboutPara>
        </StyledAboutContent>
      </StyledAboutContainer>
    </StyledAboutPage>
  )
}

export default AboutPage