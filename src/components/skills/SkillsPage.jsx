// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faPython, faLess, faSass, faGitAlt, faGithub, faSlack, faTrello } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
// styling
import { StyledSkillsPage, StyledSkillsContainer, StyledSkillsPair, StyledSkillsText } from '../../styles/StyledComps'

const SkillsPage = () => {
  return (
    <StyledSkillsPage>
      <StyledSkillsContainer>
        <StyledSkillsPair>
          <FontAwesomeIcon icon={faHtml5} size="10x" color='#E54F26' title='HTML'/>
          <StyledSkillsText>HTML</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faCss3Alt} size="10x" color='#0975B9' title='CSS'/>
          <StyledSkillsText>CSS</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faJs} size="10x" color='#DAB92E' title='JavaScript'/>
          <StyledSkillsText>JavaScript</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faReact} size="10x" color='#49C8EF' title='React'/>
          <StyledSkillsText>React</StyledSkillsText>
        </StyledSkillsPair>

        {/* <StyledSkillsPair>
          <StyledSkillsIcon icon={} size="10x" color='#7749BD'/>
          <StyledSkillsText>Redux</StyledSkillsText>
        </StyledSkillsPair> */}

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faNode} size="10x" color='#76B475' title='Node.js'/>
          <StyledSkillsText>Node.js</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faDatabase} size="10x" color='#CFD4E7' title='SQL'/>
          <StyledSkillsText>SQL</StyledSkillsText>
        </StyledSkillsPair>
        
        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size="10x" color='#003A56' title='SQLite3'/>
          <StyledSkillsText>SQLite3</StyledSkillsText>
        </StyledSkillsPair> */}

        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size="10x" color='#336791' title='PostgreSQL'/>
          <StyledSkillsText>PostgreSQL</StyledSkillsText>
        </StyledSkillsPair> */}

        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size="10x" color='#118E4D' title='MongoDB'/>
          <StyledSkillsText>MongoDB</StyledSkillsText>
        </StyledSkillsPair> */}

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faPython} size="10x" color='#336E9D' title='Python'/>
          <StyledSkillsText>Python</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faLess} size="10x" color='#204B7B' title='Less'/>
          <StyledSkillsText>Less</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faSass} size="10x" color='#CD679A' title='Sass'/>
          <StyledSkillsText>Sass</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faGitAlt} size="10x" color='#E94F32' title='Git'/>
          <StyledSkillsText>Git</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faGithub} size="10x" color='#161414' title='Github'/>
          <StyledSkillsText>Github</StyledSkillsText>
        </StyledSkillsPair>

        {/* <StyledSkillsPair>
          <FontAwesomeIcon icon={} size="10x" color='#25A9F3' title='VS Code'/>
          <StyledSkillsText>VS Code</StyledSkillsText>
        </StyledSkillsPair> */}

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faSlack} size="10x" color='#481449' title='Slack'/>
          <StyledSkillsText>Slack</StyledSkillsText>
        </StyledSkillsPair>

        <StyledSkillsPair>
          <FontAwesomeIcon icon={faTrello} size="10x" color='#0076BA' title='Trello'/>
          <StyledSkillsText>Trello</StyledSkillsText>
        </StyledSkillsPair>
      </StyledSkillsContainer>
    </StyledSkillsPage>
  )
}

export default SkillsPage