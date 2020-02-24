// library imports
import styled, { keyframes, css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fadeIn, fadeInDown, fadeInUp, fadeOut, fadeOutUp, fadeOutDown, rollIn, pulse } from 'react-animations'

// media queries
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`
};

// animations
const fadeInAnimation = keyframes`${fadeIn}`
const fadeInDownAnimation = keyframes`${fadeInDown}`
const fadeInUpAnimation = keyframes`${fadeInUp}`
const fadeOutAnimation = keyframes`${fadeOut}`
const fadeOutUpAnimation = keyframes`${fadeOutUp}`
const fadeOutDownAnimation = keyframes`${fadeOutDown}`
const rollInAnimation = keyframes`${rollIn}`
const pulseAnimation = keyframes`${pulse}`
const moveRightAnimation = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`
const moveLeftAnimation = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

// @@@@@@@@@@ Main App Styling
export const StyledApp = styled.div`
  overflow: hidden;
`
export const StyledHeroImage = styled.div`
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
  /* border-bottom: 1px solid black; */
  animation: 2s ${fadeInDownAnimation};
`
export const StyledNavHome = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
  font-size: 3rem;
  color: white;
  font-weight: bolder;
  @media ${device.tablet} {
    font-size: 2.4rem;
  }
`
export const StyledRoutesContainer = styled.div`
/* padding: 1rem;
text-decoration: none; */
`
const activenav = 'active-nav'
export const StyledNavLink = styled(NavLink).attrs({
  activenav
})`
  padding: 1rem;
  text-decoration: none;
  font-size: 3rem;
  font-weight: bolder;
  color: white;
  &:hover {
    color: purple;
  }
  &.${activenav} {
    font-weight: bolder;
    color: purple;
    -webkit-text-stroke: 0.5px white;
    pointer-events: none;
    cursor: default;
  }
  @media ${device.tablet} {
    font-size: 2.4rem;
  }
`
export const StyledNavA = styled.a`
  padding: 1rem;
  text-decoration: none;
  font-size: 3rem;
  font-weight: bolder;
  color: white;
  &:hover {
    color: purple;
  }
  @media ${device.tablet} {
    font-size: 2.4rem;
  }
`
// #######################################################

// @@@@@@@@@@ Footer styling
export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  min-height: 50px;
  /* position:absolute;
  left:0;
  bottom:0;
  right:0; */
  @media ${device.mobileL} {
    padding: 2rem 0 1rem;
  }
`
export const StyledSocialContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  width: 100%;
  @media ${device.mobileL} {
    max-width: 375px;
  }
  @media ${device.mobileM} {
    max-width: 300px;
  }
  @media ${device.mobileS} {
    max-width: 280px;
  }
`
export const StyledProfileImage = styled.img`
  border-radius: 50%;
  width: 75px;
  border: 5px solid purple;
  animation: 2s ${rollInAnimation} forwards;
  @media ${device.mobileL} {
    width: 60px;
    border: 3px solid purple;
  }
  @media ${device.mobileS} {
    width: 50px;
    border: 2px solid purple;
  }
`
export const StyledSocialLink = styled.a`
  border-radius: 50%;
  background-color: white;
  padding: 8px;
  color: purple;
  opacity: 0;
  animation: 1s ${rollInAnimation} forwards;
  animation-delay: ${props => props.delay};
  &:hover {
    color: white;
    background-color: purple;
  }
  @media ${device.mobileL} {
    padding: 7px;
  }
  @media ${device.mobileS} {
    padding: 6px;
  }
`
export const StyledContactLink = styled(NavLink)`
  border-radius: 50%;
  background-color: white;
  padding: 8px;
  color: purple;
  opacity: 0;
  animation: 1s ${rollInAnimation} forwards;
  animation-delay: ${props => props.delay};
  &:hover {
    color: white;
    background-color: purple;
  }
  @media ${device.mobileL} {
    padding: 7px;
  }
  @media ${device.mobileS} {
    padding: 6px;
  }
