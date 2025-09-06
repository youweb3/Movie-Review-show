import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className='navbar'>
        <h1>Movie review Show</h1>
        <div className='navbar-links'>
            <a href=''>Most Famous Movies</a>
            <a> |  </a>
            <a href=''>Highly Rated</a>
            <a> |  </a>
            <a href=''>Most Famous Movies</a>
        </div>
    </nav>
  );
};

export default Header;