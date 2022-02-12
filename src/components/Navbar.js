import React from 'react';
import { Link } from 'react-router-dom';
import { searchIcon } from '../data/static';
import data from '../data/data';
import '../styles/Navbar.css';

const Navbar = () => {
  return <div className='nav'>
    <div className="logo">
      <Link to='/'><img id='logoImage' src={data.logo} alt="MiLogo" /></Link>
    </div>
    <Link className='navLinks' to="/miphones">Mi Phones</Link>
    <Link className='navLinks' to="/redmiphones">Redmi Phones</Link>
    <Link className='navLinks' to="/tv">TV</Link>
    <Link className='navLinks' to="/laptops">Laptops</Link>
    <Link className='navLinks' to="/lifestyle">Fitness & Lifestyle</Link>
    <Link className='navLinks' to="/home">Home</Link>
    <Link className='navLinks' to="/audio">Audio</Link>
    <Link className='navLinks' to="/accessories">Accessories</Link>
    <div className="searchBox">
      <input type="text" name='search' placeholder='Search Products' />
      {searchIcon}
    </div>
  </div>
}

export default Navbar;
