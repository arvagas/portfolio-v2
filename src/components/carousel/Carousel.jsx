// library imports
import React, { useState, useEffect, Children } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// styling
import { StyledCarousel, StyledCarouselMain, StyledCarouselCardsContainer, StyledCarouselCard, StyledCarouselFAIWrapper } from '../../styles/StyledComps'

const Carousel = (props) => {
  let { children } = props
  const [isCreated, setIsCreated] = useState(false)
  const [compCount, setCompCount] = useState()
  const [leftCard, setLeftCard] = useState()
  const [leftIndex, setLeftIndex] = useState(0)
  const [didLeftChange, setDidLeftChange] = useState(false)
  const [middleCard, setMiddleCard] = useState()
  const [middleIndex, setMiddleIndex] = useState(1)
  const [didMiddleChange, setDidMiddleChange] = useState(false)
  const [rightCard, setRightCard] = useState()
  const [rightIndex, setRightIndex] = useState(2)
  const [didRightChange, setDidRightChange] = useState(false)

  // create the carousel, will probably need optimization
  useEffect(() => {
    if (isCreated === false) {
      Children.forEach(children, (child, index) => {
        if (index === 0) setLeftCard(child)
        if (index === 1) setMiddleCard(child)
        if (index === 2) setRightCard(child)
      })
      setCompCount(Children.count(children))
      setIsCreated(true)
    }
  }, [])

  const renderCards = () => {
    return (
      <StyledCarouselCardsContainer style={{display: 'flex', flexDirection: 'row'}}>
        <StyledCarouselCard>{leftCard}</StyledCarouselCard>
        <StyledCarouselCard>{middleCard}</StyledCarouselCard>
        <StyledCarouselCard>{rightCard}</StyledCarouselCard>
      </StyledCarouselCardsContainer>
    )
  }

  // needs optimization
  const handleLeftChange = () => {
    Children.forEach(children, (child, index) => {
      if (didLeftChange === false && index === leftIndex-1 || (leftIndex-1 === -1 && index === compCount-1)) {
        setLeftIndex(index)
        setLeftCard(child)
        setDidLeftChange(true)
      }

      if (didMiddleChange === false && index === middleIndex-1 || (middleIndex-1 === -1 && index === compCount-1)) {
        setMiddleIndex(index)
        setMiddleCard(child)
        setDidMiddleChange(true)
      }

      if (didRightChange === false && index === rightIndex-1 || (rightIndex-1 === -1 && index === compCount-1)) {
        setRightIndex(index)
        setRightCard(child)
        setDidRightChange(true)
      }
    })
    setDidLeftChange(false)
    setDidMiddleChange(false)
    setDidRightChange(false)
  }

  // needs optimization
  const handleRightChange = () => {
    Children.forEach(children, (child, index) => {
      if (didLeftChange === false && index === leftIndex+1 || (leftIndex+1 === compCount && index === 0)) {
        setLeftIndex(index)
        setLeftCard(child)
        setDidLeftChange(true)
      }

      if (didMiddleChange === false && index === middleIndex+1 || (middleIndex+1 === compCount && index === 0)) {
        setMiddleIndex(index)
        setMiddleCard(child)
        setDidMiddleChange(true)
      }

      if (didRightChange === false && index === rightIndex+1 || (rightIndex+1 === compCount && index === 0)) {
        setRightIndex(index)
        setRightCard(child)
        setDidRightChange(true)
      }
    })
    setDidLeftChange(false)
    setDidMiddleChange(false)
    setDidRightChange(false)
  }

  return (
    <StyledCarousel>
      <StyledCarouselMain>
        <StyledCarouselFAIWrapper onClick={()=>handleLeftChange()}>
          <FontAwesomeIcon icon={faChevronLeft} size='3x' title='Previous Project'/>
        </StyledCarouselFAIWrapper>

        {renderCards()}

        <StyledCarouselFAIWrapper onClick={()=>handleRightChange()}>
          <FontAwesomeIcon icon={faChevronRight} size='3x' title='Next Project'/>
        </StyledCarouselFAIWrapper>
      </StyledCarouselMain>

      {/* <div>Dots Here</div> */}
    </StyledCarousel>
  )
}

export default Carousel