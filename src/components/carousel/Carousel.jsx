// library imports
import React, { useState, Children } from 'react'
// styling
import { CarouselContainer, CardCarousel } from '../../styles/StyledComps'

const Carousel = (props) => {
  let { children } = props
  const [leftCard, setLeftCard] = useState()
  const [middleCard, setMiddleCard] = useState()
  const [rightCard, setRightCard] = useState()

  const handleLeftChange = () => {
    
  }

  const handleRightChange = () => {

  }

  return (
    <CarouselContainer>
      <CardCarousel>
        <button onClick={()=>handleLeftChange()}>Left Arrow</button>

        {Children.map(children, item => (
          <div>{item}</div>
        ))}

        <button onClick={()=>handleRightChange()}>Right Arrow</button>
      </CardCarousel>
      <div>Dots Here</div>
    </CarouselContainer>
  )
}

export default Carousel