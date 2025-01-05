import React from "react";
import StarIcon from "../icons/StarIcon";
import HeartIcon from "../icons/HeartIcon";

const ListingCard = ({
  image,
  location,
  title,
  price,
  rating,
  host,
  recomendation,
}) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-64 w-72 object-cover rounded-lg"
        />
        <div className="flex cursor-pointer">
          {recomendation && (
            <p className="rounded-full text-center bg-slate-50 border  px-1.5 py-1 absolute top-3 left-2 text-black font-sans font-semibold text-xs">
              {recomendation}
            </p>
          )}
          <p className="w-fit absolute top-3 right-2 cursor-pointer">
            {" "}
            <HeartIcon />{" "}
          </p>
        </div>
      </div>
      <div className="p-4 bg-transparent">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-gray-800 mb-1">{title}</h4>
          <div className="flex items-center gap-1 text-xs text-black font-normal">
            <StarIcon /> {rating}{" "}
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-1">{location}</p>
        <p className="text-xs text-gray-500 mb-2">Anfitrión: {host}</p>
        <p className="text-xs font-bold text-gray-800">
          {price} € <span className="font-light">noche</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
