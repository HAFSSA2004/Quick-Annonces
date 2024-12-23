import React from "react";
import CardsCategories from "./Cards";

function ListeCard() {
    const profils = [
        {
            image: "laptop.jpg",
            title: "Software Engineer",
            location: "Casa",
            description: "Specialized in building scalable web applications.",
            price: "4000 DH", // Professional services
        },
        {
            image: "hair.jpg",
            title: "Hair Stylist",
            location: "Marrakech",
            description: "Providing trendy haircuts and styling services.",
            price: "150 DH", // Haircut and styling
        },
        {
            image: "shoes.jpg",
            title: "Footwear Designer",
            location: "Fes",
            description: "Crafting innovative and stylish shoe designs.",
            price: "800 DH", // Designer shoes
        },
        {
            image: "watch.jpg",
            title: "Watchmaker",
            location: "Rabat",
            description: "Expert in repairing and creating luxury watches.",
            price: "2000 DH", // Luxury watch service
        },
        {
            image: "jacket.png",
            title: "Fashion Designer",
            location: "Tangier",
            description: "Designing elegant and modern outerwear.",
            price: "600 DH", // Fashionable jacket
        },
        {
            image: "glasses.png",
            title: "Optometrist",
            location: "Agadir",
            description: "Specialized in creating and adjusting eyewear.",
            price: "500 DH", // Eyewear products
        },
        {
            image: "auto.png",
            title: "Automobile Engineer",
            location: "Casablanca",
            description: "Designing and improving car performance.",
            price: "10000 DH", // High-end engineering services
        },
        {
            image: "phone.png",
            title: "Mobile Technician",
            location: "Oujda",
            description: "Expert in repairing and optimizing smartphones.",
            price: "200 DH", // Phone repair
        },
        {
            image: "bag.png",
            title: "Bag Designer",
            location: "Chefchaouen",
            description: "Creating unique and trendy bag designs.",
            price: "350 DH", // Designer bag
        },
        {
            image: "gym.png",
            title: "Fitness Trainer",
            location: "Meknes",
            description: "Providing personalized fitness training sessions.",
            price: "300 DH", // Fitness sessions
        },
        {
            image: "toy.png",
            title: "Toy Maker",
            location: "Essaouira",
            description: "Crafting creative and fun toys for kids.",
            price: "100 DH", // Handmade toy
        },
        {
            image: "dacia.png",
            title: "Car Salesperson",
            location: "Kenitra",
            description: "Selling affordable and reliable vehicles.",
            price: "120000 DH", // Car price
        }
    ];    
    return (
        <div className="cards-container">
            {profils.map((profil, index) => (
                <CardsCategories
                    key={index}
                    index={index} // Passing the index to CardsCategories
                    image={profil.image}
                    title={profil.title}
                    location={profil.location}
                    description={profil.description}
                    price={profil.price}
                    
                />
                
            ))}
        </div>
    );
}

export default ListeCard;
