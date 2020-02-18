// library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faExternalLinkAlt, faPalette } from '@fortawesome/free-solid-svg-icons'
// styling
import { StyledProjectsModal, StyledModalX, StyledModalTitle, StyledModalPhoto, StyledModalMiddle, StyledModalContent, StyledModalContentSpan, StyledModalBottom, StyledModalLink } from '../../styles/StyledComps'
import bg1 from '../../assets/backgrounds/bg1.jpg'

const ProjectsModal = ({ project, showModal, handleModal }) => {

  if (!showModal) return null
  return (
    <StyledProjectsModal>
      <StyledModalTitle>{project.title}</StyledModalTitle>
      <StyledModalX onClick={event => handleModal(event)}>X</StyledModalX>
      <StyledModalPhoto src={bg1}/>

      <StyledModalMiddle>
        <StyledModalContent>Description: {project.desc}</StyledModalContent>
        <StyledModalContent>Role: {project.role}</StyledModalContent>
        <StyledModalContent>Responsibilities:</StyledModalContent>
        {project.resp.map((item, index) => (
          <StyledModalContent key={Date.now()+index}>{item}</StyledModalContent>
        ))}
        <div>
          <StyledModalContentSpan>Tech used: </StyledModalContentSpan>
          {project.tech.map((item, index) => (
            <StyledModalContentSpan key={Date.now()+index}>{item}, </StyledModalContentSpan>
          ))}
        </div>
      </StyledModalMiddle>
      
      <StyledModalBottom>
        {!project.mockup ? '' : (
          <StyledModalLink href={project.mockup} target="_blank">
            <FontAwesomeIcon icon={faPalette} size="3x"/>
          </StyledModalLink>
        )}

        <StyledModalLink href={project.github} target="_blank">
          <FontAwesomeIcon icon={faCode} size="3x"/>
        </StyledModalLink>

        <StyledModalLink href={project.deploy} target="_blank">
          <FontAwesomeIcon icon={faExternalLinkAlt} size="3x"/>
        </StyledModalLink>
      </StyledModalBottom>
    </StyledProjectsModal>
  )
}

export default ProjectsModal