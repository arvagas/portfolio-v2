// library imports
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faExternalLinkAlt, faPalette, faBook } from '@fortawesome/free-solid-svg-icons'
// component imports
import ProjectsModalOverlay from './ProjectsModalOverlay'
import ProjectsModal from './ProjectsModal'
// styling
import { StyledCard, StyledCardTitle, StyledCardPhoto, StyledCardBottom, StyledFontAwesomeIcon, StyledCardLink } from '../../styles/StyledComps'
import bg1 from '../../assets/backgrounds/bg1.jpg'

const ProjectsCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = event => {
    event.preventDefault()
    setShowModal(!showModal)
  }

  if (!project.title || !project.desc) return null;
  return (
    <StyledCard>
      <StyledCardPhoto src={bg1} alt={project.photoAlt}/>
      <StyledCardTitle>{project.title}</StyledCardTitle>
      <StyledCardBottom>
        <StyledFontAwesomeIcon icon={faBook} size="2x" title='Learn More' onClick={event => handleModal(event)}/>
        
        <div>
          {!project.mockup ? '' : (
            <StyledCardLink href={project.mockup} target="_blank">
              <FontAwesomeIcon icon={faPalette} size="2x" title='View Mockup'/>
            </StyledCardLink>
          )}

          <StyledCardLink href={project.github} target="_blank">
            <FontAwesomeIcon icon={faCode} size="2x" title='View Code'/>
          </StyledCardLink>

          <StyledCardLink href={project.deploy} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"  title='View Site'/>
          </StyledCardLink>
        </div>
      </StyledCardBottom>

      <ProjectsModalOverlay showModal={showModal} handleModal={handleModal} />
      <ProjectsModal project={project} showModal={showModal} handleModal={handleModal} />
    </StyledCard>
  )
}

export default ProjectsCard