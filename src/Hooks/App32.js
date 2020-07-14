import React, { useReducer } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook UseReduce</h1>
        </div>
    )
}


const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' : 
            return {
               ...state,
               count :  state.count + 1
            }
        case 'DECREMENT' : 
            return {
                ...state,
               count :  state.count - 1
            }
        case 'SET_TITLE' : 
            return {
                ...state,
               title :  action.title
            }
        default:
            return  state           

    }
}

const Ejemplo1 = () => {

    let [state, dispatch] = useReducer(reducer, {
        count : 0,
        title: 'Hola'
    });

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    const decrement = () => {        
        dispatch({type: 'DECREMENT'})
    }

    const handleTitle = (e) => {
        dispatch({type: 'SET_TITLE', title: e.target.value})
    }

    return(
        <div>
            <input
                onChange={handleTitle}
                value={state.title}
            />
           <button onClick={increment}>
              Increment
           </button>
           <button onClick={decrement}>
               Decrement
           </button>

    <h2>{state.count} - {state.title}</h2>
        </div>
    )
}

const App32 = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Ejemplo1/>
            <hr/>
        </div>
    )
}

export default App32;