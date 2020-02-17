// library imports
import React from 'react'
// styling
import { StyledProjectsModal } from '../../styles/StyledComps'

const ProjectsModal = ({ project, showModal, handleModal }) => {

  if (!showModal) return null
  return (
    <StyledProjectsModal>
      <h1>{project.title}</h1>
      <button onClick={event => handleModal(event)}>X</button>
    </StyledProjectsModal>
  )
}

export default ProjectsModal