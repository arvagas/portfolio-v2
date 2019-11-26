import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div>
      <img src={require('../assets/headshot.jpg')}/>

      <a href='https://www.github.com/arvagas'>
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href='https://www.linkedin.com/in/arvinagas/'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a href='mailto: arvagas@gmail.com'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  )
}

export default Footer