// library imports
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


// Main App Styling
export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
// #######################################################

// Navbar styling
export const StyledNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid black;
`
export const StyledNavHome = styled(NavLink)`
padding: 1rem;
text-decoration: none;
`
export const StyledRoutesContainer = styled.div`
/* padding: 1rem;
text-decoration: none; */
`
export const StyledNavLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
`
export const StyledNavA = styled.a`
  padding: 1rem;
  text-decoration: none;
`
// #######################################################

// Footer styling
export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  min-height: 50px;
  position:absolute;
  left:0;
  bottom:0;
  right:0;
`
export const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledProfileImage = styled.img`
  border-radius: 50%;
  width: 75px;
`
export const StyledSocialLink = styled.a`
  margin-left: 5%;
`
export const StyledContactLink = styled(NavLink)`
  margin-left: 5%;
`
export const StyledCopyright = styled.p`
  text-align: center;
`
// #######################################################

// Landing Page
export const StyledLandingPageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledName = styled.h1`
  font-size: 6rem;
  text-align: center;
  font-weight: bolder;
  color: white;
  margin-bottom: 1.6rem;
`
export const StyledIAmA = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: white;
  margin-bottom: 1rem;
`
// #######################################################