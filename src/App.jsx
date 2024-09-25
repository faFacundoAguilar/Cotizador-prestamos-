import React, { useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';
import Hero from './componentes/Hero';

function App() {
    const [cantidad, setCantidad] = useState(0);
    const [plazo, setPlazo] = useState("");
    const [total, setTotal] = useState(0);
    const [mostrarFormulario, setMostrarFormulario] = useState(false); // Nuevo estado

    const handleClear = () => {
        setCantidad(0);
        setPlazo("");
        setTotal(0);
    };

    return (
        <>
            <Header titulo="Cotizador de Préstamos..." />
            <div className="container mx-auto px-4 mt-8"> 
                <Hero setMostrarFormulario={setMostrarFormulario} />

                {mostrarFormulario && ( 
                    <div className="flex justify-between items-start gap-8 mt-8"> 
                        <div className="w-1/2 flex flex-col">
                            <Formulario 
                                cantidad={cantidad} 
                                setCantidad={setCantidad} 
                                plazo={plazo} 
                                setPlazo={setPlazo} 
                                setTotal={setTotal}
                            />
                        </div>
                        <div className="w-1/2 flex flex-col"> 
                            {total > 0 ? (
                                <Resultado total={total} cantidad={cantidad} plazo={plazo} onClear={handleClear} />
                            ) : (
                                <div className="flex-grow flex items-center justify-center"> 
                                    <p className="text-center text-xl text-gray-700">Calcula un préstamo para ver el resultado</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
