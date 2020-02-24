// library imports
import React from 'react'
// component imports
import ProjectsCard from './ProjectsCard'
import Carousel from '../carousel/Carousel'
// data imports
import { ProjectsData } from './ProjectsData'
// styling
import { StyledProjectsPage } from '../../styles/StyledComps'

const ProjectsPage = () => {
  return (
    <StyledProjectsPage>
      <Carousel>
        {ProjectsData.map((project, index) => (
          <ProjectsCard key={Date.now()+index} project={project}/>
        ))}
      </Carousel>
    </StyledProjectsPage>
  )
}

export default ProjectsPage