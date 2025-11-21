import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoLocationOutline } from "react-icons/io5";

import '../DogCard/DogCard.sass'
import { Link } from 'react-router';

function DogCard({ dog }) {
  const { id, breed, location, short_description, image } = dog;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // Future expansion: Add logic here to send a PATCH request to your server.
  };

  return (
    <Link to={`details/${id}`} className='dog-card-link-wrapper'>
        <div className='dog-card' key={id}>
            <div className='dog-card__image-container'>
                <img src={image} alt={breed} className='dog-card__image' />
            </div>

            <div className='dog-card__content'>
                <div className='dog-card__header'>
                    <h2>{breed}</h2>
                    <button 
                        className='dog-card__favorite' 
                        onClick={toggleFavorite}
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {isFavorite ? (
                            <AiFillHeart className='dog-card--filled' />
                        ) : (
                            <AiOutlineHeart className='dog-card--outline' />
                        )}
                    </button>
                </div>

                <p className='dog-card__location'>
                    <IoLocationOutline /> {location}
                </p>
                <p className='dog-card__desc'>
                    {short_description}
                </p>
            </div>
        </div>
    </Link>
  );
}

export default DogCard;