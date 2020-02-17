// library imports
import React, { useState } from 'react'
// component imports
import ProjectsModalOverlay from './ProjectsModalOverlay'
import ProjectsModal from './ProjectsModal'

const ProjectsCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = event => {
    event.preventDefault()
    setShowModal(!showModal)
  }

  return (
    <div>
      <img src={project.photo} alt={project.photoAlt}/>
      <h2>{project.title}</h2>
      <div>
        <button onClick={event => handleModal(event)}>Read More</button>
        <div>
          <a href={project.deploy} target="_blank" rel="noopener noreferrer">Deploy Icon</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">Code Icon</a>
        </div>
      </div>
      <ProjectsModalOverlay showModal={showModal} handleModal={handleModal} />
      <ProjectsModal project={project} showModal={showModal} handleModal={handleModal} />
    </div>
  )
}

export default ProjectsCard