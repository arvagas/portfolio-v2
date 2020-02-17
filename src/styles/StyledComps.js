// library imports
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


// @@@@@@@@@@ Main App Styling
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

// @@@@@@@@@@ Navbar styling
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

// @@@@@@@@@@ Footer styling
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

// @@@@@@@@@@ Landing Page
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

// @@@@@@@@@@ Projects Page
// Projects Card
// Projects Modal Overlay
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 0.4;
`
// Projects Modal
export const StyledProjectsModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 101;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  width: 100%;
  max-height: 750px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`
export const StyledModalX = styled.div`
  position: absolute;
  right: 20px;
  font-size: 2rem;
  color: gray;
  /* border: 1px solid grey; */
  padding: 10px;
  /* border-radius: 10px; */
  cursor: pointer;
`
export const StyledModalTitle = styled.h1`
  font-size: 3.2rem;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`
export const StyledModalPhoto = styled.img`
  align-self: center;
  max-width: 500px;
  width: 100%;
  margin: 2rem 0;
`
export const StyledModalMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`
export const StyledModalContent = styled.p`
  font-size: 1.6rem;
`
export const StyledModalContentSpan = styled.span`
  font-size: 1.6rem;
`
export const StyledModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid gray;
`
export const StyledModalLink = styled.a`
  margin-left: 4rem;
`
// #######################################################