//library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
//image imports
import headshot from '../assets/headshot.jpg'
//styling
import { StyledFooter, StyledSocialContainer, StyledProfileImage, StyledSocialLink, StyledCopyright } from '../styles/StyledComps'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialContainer>
        <StyledProfileImage src={headshot} alt='Picture of Arvin Agas'/>

        <StyledSocialLink href='https://www.github.com/arvagas'>
          <FontAwesomeIcon icon={faGithub} size="3x"/>
        </StyledSocialLink>

        <StyledSocialLink href='https://www.linkedin.com/in/arvinagas/'>
          <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        </StyledSocialLink>

        <StyledSocialLink href='mailto: arvagas@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} size="3x"/>
        </StyledSocialLink>
      </StyledSocialContainer>

      {/* <StyledCopyright>Copyright &copy; Arvin Agas 2019</StyledCopyright> */}
    </StyledFooter>
  )
}

export default Footer