import React from "react";
import Filters from "../components/Filters";
import ListingCard from "../components/ListingCard";
import { useState } from "react";
import { useEffect } from "react";



const Home = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error(err));
  }, []);

  // Filtrar alojamientos según la categoría activa

  const filteredListings = activeFilter
    ? listings.filter((listing) => listing.category === activeFilter)
    : listings;

    
  return (
    <div className="bg-slate-50 max-sm:containe max-sm:mx-auto max-sm:px-4 ">
      <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <div className="py-4 mt-2 flex flex-wrap gap-8 justify-center cursor-pointer">
        {filteredListings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4 gap-3 px-4 md:px-8 lg:px-16">
        <p className="text-rgb(34, 34, 34) font-bold text-center">
          Sigue descubriendo la categoría alojamientos singulares
        </p>
        <button className="bg-black opacity-90 hover:opacity-100 text-white text-sm font-semibold rounded-lg p-3 mb-3">
          Mostrar más
        </button>
      </div>
    </div>
  );
};

export default Home;
