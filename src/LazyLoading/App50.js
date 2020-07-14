import React, { useState, lazy, Suspense } from 'react';

// code spliting - Importacion dinamica
const Image = lazy(() => import('./Components/Image'))


const App50 =  () =>  {
  const [ show, setShow] = useState(false);

  const actionLabel = () => setShow(!show)

    return (
        <div>
            <button onClick={actionLabel}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>
            { show && ( 
                <Suspense fallback={<h1>Cargando...</h1>}>
                    <Image/>
                </Suspense>
                
            ) }
            
        </div>
     );
    
}

export default App50;