`
export const StyledCopyright = styled.p`
  color: white;
  font-size: 1.6rem;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`
// #######################################################

// @@@@@@@@@@ Landing Page
export const StyledLandingPage = styled.div`
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
  @media ${device.mobileL} {
    font-size: 4rem;
  }
  @media ${device.mobileM} {
    font-size: 3.6rem;
  }
  @media ${device.mobileS} {
    font-size: 3.2rem;
  }
`
export const StyledIAmA = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: white;
  margin-bottom: 1rem;
  @media ${device.mobileL} {
    font-size: 3rem;
  }
  @media ${device.mobileM} {
    font-size: 2.4rem;
  }
  @media ${device.mobileS} {
    font-size: 2rem;
  }
`
// #######################################################

// @@@@@@@@@@ Projects Page
export const StyledProjectsPage = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  animation: 1s ${fadeInAnimation};
`
// Projects Card
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
`
export const StyledCardTitle = styled.h2`
  font-size: 2.4rem;
  margin: 1rem 0 2rem;
  @media ${device.laptop} {
    font-size: 2rem;
  }
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`
export const StyledCardPhotoContainer = styled.div`
  background-color: lightgray;
  position: relative;
  max-width: 350px;
  width: 100%;
  padding-bottom: ${props => props.aspectRatio};
`
const thumb = 'thumb'
const fullimage = 'fullimage'
export const StyledCardPhoto = styled.img.attrs({
  thumb, fullimage
})`
  max-width: 350px;
  width: 100%;
  position: absolute;
  &.${thumb} {
    transition: visibility 0ms ease 400ms;
  }
  &.${fullimage} {
    transition: opacity 400ms ease 0ms;
  }
`
export const StyledCardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: purple;
  cursor: pointer;
  &:hover {
    animation: 1s ${pulseAnimation} infinite 0s;
  }
`
export const StyledCardLink = styled.a`
  margin-left: 2rem;
  color: purple;
  &:hover {
    animation: 1s ${pulseAnimation} infinite 0s;
  }
`
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
  right: 10px;
  top: 10px;
  font-size: 2rem;
  font-weight: bolder;
  color: gray;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`
export const StyledModalTitle = styled.h1`
  font-size: 3.2rem;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`
export const StyledModalPhoto = styled.img`
  align-self: center;
  max-width: 750px;
  width: 100%;
  margin: 2rem 0;
`
export const StyledModalMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const StyledModalContent = styled.p`
  font-size: 2rem;
`
export const StyledModalContentSpan = styled.span`
  font-size: 2rem;
`
export const StyledModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid gray;
`
export const StyledModalLink = styled.a`
  margin-left: 4rem;
  color: purple;
  &:hover {
    animation: 1s ${pulseAnimation} infinite 0s;
  }
`
// #######################################################

// @@@@@@@@@@ About Page
export const StyledAboutPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 1s ${fadeInAnimation};
`
export const StyledAboutContainer = styled.div`
  max-width: 650px;
  width: 100%;
  position: relative;
  @media ${device.tablet} {
    max-width: 500px;
  }
  @media ${device.mobileL} {
    max-width: 375px;
  }
  @media ${device.mobileM} {
    max-width: 350px;
  }
  @media ${device.mobileM} {
    max-width: 300px;
  }
`
export const StyledAboutImage = styled.img`
  border-radius: 50%;
  width: 200px;
  border: 5px solid purple;
  position: absolute;
  left: -100px;
  top: -100px;
  @media ${device.mobileL} {
    display: none;
  }
`
export const StyledAboutContent = styled.div`
  max-width: 650px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`
export const StyledAboutHeader = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 5rem;
  @media ${device.mobileL} {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }
`
export const StyledAboutPara = styled.p`
  font-size: 2rem;
  text-indent: 4rem;
  margin-top: 2rem;
  &:last-child {
    margin-bottom: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
    text-indent: 3.2rem;
    &:last-child {
      margin-bottom: 1rem;
    }
  }
  @media ${device.mobileM} {
    font-size: 1.5rem;
    text-indent: 3rem;
  }
  @media ${device.mobileS} {
    font-size: 1.4rem;
    text-indent: 2.8rem;
  }
