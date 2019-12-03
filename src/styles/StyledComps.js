import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

//Start Navbar Styling
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