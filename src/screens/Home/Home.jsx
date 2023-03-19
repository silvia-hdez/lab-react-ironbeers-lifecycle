import React from 'react';
import './Home.css'
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='Home'>
            <div className='HomeBox'>
                <img src={beers} alt=""/>
                <Link to="/beers"  style={{ textDecoration: 'none' }}><h2>All Beers</h2></Link>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className='HomeBox'>
                <img src={randomBeer} alt=""/>
                <Link to="/random-beers"  style={{ textDecoration: 'none' }}><h2>Random Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div> 
            <div className='HomeBox'>
                <img src={newBeer} alt=""/>
                <Link to="/new-beer"  style={{ textDecoration: 'none' }}><h2>New Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    );
};

export default Home;