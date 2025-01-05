import React from "react";
import rural from "../icons/filterIcons/rural.jpg";
import cabanaIcon from "../icons/filterIcons/cabanaIcon.jpg";
import singular from "../icons/filterIcons/singular.jpg";
import treehouse from "../icons/filterIcons/treehouse.jpg"; 
import floathouse from "../icons/filterIcons/floathouse.jpg";
import Icons from "../icons/filterIcons/Icons.webp";
import breakfast  from "../icons/filterIcons/breakfast.jpg";
import domo from "../icons/filterIcons/domo.jpg";
import farm from "../icons/filterIcons/farm.jpg";



const filters = [
  { img: rural, label: "Casas rurales" },
  { img: Icons, label: "Iconos" },
  { img: cabanaIcon, label: "Cabañas" },
  { img: treehouse, label: "Casas del árbol" },
  { img: breakfast, label: "Desayuno incluido" },
  { img: singular, label: "Singulares" },  
  { img: floathouse, label: "Casas flotantes" },
  { img: domo, label: "Casas Domo" },
  { img: farm, label: "Granjas" },

  
  
];

const Filters = () => {
  return (
    <div className="flex justify-center overflow-x-auto px-4 py-3   bg-white " >
      {filters.map((filter, index) => (
        <div
          key={index}
          className="flex flex-col items-center  justify-center px-4 py-1 cursor-pointer opacity-70 hover:opacity-100 transition ease-in-out  hover:border-b-2 hover:border-grey-500"
        >
          <img src={filter.img} alt={filter.label} className="w-5 h-5" />
          <span className="text-xs text-gray-600">{filter.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Filters;
