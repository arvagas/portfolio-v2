import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      {/* <NavLink to='/about'>About</NavLink> */}
      <NavLink to='/projects'>Projects</NavLink>
      {/* <NavLink to='/resume'>Resume</NavLink> */}
    </div>
  )
}

export default NavBar