import React from "react";

const WarningModal = ({onClose}) => {
        return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-96">
            <p className="text-center text-lg font-bold">Los alojamientos pueden tardar en cargar debido el pequeño retardo del Servidor de Render</p>
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