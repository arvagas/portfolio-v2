// library imports
import React, { useState } from 'react'
import { faCode, faExternalLinkAlt, faPalette, faBook } from '@fortawesome/free-solid-svg-icons'
// component imports
import ProjectsModalOverlay from './ProjectsModalOverlay'
import ProjectsModal from './ProjectsModal'
// styling
import { StyledCard, StyledCardTitle, StyledCardPhotoContainer, StyledCardPhoto, StyledCardBottom, StyledFontAwesomeIcon, StyledCardLink } from '../../styles/StyledComps'

const ProjectsCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleModal = event => {
    event.preventDefault()
    setShowModal(!showModal)
  }

  if (!project.title || !project.desc) return null;
  return (
    <StyledCard>
      <StyledCardPhotoContainer style={{height: project.photo.offsetHeight}} aspectRatio='47%'>
        <StyledCardPhoto src={project.thumb} alt={project.thumbAlt} style={{ visibility: isLoaded ? 'hidden' : 'visible' }} className='thumb'/>
        <StyledCardPhoto onLoad={() => setIsLoaded(true)} src={project.photo} alt={project.photoAlt} style={{ opacity: isLoaded ? 1 : 0 }} className='fullimage'/>
      </StyledCardPhotoContainer>

      <StyledCardTitle>{project.title}</StyledCardTitle>

      <StyledCardBottom>
        <StyledFontAwesomeIcon icon={faBook} size='2x' title='Learn More' onClick={event => handleModal(event)}/>
        
        <div>
          {!project.mockup ? '' : (
            <StyledCardLink href={project.mockup} target='_blank' rel='noopener noreferrer'>
              <StyledFontAwesomeIcon icon={faPalette} size='2x' title='View Mockup'/>
            </StyledCardLink>
          )}

          {!project.github ? '' : (
            <StyledCardLink href={project.github} target='_blank' rel='noopener noreferrer'>
              <StyledFontAwesomeIcon icon={faCode} size='2x' title='View Code'/>
            </StyledCardLink>
          )}
          
          {!project.deploy ? '' : (
            <StyledCardLink href={project.deploy} target='_blank' rel='noopener noreferrer'>
              <StyledFontAwesomeIcon icon={faExternalLinkAlt} size='2x'  title='View Site'/>
            </StyledCardLink>
          )}
        </div>
      </StyledCardBottom>

      <ProjectsModalOverlay showModal={showModal} handleModal={handleModal} />
      <ProjectsModal project={project} showModal={showModal} handleModal={handleModal} />
    </StyledCard>
  )
}

export default ProjectsCard