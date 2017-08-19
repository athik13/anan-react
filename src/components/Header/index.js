import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul>
          <li className="link-wrapper">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink to="about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink to="contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header