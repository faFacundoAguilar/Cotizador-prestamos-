import React from 'react';

const Resultado = ({ total, cantidad, plazo, onClear }) => {
    return ( 
        <div className="flex justify-center items-start mt-10 "> 
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full border-4 border-purple-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cotización del préstamo</h2>
                <div className="text-lg text-gray-800 mb-2">
                    <p><span className="font-semibold">Importe solicitado:</span> $ {cantidad}</p>
                    <p><span className="font-semibold">Plazo:</span> {plazo} months</p>
                    <p><span className="font-semibold">Pago mensual:</span> $ {(total / plazo).toFixed(2)}</p>
                    <p><span className="font-semibold">Total a pagar:</span> $ {total.toFixed(2)}</p>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={onClear}
                        className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 mt-4"
                    >
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resultado;
