import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook UseImperativeHandle</h1>
        </div>
    )
}


const FancyInput = forwardRef((props, ref) => {
    const [text, setText] = useState('********')
    const entrada = useRef()

    // dotos los metodos que estan dentro useImperativeHandle se vuelven globales para todos los componentes
    useImperativeHandle(ref, () => 
        ({
            dispatchAlert: () => {
                alert('Hola')
            },
            setParraGraph: (mensaje) => {
                setText(mensaje)
            },
            focusINput: () => {
                entrada.current.focus();
            }

        })
    )
    return(
        <div>
            <h2>{text}</h2>
            <input
                type='text'
                ref={entrada}
            />
        </div>
    )
})

const Ejemplo1 = () => {

    const fancyInput = useRef();

    /// ejeto el metodo de la ferencia ya que esta global
    const handleClick = () => {
        fancyInput.current.setParraGraph('Hola desde el principal hasta el hijo');
        fancyInput.current.focusINput()
    }

    return(
        <div>
            <FancyInput ref={fancyInput}/>
            <button onClick={handleClick}>
                DIspatch
            </button>
        </div>
    )
}

const App33 = () => {
        return (
            <div>
                <Header/>
                <hr/>
                <Ejemplo1/>
                <hr/>
            </div>
        );
}


export default App33;