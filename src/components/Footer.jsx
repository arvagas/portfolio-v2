// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// custom hook imports
import useWindowDimensions from '../hooks/useWindowDimensions'
// image imports
import headshot from '../assets/headshot.jpg'
// styling
import { StyledFooter, StyledSocialContainer, StyledProfileImage, StyledSocialLink, StyledContactLink, StyledCopyright } from '../styles/StyledComps'

const Footer = () => {
  let { windowWidth } = useWindowDimensions()

  const determineSize = () => {
    if (windowWidth <= 425) return '2x'
    else return '3x'
  }

  return (
    <StyledFooter>
      <StyledSocialContainer>
        <StyledProfileImage src={headshot} alt='Picture of Arvin Agas'/>

        <StyledSocialLink href='https://www.github.com/arvagas' target='_blank' rel='noopener noreferrer' delay='2s'>
          <FontAwesomeIcon icon={faGithub} size={determineSize()} title='Visit Github'/>
        </StyledSocialLink>

        <StyledSocialLink href='https://www.linkedin.com/in/arvinagas/' target='_blank' rel='noopener noreferrer' delay='3s'>
          <FontAwesomeIcon icon={faLinkedinIn} size={determineSize()} title='Visit LinkedIn'/>
        </StyledSocialLink>

        <StyledContactLink to='/contact' delay='4s'>
          <FontAwesomeIcon icon={faEnvelope} size={determineSize()} title='Email Arvin'/>
        </StyledContactLink>
      </StyledSocialContainer>

      <StyledCopyright>Copyright &copy; Arvin Agas 2019-{new Date().getFullYear()}</StyledCopyright>
    </StyledFooter>
  )
}

export default Footer