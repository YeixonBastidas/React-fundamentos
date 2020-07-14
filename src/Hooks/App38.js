import React, { useState, useEffect, useDebugValue } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook Personalizados para peticiones HTTP</h1>
        </div>
    )
}

// siempre debe llevar la palabra use 
const useFecth = (url, initialState = []) => {
    
    const [data, setData] = useState(initialState)
    const [isfecthing, Setisfecthing] = useState(true)

    useEffect(()=>{
        fetch(url)
        .then(x => x.json())
        .then(result => {
            setData(result)
            Setisfecthing(false)
        })
    },[url])

    return [data, isfecthing]

}

const App38 = () => {   
    const isArray = true 
    // const [data, isfecthing] = useFecth('https://jsonplaceholder.typicode.com/users/6', {})
    const [data, isfecthing] = useFecth('https://jsonplaceholder.typicode.com/users/', [])


        return (
               <div>
                   <Header/>
                   {isfecthing && <h2>Cargando...</h2>}
                   <hr/>
                  
                   {
                       isArray ?
                        <ul>
                        {
                            data.map(x =>(
                                <li key={x.id}>
                                    {x.name}
                                </li>
                            ))
                        }
                        </ul>
                        :
                        <p>{data.name}</p>
                   }
                  
               </div>
        ); 
}

export default App38;