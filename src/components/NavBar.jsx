//library imports
import React from 'react'
//styling
import { StyledNavbar, StyledNavHome, StyledRoutesContainer, StyledNavLink, StyledNavA } from '../styles/StyledComps'

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledNavHome to='/'>Arvin Agas</StyledNavHome>
      <StyledRoutesContainer>
        <StyledNavLink to='/projects'>Projects</StyledNavLink>
        <StyledNavLink to='/about'>About</StyledNavLink>
        <StyledNavLink to='/skills'>Skills</StyledNavLink>
        <StyledNavA href='https://www.dropbox.com/s/ppysuvlsdhfzhqx/Arvin%20Agas%20Resume.pdf?dl=0' target="_blank">Resume</StyledNavA>
        <StyledNavLink to='/contact'>Contact</StyledNavLink>
      </StyledRoutesContainer>
    </StyledNavbar>
  )
}

export default NavBar