//library imports
import React, { useState, useRef } from 'react'
// custom hook imports
import useWindowDimensions from '../hooks/useWindowDimensions'
import useClickOutside from '../hooks/useClickOutside'
//styling
import { StyledNavbar, StyledNavHome, StyledRoutesContainer, StyledMobileMenuContainer, StyledMobileMenuBar, StyledNavLink, StyledNavGAOutboundLink } from '../styles/StyledComps'

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  let { windowWidth } = useWindowDimensions()
  const checkOutsideClick = useRef(null)
  useClickOutside(checkOutsideClick, isMobileOpen, setIsMobileOpen)

  const handleMobileMenu = () => {
    if (windowWidth <= 425) setIsMobileOpen(!isMobileOpen)
  }

  return (
    <StyledNavbar ref={checkOutsideClick}>
      <StyledNavHome to='/'>ARVIN AGAS</StyledNavHome>

      <StyledMobileMenuContainer onClick={() => handleMobileMenu()}>
        <StyledMobileMenuBar className={isMobileOpen === true ? 'top-bar' : ''}/>
        <StyledMobileMenuBar className={isMobileOpen === true ? 'middle-bar' : ''}/>
        <StyledMobileMenuBar className={isMobileOpen === true ? 'bottom-bar' : ''}/>
      </StyledMobileMenuContainer>

      <StyledRoutesContainer style={{transform: windowWidth <= 425 && isMobileOpen === false ? `translate(320px, 0px)` : ''}}>
        <StyledNavLink to='/projects' activeClassName='active-nav' onClick={() => handleMobileMenu()}>Projects</StyledNavLink>
        <StyledNavLink to='/about' activeClassName='active-nav' onClick={() => handleMobileMenu()}>About</StyledNavLink>
        <StyledNavLink to='/skills' activeClassName='active-nav' onClick={() => handleMobileMenu()}>Skills</StyledNavLink>
        <StyledNavGAOutboundLink
          eventLabel='Resume'
          to='https://www.canva.com/design/DADzh2Zobz4/_x6AoOtuGPsIAn_-YA8SPQ/view?utm_content=DADzh2Zobz4'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => handleMobileMenu()}
        >
          Resume
        </StyledNavGAOutboundLink>
        <StyledNavLink to='/contact' activeClassName='active-nav' onClick={() => handleMobileMenu()}>Contact</StyledNavLink>
      </StyledRoutesContainer>
    </StyledNavbar>
  )
}

export default NavBar