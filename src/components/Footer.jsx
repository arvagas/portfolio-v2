//library imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
//image imports
import headshot from '../assets/headshot.jpg'

const Footer = () => {
  return (
    <div>
      <img src={headshot} alt='Picture of Arvin Agas'/>

      <div>
        <a href='https://www.github.com/arvagas'>
          <FontAwesomeIcon icon={faGithub} size="3x"/>
        </a>

        <a href='https://www.linkedin.com/in/arvinagas/'>
          <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        </a>

        <a href='mailto: arvagas@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} size="3x"/>
        </a>
      </div>

      <p>Copyright &copy; Arvin Agas 2019</p>
    </div>
  )
}

export default Footer