import React, { Component } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook UseRef</h1>
        </div>
    )
}

const Ejemplo1 = () => {
    const entrada = React.useRef()

    const focus = () => entrada.current.focus();
    const blur = () => entrada.current.blur();
    return(
        <div>
            <input
                type='text'
                placeholder='Ingresa tu texto'
                ref={entrada}
            />
            <button onClick={focus}>
                Focus
            </button>
            <button onClick={blur}>
                Blur
            </button>
        </div>
    )
}

const App30 = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Ejemplo1/>
            <hr/>
        </div>
    )
}

export default App30;