import React from 'react';
import TarjetaFruta  from "../componentes/TarjetaFruta/TarjetaFruta"; 

const App = () => {
    return (
    <div>
        <TarjetaFruta name='Fresa' price={ 500 }> </TarjetaFruta>
        <TarjetaFruta name='Naranja' price={ 800 } > </TarjetaFruta>
        <TarjetaFruta name='Piña' price={ 700 }> </TarjetaFruta>
    </div>)
}

export default App;