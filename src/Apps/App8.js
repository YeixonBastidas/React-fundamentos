import React, { Component } from 'react';
import './styles.css'

class Hijo extends Component {
    state = {  }
    SaludaPadre = () => {
        this.props.onSaluda("hola padre")
    }
    render() {
        return (
           <div className='box red'>
               <h2>Hijo</h2>
               <button onClick={this.SaludaPadre}>
                    Boton
               </button>
           </div> 
        );
    }
}

class App8 extends Component {
    state = { name : '' }
    menejador = (saludo) => {
        alert(saludo)
        this.setState({name : saludo })
    }

    render() {
        return (
           <div className='box blue'>
               <Hijo
                onSaluda={this.menejador}
               />

            <h1>{this.state.name}</h1>
           </div> 
        );
    }
}

export default App8;