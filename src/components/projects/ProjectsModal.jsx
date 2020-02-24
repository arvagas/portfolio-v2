// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faExternalLinkAlt, faPalette } from '@fortawesome/free-solid-svg-icons'
// styling
import { StyledProjectsModal, StyledModalX, StyledModalTitle, StyledModalPhoto, StyledModalMiddle, StyledModalContent, StyledModalUList, StyledModalResp, StyledModalContentTech, StyledModalBottom, StyledModalLink } from '../../styles/StyledComps'

const ProjectsModal = ({ project, showModal, handleModal }) => {

  if (!showModal) return null
  return (
    <StyledProjectsModal>
      <StyledModalTitle>{project.title}</StyledModalTitle>
      <StyledModalX onClick={event => handleModal(event)}>X</StyledModalX>
      <StyledModalPhoto src={project.gif} alt={project.gifAlt}/>

      <StyledModalMiddle>
        <div>
          <StyledModalContent>{project.desc}</StyledModalContent>

          <StyledModalUList>
            {project.resp.map(bullet => (
              <StyledModalResp>{bullet}</StyledModalResp>
            ))}
          </StyledModalUList>  
        </div>

        <div>
          <StyledModalContentTech>Built with: </StyledModalContentTech>
          {project.tech.map((item, index) => (
            <StyledModalContentTech key={Date.now()+index}>{project.tech.length > index+1 ? `${item}, ` : item}</StyledModalContentTech>
          ))}
        </div>
      </StyledModalMiddle>
      
      <StyledModalBottom>
        {!project.mockup ? '' : (
          <StyledModalLink href={project.mockup} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faPalette} size='3x' title='View Mockup'/>
          </StyledModalLink>
        )}

        <StyledModalLink href={project.github} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faCode} size='3x' title='View Code'/>
        </StyledModalLink>

        <StyledModalLink href={project.deploy} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faExternalLinkAlt} size='3x' title='View Site'/>
        </StyledModalLink>
      </StyledModalBottom>
    </StyledProjectsModal>
  )
}

export default ProjectsModal