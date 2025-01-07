import React from "react";
import Filters from "../components/Filters";
import ListingCard from "../components/ListingCard";
import { useState } from "react";

const listings = [
  {
    category: "domo",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-716521312754627857/original/c30976a1-120f-4f80-aa90-808218897867.jpeg?im_w=720&im_format=avif",
    location: "Prades, España",
    title: "Iglús para una velada romántica inolvidable",
    price: 90,
    rating: 4.91,
    host: "Mariana",
    recomendation: "Recomendacíon del viajero",
  },
  {
    category: "domo",
    image:
      "https://a0.muscache.com/im/pictures/d002674c-2de5-4cbc-a8ee-3f704504026d.jpg?im_w=720&im_format=avif",
    location: "Prades, España",
    title: "El Nido: en plena naturaleza.",
    price: 252,
    rating: 4.9,
    host: "Miguel",
    recomendation: "Recomendacíon del viajero",
  },
  {
    category: "domo",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-50326767/original/09c7e49c-9266-49a9-9845-d5d38145e914.jpeg?im_w=720&im_format=avif",
    location: "Barcelona, España",
    title: "Cúpula en la garriga Mas-berrugues",
    price: 120,
    rating: 4.8,
    host: "Laura",
    recomendation: "Recomendacíon del viajero",
  },
  {
    category: "domo",
    image:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51551286/original/d908cd1d-0f1f-4b17-af6d-24bf2c493b24.jpeg?im_w=720&im_format=avif",
    location: "Gerde, Francia",
    title: "La Big'Bulle",
    price: 150,
    rating: 4.7,
    host: "Carlos",
    recomendation: "Recomendacíon del viajero",
  },
  {
    category: "treehouse",
    image:
      "https://a0.muscache.com/im/pictures/20cf4ce8-614b-4724-b317-2d8dcca0d5ed.jpg?im_w=720&im_format=avif",
    location: "Villanueva de Arce, España",
    title: "Casa del árbol ",
    price: 200,
    rating: 4.9,
    host: "Alicia",
  },
  {
    category: "treehouse",
    image:
      "https://a0.muscache.com/im/pictures/b49bcc29-9ff5-4af3-b28f-8a9d93f132d5.jpg?im_w=720&im_format=avif",
    location: "Porte-de-Benauge, Francia",
    title: "Casa del árbol",
    price: 180,
    rating: 4.85,
    host: "Pierre",
  },

  {
    category: "rural",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-48666768/original/87789ac2-60e7-4a8f-998b-3ca0b690bf89.jpeg?im_w=720&im_format=avif",
    location: "Granada, España",
    title: "Casa Rural con vistas al mar",
    price: 130,
    rating: 4.75,
    host: "Elena",
  },
  {
    category: "rural",
    image:
      "https://a0.muscache.com/im/pictures/110897493/75ce2c7c_original.jpg?im_w=720&im_format=avif",
    location: "Bilbao, España",
    title: "Casa Rural",
    price: 110,
    rating: 4.65,
    host: "Iñaki",
  },
  {
    category: "rural",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1092581226451976135/original/3913044d-961b-48d9-a4ec-6e5e73d7e576.jpeg?im_w=720&im_format=avif",
    location: "San Sebastián, España",
    title: "Casa Rural con piscina",
    price: 220,
    rating: 4.9,
    host: "Mathias",
    recomendation: "Recomendacíon del viajero",
  },
  {
    category: "singular",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720&im_format=avif",
    location: "Cadiz, España",
    title: "Molino de Viento",
    price: 110,
    rating: 4.65,
    host: "Iñaki",
  },
  {
    category: "singular",
    image:
      "https://a0.muscache.com/im/pictures/f7f79d47-7d08-4b2d-acaa-8117736b6c7b.jpg?im_w=720&im_format=avif",
    location: "Western Cape, Sudáfrica",
    title: "Granja en Sudáfrica",
    price: 220,
    rating: 4.9,
    host: "Ane",
  },
  {
    category: "singular",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720&im_format=avif",
    location: "Joncherey, Francia",
    title: "Cabaña",
    price: 220,
    rating: 4.9,
    host: "María",
  },

  {
    category: "float",
    image:
      "https://a0.muscache.com/im/pictures/864f03a1-0d62-43f1-a0b5-a1ca8fbc2fb4.jpg?im_w=720&im_format=avif",
    location: "Crach, Francia",
    title: "Casa Flotante",
    price: 220,
    rating: 4.9,
    host: "Paula",
  },

  {
    category: "float",
    image:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53028879/original/15e423aa-4ebe-46ae-a0e9-7c1d120ca13e.jpeg?im_w=720&im_format=avif",
    location: "Sorgues, Francia",
    title: "Casa Flotante",
    price: 220,
    rating: 4.9,
    host: "Carlos",
  },

  {
    category: "float",
    image:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-935153652335463796/original/c2be5971-2285-4ce2-b35f-f485061f0979.jpeg?im_w=720&im_format=avif",
    location: "Baurech, Francia",
    title: "Casa Flotante",
    price: 220,
    rating: 4.9,
    host: "Laura",
  },

  // Añade más alojamientos aquí
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("");
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
