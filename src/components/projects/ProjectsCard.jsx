import React from 'react'

const ProjectsCard = ({ project }) => {
  //image
  //title
  //description

  return (
    <div>
      <img src={project.photo} alt={project.photoAlt}/>
      <h2>{project.title}</h2>

    </div>
  )
}

export default ProjectsCard