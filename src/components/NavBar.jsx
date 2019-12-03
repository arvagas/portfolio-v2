//library imports
import React from 'react'
//styling
import { StyledNavbar, StyledNavLink } from '../styles/StyledComps'

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink to='/'>Home</StyledNavLink>
      {/* <NavLink to='/about'>About</NavLink> */}
      <StyledNavLink to='/projects'>Projects</StyledNavLink>
      {/* <NavLink to='/resume'>Resume</NavLink> */}
    </StyledNavbar>
  )
}

export default NavBar