`
// #######################################################

// @@@@@@@@@@ Skills Page
export const StyledSkillsPage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: 1s ${fadeInAnimation};
`
export const StyledSkillsContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  @media ${device.laptop} {
    max-width: 800px;
  }
  @media ${device.tablet} {
    max-width: 700px;
  }
  @media ${device.mobileL} {
    max-width: 375px;
  }
  @media ${device.mobileM} {
    max-width: 350px;
  }
  @media ${device.mobileS} {
    max-width: 300px;
  }
`
export const StyledSkillsPair = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  @media ${device.mobileL} {
    margin: 1.6rem;
  }
  @media ${device.mobileS} {
    margin: 1.2rem;
  }
`
export const StyledSkillsText = styled.p`
  color: white;
  font-size: 2.8rem;
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
  @media ${device.mobileS} {
    font-size: 1.4rem;
  }
`
// #######################################################

// @@@@@@@@@@ Contact Page
export const StyledContactPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 1s ${fadeInAnimation};
`
export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  max-width: 450px;
  width: 100%;
  max-height: 550px;
  height: 100%;
  padding: 2rem;
  @media ${device.mobileL} {
    max-width: 375px;
    max-height: 450px;
  }
  @media ${device.mobileM} {
    max-width: 350px;
  }
  @media ${device.mobileS} {
    max-width: 300px;
    max-height: 400px;
  }
`
export const StyledContactHeader = styled.h2`
  font-size: 3.2rem;
  @media ${device.mobileL} {
    font-size: 2.4rem;
  }
`
export const StyledContactNotice = styled.p`
  font-size: 1.6rem;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 1.4rem;
  }
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
`
export const StyledContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  width: 100%;
  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
  @media ${device.mobileS} {
    font-size: 1.4rem;
  }
`
export const StyledContactInput = styled.input`
  padding: 5px 10px;
  font-size: 1.6rem;
  margin: 5px 0 0;
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
  @media ${device.mobileS} {
    font-size: 1rem;
  }
`
export const StyledContactTextArea = styled.textarea`
  padding: 5px 10px;
  font-size: 1.6rem;
  margin: 5px 0 0;
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
  @media ${device.mobileS} {
    font-size: 1rem;
  }
`
export const StyledContactError = styled.p`
  font-size: 1.4rem;
  color: red;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`
export const StyledContactSubmit = styled.button`
  cursor: pointer;
  font-size: 2rem;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid purple;
  &:hover {
    color: white;
    background-color: purple;
    border: 1px solid white;
  }
  &:disabled {
    color: white;
    background-color: plum;
    border: 1px solid white;
    pointer-events: none;
    cursor: default;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
    padding: 6px;
  }
  @media ${device.mobileS} {
    font-size: 1.4rem;
    padding: 4px;
  }
`
// #######################################################

// @@@@@@@@@@ Carousel
export const StyledCarousel = styled.div`
  max-width: 1450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    max-width: 950px;
  }
`
export const StyledCarouselMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const StyledCarouselCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1450px;
  width: 100%;
  position: relative;
  @media ${device.laptop} {
    max-width: 800px;
  }
`
const carouselAnimation = css`
  animation: 1s ${props => {
    if (props.animation === 'left-in') return fadeInDownAnimation
    else if (props.animation === 'left-out') return  fadeOutAnimation
    else if (props.animation === 'right-out') return fadeOutAnimation
    else if (props.animation === 'right-in') return fadeInDownAnimation
    else if (props.animation === 'move-right') return moveRightAnimation
    else if (props.animation === 'move-left') return moveLeftAnimation
  }} ${props => (props.animation === 'left-out' || props.animation === 'right-out' ? 'forwards' : '')}
`
export const StyledCarouselCard = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 1rem;
  ${props => (props.animation ? carouselAnimation : '')};
  @media (max-width: 1360px) {
    max-width: 350px;
  }
  @media (max-width: 1200px) {
    max-width: 300px;
  }
  @media (max-width: 1080px) {
    max-width: 275px;
  }
  @media ${device.laptop} {
    max-width: 250px;
  }
  @media ${device.tablet} {
    max-width: 200px;
  }
`
export const StyledCarouselFAIWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: purple;
  background-color: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 1rem;
  border-radius: 50%;
  &:hover {
    color: white;
    background-color: purple;
  }
`
// #######################################################