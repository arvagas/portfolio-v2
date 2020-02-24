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
  const [prevIndex, setPrevIndex] = useState()
  const [didPrevChange, setDidPrevChange] = useState(false)
  const [leftIndex, setLeftIndex] = useState()
  const [didLeftChange, setDidLeftChange] = useState(false)
  const [middleIndex, setMiddleIndex] = useState()
  const [didMiddleChange, setDidMiddleChange] = useState(false)
  const [rightIndex, setRightIndex] = useState()
  const [didRightChange, setDidRightChange] = useState(false)
  const [nextIndex, setNextIndex] = useState()
  const [didNextChange, setDidNextChange] = useState(false)
  const [animType, setAnimType] = useState('startup')

  // create the carousel, will probably need optimization
  useEffect(() => {
    if (isCreated === false) {
      Children.forEach(children, (child, index) => {
        if (index === 0) setLeftIndex(index)
        if (index === 1) setMiddleIndex(index)
        if (index === 2) setRightIndex(index)
        if (index === 3) setNextIndex(index)
        if (index === Children.count(children)-1) setPrevIndex(index)
      })
      setCompCount(Children.count(children))
      setIsCreated(true)
    }
  }, [isCreated, children])

  const orderCards = (index) => {
    if (index === leftIndex) return 1
    else if (index === middleIndex) return 2
    else if (index === rightIndex) return 3
    else return 0
  }

  const determineAnimation = (index) => {
    if (index === prevIndex && animType === 'right') return 'left-out'
    else if (index === leftIndex && animType === 'left') return 'left-in'
    else if (index === leftIndex && animType === 'right') return 'move-left'
    else if (index === middleIndex && animType === 'left') return 'move-right'
    else if (index === middleIndex && animType === 'right') return 'move-left'
    else if (index === rightIndex && animType === 'left') return 'move-right'
    else if (index === rightIndex && animType === 'right') return 'right-in'
    else if (index === nextIndex && animType === 'left') return 'right-out'
    else return ''
  }
  
  const renderCards = () => {
    return (
      <StyledCarouselCardsContainer>
        {Children.map(children, (child, index) => (
          <StyledCarouselCard
            style={{
              display: index === leftIndex || index === middleIndex || index === rightIndex || (index === prevIndex && animType === 'right') || (index === nextIndex && animType === 'left') ? '' : 'none',
              order: orderCards(index),
              position: index === prevIndex || index === nextIndex ? 'absolute': '',
              right: index === nextIndex ? 0 : '',
              zIndex: index === prevIndex || index === nextIndex ? 5 : ''
            }}
            animation={determineAnimation(index)}
          >
            {child}
          </StyledCarouselCard>
        ))}
      </StyledCarouselCardsContainer>
    )
  }

  // needs optimization
  const handleLeftChange = () => {
    Children.forEach(children, (child, index) => {
      if (didPrevChange === false && (index === prevIndex-1 || (prevIndex-1 === -1 && index === compCount-1))) {
        setPrevIndex(index)
        setDidPrevChange(true)
      } else if (didLeftChange === false && (index === leftIndex-1 || (leftIndex-1 === -1 && index === compCount-1))) {
        setLeftIndex(index)
        setDidLeftChange(true)
      } else if (didMiddleChange === false && (index === middleIndex-1 || (middleIndex-1 === -1 && index === compCount-1))) {
        setMiddleIndex(index)
        setDidMiddleChange(true)
      } else if (didRightChange === false && (index === rightIndex-1 || (rightIndex-1 === -1 && index === compCount-1))) {
        setRightIndex(index)
        setDidRightChange(true)
      } else if (didNextChange === false && (index === nextIndex-1 || (nextIndex-1 === -1 && index === compCount-1))) {
        setNextIndex(index)
        setDidNextChange(true)
      }
    })
    setDidPrevChange(false)
    setDidLeftChange(false)
    setDidMiddleChange(false)
    setDidRightChange(false)
    setDidNextChange(false)
    setAnimType('left')
  }

  // needs optimization
  const handleRightChange = () => {
    Children.forEach(children, (child, index) => {
      if (didPrevChange === false && (index === prevIndex+1 || (prevIndex+1 === compCount && index === 0))) {
        setPrevIndex(index)
        setDidPrevChange(true)
      } else if (didLeftChange === false && (index === leftIndex+1 || (leftIndex+1 === compCount && index === 0))) {
        setLeftIndex(index)
        setDidLeftChange(true)
      } else if (didMiddleChange === false && (index === middleIndex+1 || (middleIndex+1 === compCount && index === 0))) {
        setMiddleIndex(index)
        setDidMiddleChange(true)
      } else if (didRightChange === false && (index === rightIndex+1 || (rightIndex+1 === compCount && index === 0))) {
        setRightIndex(index)
        setDidRightChange(true)
      } else if (didNextChange === false && (index === nextIndex+1 || (nextIndex+1 === compCount && index === 0))) {
        setNextIndex(index)
        setDidNextChange(true)
      }
    })
    setDidPrevChange(false)
    setDidLeftChange(false)
    setDidMiddleChange(false)
    setDidRightChange(false)
    setDidNextChange(false)
    setAnimType('right')
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