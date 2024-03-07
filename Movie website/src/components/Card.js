
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({ title, posterPath, homepage,rating, id }) => {
  return (
    <div className="card-container">
      {posterPath && (
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className="card-img" />
      )}
      {title && <h6 className="card-title">{title}</h6>}
      <div className="star">
      <img className="card-star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="" />
      <p className='card-rating'>{rating}</p>
      </div>
      {homepage && <a href={homepage} className="card-btn">Homepage</a>}
      <Link style={{background:'#555555', color:'white'}} to={`/card-details-page/${id}`} className="card-btn">+ Watch List</Link>
    </div>
  );
};

export default Card;
