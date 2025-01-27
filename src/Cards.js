import React from 'react';
import { Link } from 'react-router-dom';
import './CardStyle.css';
function CardsCategories({ index, image, title, location, description, price }) {
    return (
        <div className="card">
            {index === 0 ? (
                <Link to="/iteminformation">
                    <img src={image} alt={title} className="card-img-top" />
                </Link>
            ) : (
                <img src={image} alt={title} className="card-img-top" />
            )}
            <div className="card-body">
                <div className="title-location">
                    <h5 className="card-title">{title}</h5>
                    <div className="location">
                        <i className="bi bi-geo-alt"></i>
                        {location}
                    </div>
                </div>
                <p className="card-text">{description}</p>
                <p className="price">{price}</p>
            </div>
        </div>
    );
}

export default CardsCategories;
