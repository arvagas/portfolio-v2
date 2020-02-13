import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

//Start Navbar styling
export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
//End Navbar styling

//Start Footer styling
export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
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
//End Footer styling