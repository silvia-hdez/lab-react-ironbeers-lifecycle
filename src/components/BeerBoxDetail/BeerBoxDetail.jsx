import React from 'react';
import './BeerBoxDetail.css'

const BeerBoxDetail = ({ name, tagline, image_url, 
    contributed_by, description, first_brewed, attenuation_level }) => {
    return (
        <div className='BeerBoxDetail'>
                <img src={image_url} alt={name}/>
                <div>
                <h2>{name}</h2>
                <h4>{attenuation_level}</h4>
                </div>
                <div>
                <h3>{tagline}</h3>
                <p><b>{first_brewed}</b></p>
                </div>
                <p>{description}</p>
                <h5>{contributed_by}</h5>
        </div>
    );
};

export default BeerBoxDetail;