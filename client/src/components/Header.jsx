import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/post">Add a Post</NavLink>
          <NavLink to="/listings">Travel Listings</NavLink>
        </div>
      
        
      </nav>
    </header>
  )
}

export default Header
