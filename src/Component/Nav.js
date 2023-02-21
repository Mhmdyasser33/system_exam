 import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
 class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
            <NavLink to='/login'> Login </NavLink>
            <NavLink to='/student'> Stduent </NavLink>
            <NavLink to='/admin'> Admin </NavLink>
        </nav>
      </div>
    )
  }
}
export default Nav ; 
 