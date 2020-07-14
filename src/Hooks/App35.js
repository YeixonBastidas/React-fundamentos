import React, { useState, useCallback } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook CallBack</h1>
        </div>
    )
}

const getColor = ()=> `#${Math.random().toString(16).slice(2,8)}`

const Button = React.memo(({callback, children}) => {
console.log(getColor())
    let style = {
        padding: '1em',
        fontSize: '20px',
        background: getColor()
    }

    return(
        <div>
            <button style={style}
                onClick={callback}>
                {children}
            </button>
        </div>
    )
})

const App35 = () => {
    const [a, setA]= useState(0);
    const [b, setB]= useState(0);

    // evita renderizar el componente Button y solo actualiza la funcion deseada
    const incremetA = useCallback(() =>{
        setA((a) =>  a + 1)
    }, [])

    const incremetB = useCallback(() =>{
        setB((b) =>  b + a)
    }, [a])

    return(
        <div>
            <Header/>
            <hr/>
            <Button callback={incremetA}>
                Incrementa A
            </Button>
            A: {a}
            
            <hr/>
            <Button callback={incremetB}>
                Incrementa B
            </Button>
            B: {b}
            <hr/>

        </div>
    ) 
}

export default App35;