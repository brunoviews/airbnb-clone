import React from "react";
import Filters from "../components/Filters";
import ListingCard from "../components/ListingCard";

const listings = [
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-48666768/original/87789ac2-60e7-4a8f-998b-3ca0b690bf89.jpeg?im_w=720&im_format=avif",
    location: "Vilassar de Mar, España",
    title: "Casa en la Playa",
    price: 90,
    rating: 4.91,
    host: "Mariana",
    recomendation: "Recomendacíon del viajero",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/bee58e45-cf5a-4963-9030-5db902b97dbf.jpg?im_w=720&im_format=avif",
    location: "Santa María de Palautordera, España",
    title: "Casa Rural",
    price: 252,
    rating: 4.9,
    host: "Miguel",
    recomendation: "Recomendacíon del viajero",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/eebf42a7-a8bd-408c-bfff-2e993f5a7d5d.jpg?im_w=720&im_format=avif",
    location: "Barcelona, España",
    title: "Apartamento Moderno",
    price: 120,
    rating: 4.8,
    host: "Laura",
    recomendation: "Recomendacíon del viajero",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/22591834/6de93ffc_original.jpg?im_w=720&im_format=avif",
    location: "Madrid, España",
    title: "Piso Céntrico",
    price: 150,
    rating: 4.7,
    host: "Carlos",
    recomendation: "Recomendacíon del viajero",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/110897493/75ce2c7c_original.jpg?im_w=720&im_format=avif",
    location: "Sevilla, España",
    title: "Casa con Encanto",
    price: 200,
    rating: 4.9,
    host: "Ana",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/110897493/75ce2c7c_original.jpg?im_w=720&im_format=avif",
    location: "Valencia, España",
    title: "Ático con Vistas",
    price: 180,
    rating: 4.85,
    host: "Javier",
  },

  {
    image:
      "https://a0.muscache.com/im/pictures/eb9251b4-d0d8-4f58-b5a2-c034add8ab9d.jpg?im_w=720&im_format=avif",
    location: "Granada, España",
    title: "Casa Histórica",
    price: 130,
    rating: 4.75,
    host: "Elena",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1092581226451976135/original/3913044d-961b-48d9-a4ec-6e5e73d7e576.jpeg?im_w=720&im_format=avif",
    location: "Bilbao, España",
    title: "Apartamento en el Centro",
    price: 110,
    rating: 4.65,
    host: "Iñaki",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-630973378604296574/original/fe570827-5b4c-4bea-a15e-7dfce64abc5c.jpeg?im_w=720&im_format=avif",
    location: "San Sebastián, España",
    title: "Piso con Vistas al Mar",
    price: 220,
    rating: 4.9,
    host: "Mathias",
    recomendation: "Recomendacíon del viajero",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1092581226451976135/original/3913044d-961b-48d9-a4ec-6e5e73d7e576.jpeg?im_w=720&im_format=avif",
    location: "Bilbao, España",
    title: "Apartamento en el Centro",
    price: 110,
    rating: 4.65,
    host: "Iñaki",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-630973378604296574/original/fe570827-5b4c-4bea-a15e-7dfce64abc5c.jpeg?im_w=720&im_format=avif",
    location: "San Sebastián, España",
    title: "Piso con Vistas al Mar",
    price: 220,
    rating: 4.9,
    host: "Ane",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-630973378604296574/original/fe570827-5b4c-4bea-a15e-7dfce64abc5c.jpeg?im_w=720&im_format=avif",
    location: "San Sebastián, España",
    title: "Piso con Vistas al Mar",
    price: 220,
    rating: 4.9,
    host: "María",
  },

  {
    image:
      "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720&im_format=avif",
    location: "San Sebastián, España",
    title: "Piso con Vistas al Mar",
    price: 220,
    rating: 4.9,
    host: "Paula",
  },

  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-43514540/original/6040a7d3-9a85-4bb7-82ca-b347754b6df3.jpeg?im_w=720&im_format=avif",
    location: "San Sebastián, España",
    title: "Piso con Vistas al Mar",
    price: 220,
    rating: 4.9,
    host: "Carlos",
  },

  {
    image:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51879539/original/ae059796-5c99-4d28-b0f9-38820b46d6a0.jpeg?im_w=720&im_format=avif",
    location: "San Sebastián, España",
    title: "Piso con Vistas al Mar",
    price: 220,
    rating: 4.9,
    host: "Laura",
  },

  // Añade más alojamientos aquí
];

const Home = () => {
  return (
    <div>
      <Filters />
      <div className="py-4 mt-2 flex flex-wrap gap-8 justify-center">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4 gap-3">
        <p className="text-rgb(34, 34, 34) font-bold ">Sigue descubriendo la categoría alojamientos singulares</p>
        <button className="bg-black opacity-90 hover:opacity-100 text-white text-sm font-semibold rounded-lg p-3 mb-3">Mostrar más</button>
      </div>
    </div>
  );
};

export default Home;
