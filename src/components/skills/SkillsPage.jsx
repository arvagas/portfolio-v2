// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faPython, faLess, faSass, faGitAlt, faGithub, faSlack, faTrello } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
// custom hook imports
import useWindowDimensions from '../../hooks/useWindowDimensions'
// styling
import { StyledSkillsPage, StyledSkillsContainer, StyledSkillsPair, StyledSkillsText } from '../../styles/StyledComps'

const SkillsPage = () => {
  let { windowWidth } = useWindowDimensions()

  const determineSize = () => {
    if (windowWidth <= 425) return '5x'
    else if (windowWidth <= 768) return '8x'
    else return '10x'
  }

  return (
    <StyledSkillsPage>
      <StyledSkillsContainer>
        <StyledSkillsPair>
          <FontAwesomeIcon icon={faHtml5} size={determineSize()} color='#E54F26' title='HTML'/>
          <StyledSkillsText>HTML</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faCss3Alt} size={determineSize()} color='#0975B9' title='CSS'/>
          <StyledSkillsText>CSS</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faJs} size={determineSize()} color='#DAB92E' title='JavaScript'/>
          <StyledSkillsText>JavaScript</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faReact} size={determineSize()} color='#49C8EF' title='React'/>
          <StyledSkillsText>React</StyledSkillsText>
        </StyledSkillsPair>

        {/* <StyledSkillsPair>
          <StyledSkillsIcon icon={} size={determineSize()} color='#7749BD'/>
          <StyledSkillsText>Redux</StyledSkillsText>
        </StyledSkillsPair> */}

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faNode} size={determineSize()} color='#76B475' title='Node.js'/>
          <StyledSkillsText>Node.js</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faDatabase} size={determineSize()} color='#CFD4E7' title='SQL'/>
          <StyledSkillsText>SQL</StyledSkillsText>
        </StyledSkillsPair>
        
        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size={determineSize()} color='#003A56' title='SQLite3'/>
          <StyledSkillsText>SQLite3</StyledSkillsText>
        </StyledSkillsPair> */}

        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size={determineSize()} color='#336791' title='PostgreSQL'/>
          <StyledSkillsText>PostgreSQL</StyledSkillsText>
        </StyledSkillsPair> */}

        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size={determineSize()} color='#118E4D' title='MongoDB'/>
          <StyledSkillsText>MongoDB</StyledSkillsText>
        </StyledSkillsPair> */}

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faPython} size={determineSize()} color='#336E9D' title='Python'/>
          <StyledSkillsText>Python</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faLess} size={determineSize()} color='#204B7B' title='Less'/>
          <StyledSkillsText>Less</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faSass} size={determineSize()} color='#CD679A' title='Sass'/>
          <StyledSkillsText>Sass</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faGitAlt} size={determineSize()} color='#E94F32' title='Git'/>
          <StyledSkillsText>Git</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faGithub} size={determineSize()} color='#161414' title='Github'/>
          <StyledSkillsText>Github</StyledSkillsText>
        </StyledSkillsPair>

        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size={determineSize()} color='#25A9F3' title='VS Code'/>
          <StyledSkillsText>VS Code</StyledSkillsText>
        </StyledSkillsPair> */}

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faSlack} size={determineSize()} color='#481449' title='Slack'/>
          <StyledSkillsText>Slack</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faTrello} size={determineSize()} color='#0076BA' title='Trello'/>
          <StyledSkillsText>Trello</StyledSkillsText>
        </StyledSkillsPair>
      </StyledSkillsContainer>
    </StyledSkillsPage>
  )
}

export default SkillsPage