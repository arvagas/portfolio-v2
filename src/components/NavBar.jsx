//library imports
import React from 'react'
//styling
import { StyledNavbar, StyledNavLink, StyledNavA } from '../styles/StyledComps'

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink to='/projects'>Projects</StyledNavLink>
      <StyledNavLink to='/about'>About</StyledNavLink>
      <StyledNavA href='https://www.dropbox.com/s/0h043huvigrazi4/Arvin%20Agas%20Resume.pdf?dl=0' target="_blank">Resume</StyledNavA>
      <StyledNavLink to='/contact'>Contact</StyledNavLink>
    </StyledNavbar>
  )
}

export default NavBar