// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faExternalLinkAlt, faPalette } from '@fortawesome/free-solid-svg-icons'
// custom hook imports
import useWindowDimensions from '../../hooks/useWindowDimensions'
// styling
import { StyledProjectsModal, StyledModalX, StyledModalTitle, StyledModalPhoto, StyledModalMiddle, StyledModalContent, StyledModalUList, StyledModalResp, StyledModalContentTech, StyledModalBottom, StyledModalLink } from '../../styles/StyledComps'

const ProjectsModal = ({ project, showModal, handleModal }) => {
  let { windowWidth } = useWindowDimensions()

  const determineSize = () => {
    if (windowWidth <= 425) return '2x'
    else return '3x'
  }

  if (!showModal) return null
  return (
    <StyledProjectsModal>
      <StyledModalTitle>{project.title}</StyledModalTitle>
      <StyledModalX onClick={event => handleModal(event)}>X</StyledModalX>
      <StyledModalPhoto src={project.gif ? project.gif : project.photo} alt={project.gifAlt ? project.gifAlt : project.gifPhoto}/>

      <StyledModalMiddle>
        <div>
          <StyledModalContent>{project.desc}</StyledModalContent>

          <StyledModalUList>
            {project.resp.map((bullet, index) => (
              <StyledModalResp key={Date.now()+index}>{bullet}</StyledModalResp>
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
            <FontAwesomeIcon icon={faPalette} size={determineSize()} title='View Mockup'/>
          </StyledModalLink>
        )}

        {!project.github ? '' : (
          <StyledModalLink href={project.github} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faCode} size={determineSize()} title='View Code'/>
          </StyledModalLink>
        )}

        {!project.deploy ? '' : (
          <StyledModalLink href={project.deploy} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faExternalLinkAlt} size={determineSize()} title='View Site'/>
          </StyledModalLink>
        )}
      </StyledModalBottom>
    </StyledProjectsModal>
  )
}

export default ProjectsModal