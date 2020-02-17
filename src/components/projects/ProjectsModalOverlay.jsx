// library imports
import React from 'react'
// styling
import { ModalOverlay } from '../../styles/StyledComps'

const ProjectsModal = ({ showModal, handleModal }) => {

  if (!showModal) return null
  return (
    <ModalOverlay onClick={event => handleModal(event)}/>
  )
}

export default ProjectsModal