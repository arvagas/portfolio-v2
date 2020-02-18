// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faPython, faLess, faSass } from '@fortawesome/free-brands-svg-icons'
// styling
import { StyledSkillsPage, StyledSkillsContainer, StyledSkillsPair, StyledSkillsText } from '../../styles/StyledComps'

const SkillsPage = () => {
  return (
    <StyledSkillsPage>
      <StyledSkillsContainer>
        <StyledSkillsPair>
          <FontAwesomeIcon icon={faHtml5} size="10x" color='#E54F26'/>
          <StyledSkillsText>HTML</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faCss3Alt} size="10x" color='#0975B9'/>
          <StyledSkillsText>CSS</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faJs} size="10x" color='#DAB92E'/>
          <StyledSkillsText>JavaScript</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faReact} size="10x" color='#49C8EF'/>
          <StyledSkillsText>React</StyledSkillsText>
        </StyledSkillsPair>

        {/* <StyledSkillsPair>
          <StyledSkillsIcon icon={} size="10x" color='#7749BD'/>
          <StyledSkillsText>Redux</StyledSkillsText>
        </StyledSkillsPair> */}

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faNode} size="10x" color='#76B475'/>
          <StyledSkillsText>Node.JS</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faPython} size="10x" color='#336E9D'/>
          <StyledSkillsText>Python</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faLess} size="10x" color='#204B7B'/>
          <StyledSkillsText>Less</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faSass} size="10x" color='#CD679A'/>
          <StyledSkillsText>Sass</StyledSkillsText>
        </StyledSkillsPair>
      </StyledSkillsContainer>
    </StyledSkillsPage>
  )
}

export default SkillsPage