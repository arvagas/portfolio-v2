// library imports
import React, { useState, useEffect, useContext, Children } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// custom hook imports
import useWindowDimensions from '../../hooks/useWindowDimensions'
// styling
import { StyledCarousel, StyledCarouselMain, StyledCarouselCardsContainer, StyledCarouselCard, StyledCarouselFAIWrapper } from '../../styles/StyledComps'
// context api
import { ProjectIndicesContext } from '../../contexts/ProjectIndicesContext'

const Carousel = (props) => {
  let { children } = props
  let {
    isCreated, setIsCreated,
    prevIndex, setPrevIndex,
    leftIndex, setLeftIndex,
    middleIndex, setMiddleIndex,
    rightIndex, setRightIndex,
    nextIndex, setNextIndex
  } = useContext(ProjectIndicesContext)
  let { windowWidth } = useWindowDimensions()
  const [compCount, setCompCount] = useState()
  const [didPrevChange, setDidPrevChange] = useState(false)
  const [didLeftChange, setDidLeftChange] = useState(false)
  const [didMiddleChange, setDidMiddleChange] = useState(false)
  const [didRightChange, setDidRightChange] = useState(false)
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
      setIsCreated(true)
    }
    setCompCount(Children.count(children))
  }, [isCreated, setIsCreated, setLeftIndex, setMiddleIndex, setRightIndex, setNextIndex, setPrevIndex, children])

  const determineDisplay = (index) => {
    if (windowWidth <= 425) {
      if (index === leftIndex || (index === prevIndex && animType === 'right') || (index === middleIndex && animType === 'left')) return
      else return 'none'
    }
    else if (windowWidth <= 1024) {
      if (index === leftIndex || index === middleIndex || (index === prevIndex && animType === 'right') || (index === rightIndex && animType === 'left')) return
      else return 'none'
    }
    else {
      if (index === leftIndex || index === middleIndex || index === rightIndex || (index === prevIndex && animType === 'right') || (index === nextIndex && animType === 'left')) return
      else return 'none'
    }
  }

  const determineOrder = (index) => {
    if (index === leftIndex) return 1
    else if (index === middleIndex) return 2
    else if (index === rightIndex) return 3
    else return 0
  }

  const determinePosition = (index) => {
    if (windowWidth <= 425) {
      if (index === prevIndex || index === middleIndex) return 'absolute'
      else return
    }
    else if (windowWidth <= 1024) {
      if (index === prevIndex || index === rightIndex) return 'absolute'
      else return
    }
    else {
      if (index === prevIndex || index === nextIndex) return 'absolute'
      else return
    }
  }

  const determineRight = (index) => {
    if (windowWidth <= 425) {
      if (index === middleIndex) return 0
      else return
    }
    else if (windowWidth <= 1024) {
      if (index === rightIndex) return 0
      else return
    }
    else {
      if (index === nextIndex) return 0
      else return
    }
  }

  const determineSize = () => {
    if (windowWidth <= 768) return '2x'
    else return '3x'
  }

  const determineAnimation = (index) => {
    if (windowWidth <= 425) {
      if (index === prevIndex && animType === 'right') return 'left-out-side'
      else if (index === leftIndex && animType === 'left') return 'left-in-side'
      else if (index === leftIndex && animType === 'right') return 'right-in-side'
      else if (index === middleIndex && animType === 'left') return 'right-out-side'
      else return ''
    } else if (windowWidth <= 1024) {
      if (index === prevIndex && animType === 'right') return 'left-out-side'
      else if (index === leftIndex && animType === 'left') return 'left-in-side'
      else if (index === leftIndex && animType === 'right') return 'move-left'
      else if (index === middleIndex && animType === 'left') return 'move-right'
      else if (index === middleIndex && animType === 'right') return 'right-in-side'
      else if (index === rightIndex && animType === 'left') return 'right-out-side'
      else return ''
    } else {
      if (index === prevIndex && animType === 'right') return 'left-out-side'
      else if (index === leftIndex && animType === 'left') return 'left-in-top'
      else if (index === leftIndex && animType === 'right') return 'move-left'
      else if (index === middleIndex && animType === 'left') return 'move-right'
      else if (index === middleIndex && animType === 'right') return 'move-left'
      else if (index === rightIndex && animType === 'left') return 'move-right'
      else if (index === rightIndex && animType === 'right') return 'right-in-top'
      else if (index === nextIndex && animType === 'left') return 'right-out-side'
      else return ''
    }
  }
  
  const renderCards = () => {
    return (
      <>
        {Children.map(children, (child, index) => (
          <StyledCarouselCard
            style={{
              display: determineDisplay(index),
              order: determineOrder(index),
              position: determinePosition(index),
              right: determineRight(index),
            }}
            animation={determineAnimation(index)}
          >
            {child}
          </StyledCarouselCard>
        ))}
      </>
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
          <FontAwesomeIcon icon={faChevronLeft} size={determineSize()} title='Previous Project'/>
        </StyledCarouselFAIWrapper>

        <StyledCarouselCardsContainer>
          {renderCards()}
        </StyledCarouselCardsContainer>
        
        <StyledCarouselFAIWrapper onClick={()=>handleRightChange()}>
          <FontAwesomeIcon icon={faChevronRight} size={determineSize()} title='Next Project'/>
        </StyledCarouselFAIWrapper>
      </StyledCarouselMain>

      {/* <div>Dots Here</div> */}
    </StyledCarousel>
  )
}

export default Carousel