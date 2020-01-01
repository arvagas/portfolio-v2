//library imports
import React from 'react'
//styling
import { StyledNavbar, StyledNavLink } from '../styles/StyledComps'

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/projects'>Projects</StyledNavLink>
      <StyledNavLink to='/about'>About</StyledNavLink>
      {/* <NavLink to='/resume'>Resume</NavLink> */}
    </StyledNavbar>
  )
}

export default NavBar