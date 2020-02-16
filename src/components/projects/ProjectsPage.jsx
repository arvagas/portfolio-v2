// library imports
import React from 'react'
// component imports
import ProjectsCard from './ProjectsCard'
// data imports
import { ProjectsData } from './ProjectsData'

const ProjectsPage = () => {
  return (
    <>
      {ProjectsData.map((project, index) => (
        <ProjectsCard key={Date.now()+index} project={project}/>
      ))}
    </>
  )
}

export default ProjectsPage