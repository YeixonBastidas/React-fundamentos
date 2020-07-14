import React, { Component } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook UseState</h1>
        </div>
    )
}

const App26_1 = () =>{
    // se tiene el valor inicial de 0, se obtiene la funcion que ejecutara
   const [click, setClicks] = React.useState(0); // importamos el Hook

    return(
            <div>
                <h2>Hook normal</h2>
                <button onClick={()=>{
                    setClicks(click + 1)
                }}>
                    Dar click ({click})
                </button>

            </div>
    )
}

const App26_Boolean = () =>{
    // se tiene el valor inicial de 0, se obtiene la funcion que ejecutara
   let [isActive, setActive] = React.useState(false); // importamos el Hook

    return(
            <div>
                <h2>Hook con Boleans</h2>
                <button onClick={()=>{
                    setActive(!isActive)
                }}>
                    Dar click { isActive ? 'Activo' : 'Inactivo'}
                </button>

            </div>
    )
}

const App26_WithObjects = () =>{
    // se tiene el valor inicial de 0, se obtiene la funcion que ejecutara
   const [state, setState] = React.useState(
       {
           clicks : 0,
           title : ''
       }
   ); // importamos el Hook

   const handleInput = (e) =>{
     setState({
         ...state,
         title : e.target.value
     })

   }

    return(
            <div>
                <h2>Hook Usando Objectos</h2>
                <button onClick={()=>{
                        setState({                            
                            ...state,
                            clicks : state.clicks + 1
                        })
                    }}>
                    Dar click {state.clicks}
                </button>
                <input 
                    type='text'
                    value={state.title}
                    onChange={handleInput}
                    />
                    <p>{state.title}</p>
            </div>
    )
}

class App26 extends Component {
    
    render() {
        return (
               <div>
                   <Header/>
                   <hr/>
                   <App26_1/>
                   <hr/>
                   <App26_Boolean/>
                   <hr/>
                   <App26_WithObjects/>
                   <hr/>
               </div>
        );
    }
}

export default App26;