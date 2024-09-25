import React from 'react';

const Hero = ({ setMostrarFormulario }) => {
  return (
    <section className="w-full mt-12">
      <div className="w-full px-4 py-20 mx-auto text-left md:text-center md:w-3/4 lg:w-2/4">
        <p className="mb-2 text-base font-semibold text-purple-700">Comienza tu cotización ahora mismo.</p>
        <h2 className="mb-6 text-2xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">
          Calcula tu préstamo de manera rápida y sencilla. Ingresa el monto, selecciona el plazo y listo.
        </h2>
        <div className="mb-0 space-x-0 md:space-x-2">
          {/* Cambié el Link por un button para manejar el estado */}
          <button
            className="inline-flex items-center justify-center w-full mb-2 px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow sm:w-auto sm:mb-0 transition-colors duration-300"
            onClick={() => setMostrarFormulario(true)} // Al hacer clic, muestra el Formulario
          >
            Empezar
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
