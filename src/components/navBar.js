import React from 'react'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <>
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/cuser/anal' state={{name:'ali ibra'}}>Cuser</NavLink>
        <NavLink to='/cuser/xyx'>user</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </nav>
    </>
  )
}

export default NavBar