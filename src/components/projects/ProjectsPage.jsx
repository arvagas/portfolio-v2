// library imports
import React from 'react'
// component imports
import ProjectsCard from './ProjectsCard'
// data imports
import { ProjectsData } from './ProjectsData'
// styling
import { StyledProjectsPage } from '../../styles/StyledComps'

const ProjectsPage = () => {
  return (
    <StyledProjectsPage>
      {ProjectsData.map((project, index) => (
        <ProjectsCard key={Date.now()+index} project={project}/>
      ))}
    </StyledProjectsPage>
  )
}

export default ProjectsPage