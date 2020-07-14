import React, { useState, useEffect, useDebugValue } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook Personalizados</h1>
        </div>
    )
}

// siempre debe llevar la palabra use 
const useSizeHook = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [heigth, setHeigth]= useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeigth(window.innerHeight);
    }

    useDebugValue('Mi primer hook personalizado')

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // como es un hook personalizado se tiene de poner un return 
    return {
        width,
        heigth
    }

}

const App37 = () => {    

    const { width, heigth } = useSizeHook()

        return (
               <div>
                   <Header/>
                   <hr/>
                   <h1>
                        width: {width}
                        heigth: {heigth}
                   </h1>
               </div>
        ); 
}

export default App37;