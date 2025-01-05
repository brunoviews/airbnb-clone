import React from "react";
import AirbnbIcon from "../icons/AirbnbIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SearchIcon from "../icons/SearchIcon";
import EarthIcon from "../icons/EarthIcon";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4  bg-white">
        {/* Logotipo */}
        <div className="flex items-center space-x-2 hover:text-[#FF385C] cursor-pointer">
          <AirbnbIcon />
        </div>

        {/* Acciones */}
        <div className="flex items-center space-x-4">
          <a
            href="#host"
            className="font-semibold text-gray-600 text-xs hover:bg-gray-50 rounded-full px-4 py-2"
          >
            Pon tu casa en Airbnb
          </a>

          {/* Idioma */}
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Cambiar idioma"
          >
            <EarthIcon />
          </button>

          {/* Menú perfil */}
          <button className="flex items-center border p-3 rounded-full hover:shadow-md" onClick={toggleMenu}>
            
            <span className="mr-2">☰</span>
            <ProfileIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-14 right-10 mt-3 w-48 bg-white border rounded-lg shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Regístrate</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Iniciar sesión</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tarjetas regalo</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pon tu casa en Airbnb</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ofrece una experiencia</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Centro de ayuda</a>
            </div>
          )}
        </div>
      </header>

      {/* Barra de búsqueda */}
      <div className="flex justify-center items-center  bg-white py-4">
        <div className="flex w-fit  justify-center items-center  border rounded-full px-6 py-2 shadow-lg">
          {/* Destino */}
          <div className="flex flex-col text-sm px-2">
            <label className="font-semibold text-gray-600 text-xs ">Destino</label>
            <input
              type="text"
              placeholder="Buscar destinos"
              className="outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="border-l-2 h-6 mx-2"></div>

          {/* Llegada */}
          <div className="flex flex-col text-sm px-2">
            <label className="font-semibold text-gray-600 text-xs">Llegada</label>
            <input
              type="text"
              placeholder="Introduce la fecha"
              className="outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="border-l h-6 mx-2"></div>

          {/* Salida */}
          <div className="flex flex-col text-sm px-2">
            <label className="font-semibold text-gray-600 text-xs">Salida</label>
            <input
              type="text"
              placeholder="Introduce la fecha"
              className="outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="border-l h-6 mx-2"></div>

          {/* Viajeros */}
          <div className="flex flex-col text-sm px-2">
            <label className="font-semibold text-gray-600 text-xs">Viajeros</label>
            <input
              type="text"
              placeholder="Añade viajeros"
              className="outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Botón de búsqueda */}
          <button
            className="ml-4 bg-[#FF385C] flex items-center justify-center text-white p-2 rounded-full hover:bg-gradient-to-r from-[#FF385C] to-[#FF78A4]"
            aria-label="Buscar"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
