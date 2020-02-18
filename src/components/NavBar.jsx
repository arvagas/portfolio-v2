//library imports
import React from 'react'
//styling
import { StyledNavbar, StyledNavHome, StyledRoutesContainer, StyledNavLink, StyledNavA } from '../styles/StyledComps'

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledNavHome to='/'>ARVIN AGAS</StyledNavHome>
      <StyledRoutesContainer>
        <StyledNavLink to='/projects' activeClassName='active-nav'>Projects</StyledNavLink>
        {/* <StyledNavLink to='/about' activeClassName='active-nav'>About</StyledNavLink> */}
        <StyledNavLink to='/skills' activeClassName='active-nav'>Skills</StyledNavLink>
        <StyledNavA href='https://www.dropbox.com/s/ppysuvlsdhfzhqx/Arvin%20Agas%20Resume.pdf?dl=0' target="_blank">Resume</StyledNavA>
        <StyledNavLink to='/contact' activeClassName='active-nav'>Contact</StyledNavLink>
      </StyledRoutesContainer>
    </StyledNavbar>
  )
}

export default NavBar