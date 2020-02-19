// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// image imports
import headshot from '../assets/headshot.jpg'
// styling
import { StyledFooter, StyledSocialContainer, StyledProfileImage, StyledSocialLink, StyledContactLink, StyledCopyright } from '../styles/StyledComps'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialContainer>
        <StyledProfileImage src={headshot} alt='Picture of Arvin Agas'/>

        <StyledSocialLink href='https://www.github.com/arvagas' target="_blank" delay='2s'>
          <FontAwesomeIcon icon={faGithub} size="3x" title='Visit Github'/>
        </StyledSocialLink>

        <StyledSocialLink href='https://www.linkedin.com/in/arvinagas/' target="_blank" delay='3s'>
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" title='Visit LinkedIn'/>
        </StyledSocialLink>

        <StyledContactLink to='/contact' delay='4s'>
          <FontAwesomeIcon icon={faEnvelope} size="3x" title='Email Arvin'/>
        </StyledContactLink>
      </StyledSocialContainer>

      {/* <StyledCopyright>Copyright &copy; Arvin Agas 2019</StyledCopyright> */}
    </StyledFooter>
  )
}

export default Footer