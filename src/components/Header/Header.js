/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
      <div className='headerLeft'>
      <Link to={'/'}><img className='header_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'/></Link>
      <Link to={'/movies/popular'} className='lists'>Popular</Link>
      <Link to={'/movies/top_rated'} className='lists'>Top Rated</Link>
      <Link to={'/movies/upcoming'} className='lists'>Upcoming</Link>
      </div>
    </div>
  )
}

export default Header;
