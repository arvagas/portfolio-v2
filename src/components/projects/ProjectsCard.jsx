import React from 'react'

const ProjectsCard = ({ project }) => {
  //image
  //title
  //description

  return (
    <div>
      <img src={project.photo} alt={project.photoAlt}/>
      <h2>{project.title}</h2>
      <div>
        <a>Learn More</a>
        <div>
          <a>Deploy</a>
          <a>Github</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard