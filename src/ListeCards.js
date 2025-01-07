import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardsCategories from "./Cards";
import './List.css';

function ListeCard() {
    const { city, category, profils } = useSelector((state) => state);
    const dispatch = useDispatch();

    const filteredProfiles = profils.filter((profil) => {
        return (
            (city ? profil.location?.toLowerCase() === city.toLowerCase() : true) &&
            (category ? profil.categorie?.toLowerCase().includes(category.toLowerCase()) : true)
        );
    });

    return (
        <div className="">
            <div className="fil">
                <div className="select-container">
                    <i className="fas fa-map-marker-alt select-icon"></i>
                    <select
                        name="city"
                        className="form-selectc styled-select"
                        onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
                    >
                        <option value="">Filter By City</option>
                        <option value="Tangier">Tangier</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Marrakech">Marrakech</option>
                    </select>
                </div>

                <div className="select-container">
                    <i className="fas fa-tags select-icon"></i>
                    <select
                        name="category"
                        className="form-select styled-select"
                        onChange={(e) => dispatch({ type: "SET_CATEGORY", payload: e.target.value })}
                    >
                        <option value="">Filter By Category</option>
                        <option value="Electronique">Electronique</option>
                        <option value="skincare">skincare</option>
                        <option value="clothes">clothes</option>
                    </select>
                </div>
            </div>
            <div className="cards-container">
                {filteredProfiles.map((profil, index) => (
                    <CardsCategories
                        key={index}
                        index={index}
                        image={profil.image}
                        title={profil.title}
                        location={profil.location}
                        description={profil.description}
                        price={profil.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListeCard;
