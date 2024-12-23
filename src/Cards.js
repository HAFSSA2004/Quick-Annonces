import React from 'react';  // Only import React once
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './CardStyle.css';

function CardsCategories({ index, image, title, location, description, price }) {
    return (
        <div className="card">
            {/* Only the first card's image will be wrapped in a Link */}
            {index === 0 ? (
                <Link to="/iteminformation">
                    <img src={image} alt={title} className="card-img-top" />
                </Link>
            ) : (
                <img src={image} alt={title} className="card-img-top" />
            )}

            <div className="card-body">
                {/* Title and location section */}
                <div className="title-location">
                    <h5 className="card-title">{title}</h5>
                    <div className="location">
                        <i className="bi bi-geo-alt"></i> {/* Bootstrap Icons Location Icon */}
                        {location}
                    </div>
                </div>

                {/* Description */}
                <p className="card-text">{description}</p>
                
                {/* Price section aligned to the right with red color */}
                <p className="price">{price}</p>
            </div>
        </div>
    );
}

export default CardsCategories;
