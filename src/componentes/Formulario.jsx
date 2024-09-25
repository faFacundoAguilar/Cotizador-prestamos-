import React, { useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, setTotal }) => {
    const [error, setError] = useState(false);

    const calcularPrestamo = (e) => {
        e.preventDefault();
        if (cantidad === 0 || plazo === "") {
            setError(true);
            return;
        }
        setError(false);

        const total = calcularTotal(cantidad, plazo);
        setTotal(total);
    };

    return (
        <form onSubmit={calcularPrestamo} className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg min-h-[400px] ml-8 border-4 border-purple-500">  
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Calculadora de préstamos</h2>
            <div className="flex flex-wrap gap-6">
                <div className="w-full">
                    <label className="block mb-2 text-lg text-gray-700">Importe del préstamo</label>  
                    <input
                        type="number"
                        placeholder="E.j.: 3000"
                        onChange={(e) => setCantidad(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"  
                    />
                </div>
                <div className="w-full">
                    <label className="block mb-2 text-lg text-gray-700">Plazo de amortización</label> 
                    <select
                        onChange={(e) => setPlazo(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg" 
                    >
                        <option value="">Select</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
            </div>
            <div className="mt-6">
                <input
                    type="submit"
                    value="Calcular"
                    className="w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer text-lg font-bold" 
                />
            </div>
            {error && <p className="mt-6 text-center text-red-500 text-lg">Todos los campos son obligatorios..</p>}  
        </form>
    );
}

export default Formulario;
