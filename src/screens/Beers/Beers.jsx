import React, {useState, useEffect} from 'react';
import {list as listBeers} from '../../services/BeerService'
import './Beers.css'
import BeerBox from '../../components/BeerBox/BeerBox';
import NavBar from '../../components/misc/NavBar/NavBar';

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        listBeers()
            .then((beers) => {
                setLoading(false);
                setBeers(beers)
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className='BeerList'>
            <NavBar />
            <div className='RenderBeer'>
                {loading 
                    ? "Loading ..."
                    : beers.map((beer) => {
                        return  <BeerBox key={beer._id} {...beer}/>
                    })}
            </div>
        </div>
    );
};

export default Beers;