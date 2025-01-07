import React from "react";

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Inicia sesión o regístrate</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Welcome Text */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            ¡Te damos la bienvenida a Airbnb!
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Te llamaremos o enviaremos un SMS para confirmar tu número. Se
            aplican las tarifas estándar de mensajes y datos.{" "}
            <span className="text-blue-600 cursor-pointer">
              Política de Privacidad
            </span>
            .
          </p>
        </div>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <div className="flex border border-gray-300 rounded-md">
            <select
              className="bg-gray-50 text-gray-700 text-sm border-none rounded-l-md px-4 py-2 focus:outline-none"
              defaultValue="España (+34)"
            >
              <option>España (+34)</option>
              <option>Estados Unidos (+1)</option>
              <option>México (+52)</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <input
              type="tel"
              placeholder="Número de teléfono"
              className="w-full px-4 py-2 text-gray-700 bg-gray-50 text-sm border-l border-gray-300 focus:outline-none rounded-r-md"
            />
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none">
            Continuar
          </button>
        </div>

        {/* Divider */}
        <div className="relative mt-6 text-center">
          <span className="absolute inset-x-0 top-1/2 bg-white px-2 text-sm text-gray-600 transform -translate-y-1/2">
            o
          </span>
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50 focus:outline-none">
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Continuar con Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50 focus:outline-none">
            <img
              src="https://img.icons8.com/ios-filled/24/000000/mac-os.png"
              alt="Apple"
              className="h-5 w-5 mr-2"
            />
            Continuar con Apple
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50 focus:outline-none">
            📧 Continuar con el correo electrónico
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50 focus:outline-none">
            <img
              src="https://img.icons8.com/color/24/000000/facebook-new.png"
              alt="Facebook"
              className="h-5 w-5 mr-2"
            />
            Continuar con Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
