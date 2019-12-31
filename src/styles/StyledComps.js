import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

//Start Navbar styling
export const StyledNavbar = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid black;
`
export const StyledNavLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
`
//End Navbar styling

//Start Footer styling
export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1.6rem;
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
  margin-left: 2rem;
`
export const StyledCopyright = styled.p`
  text-align: center;
`
//End Footer styling