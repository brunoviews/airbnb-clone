import React from "react";
import { useState, useEffect } from "react";

const WarningModal = ({ onClose }) => {
  const [counter, setCounter] = useState(50);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onClose();
    }
  }, [counter, onClose]);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <p className="text-center text-lg font-bold">
          Cargando backend en <strong>Render</strong> {counter} segundos
        </p>
        <button
          onClick={onClose}
          className="bg-black text-white rounded-lg p-2 mt-4 w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default WarningModal;
