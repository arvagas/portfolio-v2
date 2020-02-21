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
        <StyledNavLink to='/about' activeClassName='active-nav'>About</StyledNavLink>
        <StyledNavLink to='/skills' activeClassName='active-nav'>Skills</StyledNavLink>
        <StyledNavA href='https://www.canva.com/design/DADzh2Zobz4/_x6AoOtuGPsIAn_-YA8SPQ/view?utm_content=DADzh2Zobz4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton' target="_blank">Resume</StyledNavA>
        <StyledNavLink to='/contact' activeClassName='active-nav'>Contact</StyledNavLink>
      </StyledRoutesContainer>
    </StyledNavbar>
  )
}

export default NavBar