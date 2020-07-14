import React, { useContext } from 'react';

// [Provider, consumer]
const MyContext = React.createContext()

const Header = () => {
    return(
        <div>
            <h1>Hook UseContext</h1>
        </div>
    )
}

const Ejemplo1 = () => {
    let [count, setState] = React.useState(0);
    const add = () => setState(count + 1);

    return (
        <div>
            <MyContext.Provider value={{
                count,
                add
            }}>
                <button onClick={add}>
                    Add ({count}) 
                </button>
                <hr/>
                <Hijo/>
            </MyContext.Provider>           

        </div>
    )
}

const Hijo = () =>{
    return(
        <div>
            <p>Hijo</p>
            <hr/>
            <Nieto/>
        </div>
    )
}

// esta es la forma tradicional
const NietoTradicional = () =>(
    <MyContext.Consumer>
        {(context) => (
            <div>
                <p>
                    Nieto {context.count}
                </p>
                <button onClick={context.add}>
                    add desde Nieto 
                </button>
            </div>
        )}        
    </MyContext.Consumer>
)

// esta es la forma con useCOntext
const Nieto = () =>{
    const {count, add} = useContext(MyContext);

    return(
            <div>
                <p>
                    Nieto {count}
                </p>
                <button onClick={add}>
                    add desde Nieto 
                </button>
            </div>
    )
}

const App29 = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Ejemplo1/>
            <hr/>
        </div>
    )
}

export default App29;