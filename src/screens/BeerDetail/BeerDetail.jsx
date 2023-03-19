import React, { useEffect, useState } from 'react';
import BeerBoxDetail from '../../components/BeerBoxDetail/BeerBoxDetail';
import NavBar from '../../components/misc/NavBar/NavBar';
import './BeerDetail.css'
import { getBeerById } from '../../services/BeerService';
import { useNavigate, useParams } from 'react-router-dom';

const BeerDetail = () => {
    const {beerId} = useParams()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        getBeerById(beerId)
            .then((beerfromDB)=>{
                setLoading(false);
                setBeer(beerfromDB)
            })
            .catch((err)=>console.error(err))
    },[beerId, navigate])

    return (
        <div className='BeerDetail'>
            <NavBar />
            <div>
                {loading
                    ? "Loading..."
                    : <BeerBoxDetail {...beer}/>}
            </div>
            
        </div>
    );
};

export default BeerDetail;