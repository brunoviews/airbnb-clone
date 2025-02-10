import React from "react";
import StarIcon from "../icons/StarIcon";
import HeartIcon from "../icons/HeartIcon";
import LoginModal from "../components/LoginModal";
import { useState } from "react";

const ListingCard = ({
  image,
  location,
  title,
  price,
  rating,
  host,
  recomendation,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden md:w-[300px] lg:w-[350px] xl:w-[400px]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg h-[200px] w-full md:h-[250px] lg:h-[300px] xl:h-[355px]"
        />
        <div className="flex cursor-pointer">
          {recomendation && (
            <p className="rounded-full text-center bg-slate-50 border  px-1.5 py-1 absolute top-3 left-2 text-black font-sans font-semibold text-xs">
              {recomendation}
            </p>
          )}
          <div className="w-fit absolute top-3 right-2 cursor-pointer">
            {" "}
            <button onClick={() => setIsModalOpen(true)}>
              <HeartIcon />
            </button>
            {isModalOpen && (
              <LoginModal onClose={() => setIsModalOpen(false)} />
            )}
          </div>
        </div>
      </div>
      <div className="py-4 bg-transparent">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm  font-bold text-gray-800 mb-1">{title}</h4>
          <div className="flex items-center gap-1 text-sm text-black font-normal">
            <StarIcon /> {rating}{" "}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-1">{location}</p>
        <p className="text-sm text-gray-500 mb-2">Anfitrión: {host}</p>
        <p className="text-sm font-bold text-gray-800">
          {price} € <span className="font-light">noche</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
