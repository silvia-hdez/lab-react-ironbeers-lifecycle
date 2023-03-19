import React from 'react';
import './BeerBox.css'

const BeerBox = ({ name, tagline, image_url, contributed_by }) => {
  const position = contributed_by.indexOf('<')
  const newContributed = contributed_by.slice(0,position)
  return (
    <div className="BeerBox">
      <img src={image_url} />
      <div className="DataBeer">
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p><b>Created by: </b>{newContributed}</p>
      </div>
    </div>
  );
};

export default BeerBox;
