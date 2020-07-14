import React from 'react';
import './TarjetaFruta.css'

class TarjetaFruta extends React.Component{
    
    state  = {
        cantidad : 0
    }

    agregar (){
        this.setState({cantidad : (this.state.cantidad + 1)})
    }

    quitar (){
        this.setState({cantidad : (this.state.cantidad - 1)})
    }

    render() {
        const hasItems =  this.state.cantidad;        
        const dynamicClass =  `class1 ${hasItems ? 'class1-activa' : ''}`;
        return(
             <div className={dynamicClass}>
                <h3>{ this.props.name }</h3>
                <hr/>
                <div>cantidad {this.state.cantidad}</div>
                <button 
                    onClick={this.agregar.bind(this)}>
                    Agregar
                </button>
                <button 
                    onClick={this.quitar.bind(this)}>
                    Quitar
                </button>
                <p>Su valor es de: ${this.props.price}.</p>
                <p>Total: { this.props.price *  this.state.cantidad}</p>
            </div>  
        ) 
    }
}

export default TarjetaFruta;