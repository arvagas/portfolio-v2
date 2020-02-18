// library imports
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faExternalLinkAlt, faPalette } from '@fortawesome/free-solid-svg-icons'
// component imports
import ProjectsModalOverlay from './ProjectsModalOverlay'
import ProjectsModal from './ProjectsModal'
// styling
import { StyledCard, StyledCardTitle, StyledCardPhoto, StyledCardBottom, StyledCardLink } from '../../styles/StyledComps'
import bg1 from '../../assets/backgrounds/bg1.jpg'

const ProjectsCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = event => {
    event.preventDefault()
    setShowModal(!showModal)
  }

  return (
    <StyledCard>
      <StyledCardPhoto src={bg1} alt={project.photoAlt}/>
      <StyledCardTitle>{project.title}</StyledCardTitle>
      <StyledCardBottom>
        <button onClick={event => handleModal(event)}>Read More</button>
        
        <div>
          {!project.mockup ? '' : (
            <StyledCardLink href={project.mockup} target="_blank">
              <FontAwesomeIcon icon={faPalette} size="2x"/>
            </StyledCardLink>
          )}

          <StyledCardLink href={project.github} target="_blank">
            <FontAwesomeIcon icon={faCode} size="2x"/>
          </StyledCardLink>

          <StyledCardLink href={project.deploy} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/>
          </StyledCardLink>
        </div>
      </StyledCardBottom>

      <ProjectsModalOverlay showModal={showModal} handleModal={handleModal} />
      <ProjectsModal project={project} showModal={showModal} handleModal={handleModal} />
    </StyledCard>
  )
}

export default ProjectsCard