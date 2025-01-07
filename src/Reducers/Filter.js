const INITIAL_STATE = {
    city: "",
    category: "",
    ads: [], // Initial ads state
    profils: [
        {
            image: "laptop.jpg",
            title: "Software Engineer",
            location: "Casa",
            description: "Specialized in building scalable web applications.",
            price: "4000 DH", // Professional services
            categorie: 'Electronique'
        },
        {
            image: "hair.jpg",
            title: "Hair Stylist",
            location: "Marrakech",
            description: "Providing trendy haircuts and styling services.",
            price: "150 DH", // Haircut and styling
            categorie: 'skincare'
        },
        {
            image: "shoes.jpg",
            title: "Footwear Designer",
            location: "Tangier",
            description: "Crafting innovative and stylish shoe designs.",
            price: "800 DH", // Designer shoes
            categorie: 'shoes'
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
            categorie: 'clothes'
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
            categorie: 'Cars'
        },
        {
            image: "phone.png",
            title: "Mobile Technician",
            location: "Tangier",
            description: "Expert in repairing and optimizing smartphones.",
            price: "200 DH", // Phone repair
            categorie: 'Electronique'
        },
        {
            image: "bag.png",
            title: "Bag Designer",
            location: "Chefchaouen",
            description: "Creating unique and trendy bag designs.",
            price: "350 DH", // Designer bag
            categorie: 'clothes'
        },
        {
            image: "gym.png",
            title: "Fitness Trainer",
            location: "Meknes",
            description: "Providing personalized fitness training sessions.",
            price: "300 DH", // Fitness sessions
            categorie: 'clothes'
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
            categorie: 'Cars'
        }
    ]
};


export default function Filter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_CITY":
            return { ...state, city: action.payload };

        case "SET_CATEGORY":
            return { ...state, category: action.payload };

        case "UPDATE_AD": {
            const updatedProfiles = state.profils.map((ad) =>
                ad.productN === action.payload.productN ? { ...ad, ...action.payload.data } : ad
            );
            return { ...state, profils: updatedProfiles };
        }

        case "DELETE_AD": {
            const filteredProfiles = state.profils.filter((ad) => ad.productN !== action.payload.productN);
            return { ...state, profils: filteredProfiles };
        }

        default:
            return state;
    }
}

