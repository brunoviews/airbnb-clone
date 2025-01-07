import React from "react";
import rural from "../icons/filterIcons/rural.jpg";
import cabanaIcon from "../icons/filterIcons/cabanaIcon.jpg";
import singular from "../icons/filterIcons/singular.jpg";
import treehouse from "../icons/filterIcons/treehouse.jpg";
import floathouse from "../icons/filterIcons/floathouse.jpg";
import Icons from "../icons/filterIcons/Icons.webp";
import breakfast from "../icons/filterIcons/breakfast.jpg";
import domo from "../icons/filterIcons/domo.jpg";
import farm from "../icons/filterIcons/farm.jpg";

const filters = [
  { key: "rural", img: rural, label: "Casas rurales" },
  { key: "icon", img: Icons, label: "Iconos" },
  { key: "cabin", img: cabanaIcon, label: "Cabañas" },
  { key: "treehouse", img: treehouse, label: "Casas del árbol" },
  { key: "breakfast", img: breakfast, label: "Desayuno incluido" },
  { key: "singular", img: singular, label: "Singulares" },
  { key: "float", img: floathouse, label: "Casas flotantes" },
  { key: "domo", img: domo, label: "Casas Domo" },
  { key: "granja", img: farm, label: "Granjas" },
];

const Filters = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex overflow-x-auto px-4 py-2 justify-center items-center border-b bg-white">
      {filters.map((filter) => (
        <div
          key={filter.key}
          className={`flex flex-col items-center justify-center px-4 cursor-pointer ${
            activeFilter === filter.key ? "text-[#FF385C]" : "text-gray-600"
          }`}
          onClick={() => setActiveFilter(filter.key)}
        >
          <img src={filter.img} alt={filter.label} className="w-5 h-5" />
          <span className="text-sm">{filter.label}</span>
        </div>
      ))}
      <button
        onClick={() => setActiveFilter(false)}
        className="bg-black opacity-90 hover:opacity-100  text-white text-sm font-semibold rounded-lg p-2 "
      >
        Mostrar Todos
      </button>
    </div>
  );
};

export default Filters;
