import React, { Component } from 'react';

const Saluda = (props) => {

    if(props.saluda){
        return(<div>Hola como estas?</div>)
    }

    return(<div>sin saludo</div>)
}

const App9 = () => (   
  
            <div>
                <Saluda  saluda={true} />
            </div>      
  
)

export default App9;