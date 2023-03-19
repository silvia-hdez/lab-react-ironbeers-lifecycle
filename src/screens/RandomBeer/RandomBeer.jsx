import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../../components/misc/NavBar/NavBar';
import { randomBeer } from '../../services/BeerService';
import './RandomBeer.css'
import BeerBoxDetail from '../../components/BeerBoxDetail/BeerBoxDetail'

const RandomBeer = () => {

    const [loading, setLoading] = useState(true)
    const [beer, setBeer] = useState(null)

    useEffect(()=>{
        randomBeer()
            .then((beer)=>{
                setLoading(false);
                setBeer(beer)
            })
            .catch((err)=>console.error(err))
    }, [])

    return (
        <div className='RandomBeer'>
            <NavBar />
            {loading
                ? "Loading..."
                : <BeerBoxDetail {...beer}/>  }
        </div>
    );
};

export default RandomBeer;