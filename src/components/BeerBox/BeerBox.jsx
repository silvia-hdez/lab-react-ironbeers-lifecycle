import React from 'react';
import { Link } from 'react-router-dom';
import './BeerBox.css';

const BeerBox = ({ name, tagline, image_url, contributed_by, _id }) => {
  const position = contributed_by.indexOf('<');
  const newContributed = contributed_by.slice(0, position);
  return (
    <div>
    <Link to={`/beers/${_id}`} style={{ textDecoration: 'none' }}>
      <div className="BeerBox">
        <img src={image_url} alt={name} />
        <div className="DataBeer">
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <p>
            <b>Created by: </b>
            {newContributed}
          </p>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default BeerBox;
