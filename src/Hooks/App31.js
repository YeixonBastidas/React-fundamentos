import React, { useReducer, useRef, useEffect } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook Ejemplo UseState, useEffect, useRef</h1>
        </div>
    )
}

const Fether = () =>{
    const [name, setName] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const entrada = useRef();

    useEffect(() => {
        // debounce
        setTimeout(() => {
            if(name === entrada.current.value) {
                // peticion
                fetch(`https://universidad-react-api-test.luxfenix.now.sh/products?name=${name}`)
                .then(x => 
                    x.json()
                    .then(result => {
                        setProducts(result.products) 
                    })
                )
            }
        }, 600)
        
    }, [name])

    const handleInput = (e) => setName(e.target.value)

    return(
        <div>
            <input
               type='text'
               onChange={handleInput} 
               ref={entrada}
            />

            <ul>
                {
                    products.map(x => (
                        <li key={x.id}>
                            {x.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const App31 = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Fether/>
            <hr/>
        </div>
    )
}

export default App31;