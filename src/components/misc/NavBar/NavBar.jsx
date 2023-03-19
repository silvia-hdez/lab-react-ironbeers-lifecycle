import React from 'react';
import './NavBar.css'
import homeImg from '../../../assets/home.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='NavBar'>
        <Link to='/'>
            <img src={homeImg}/>
        </Link>

        </div>
    );
};

export default NavBar;