import React, { useState } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook Memo</h1>
        </div>
    )
}

// solo renderiza el componente que sufrio cambios
const Counter = React.memo((props) => {
    console.log('Render Counter')
    return(
        <div>
            <h1>
                {props.count}
            </h1>
        </div>
    )
})

const Title = React.memo((props) => {
    console.log('Render Texts')
    return(
        <div>
            <h1>
                {props.text}
            </h1>
        </div>
    )
})

// ejemplo para cuando las props son objectos anidados
const TitleNested = React.memo((props) => {
    console.log('Render Texts anidados')
    return(
        <div>
            <h1>
                {props.info.text}
            </h1>
        </div>
    )
}, (prveProp, nextProp) => { // creamo el propio algoritmo de diferenciacion

    // si retorna true no se renderiza
    // si retorna false se renderiza

    return prveProp.info.text === nextProp.info.text
})

const Ejempli1 = () => {
    const [ title, setTitle ] = useState('');
    const [ count, setCount ] = useState(0);

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    const add = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <input
                type='text'
                onChange={handleInput}
            />
            <button onClick={add}>
                Add
            </button>

            <Counter count={count}/>
            <Title text={title}/>
            <TitleNested
                info={{
                    text: title
                }}
            />

        </div>
    )
}

const App34 = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Ejempli1/>
            <hr/>
        </div>
    )  
}

export default App34;