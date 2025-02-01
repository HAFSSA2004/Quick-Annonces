import React, { useRef } from "react";
import "./Categories.css";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { name: "Sport", image: "shoes.png", link: "sport.html" },
  { name: "Technology", image: "tech.jpg", link: "#" },
  { name: "Car", image: "car.jpg", link: "#" },
  { name: "Clothes", image: "clothes.jpg", link: "#" },
  { name: "Skincare", image: "skincare.png", link: "#" },
  { name: "Pet Product", image: "pet.png", link: "#" },
];

const Categories = () => {
  const scrollRef = useRef(null);

  

 

  return (
    <div className="ms-3 mt-5">
      <h2 className="ms-4 mb-4">Top Categories</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div ref={scrollRef} className="category-container d-flex">
          {categories.map((category, index) => (
            <div key={index} className="category-item text-center mx-2">
              <a href={category.link}>
                <img src={category.image} alt={category.name} className="category-image" />
              </a>
              <div className="category-description">{category.name}</div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Categories;
