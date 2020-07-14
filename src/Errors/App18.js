import React, { Component } from 'react';

class Boton extends Component {
    state = { 
        dipararErorr : false
     }

    dispatchError = ()=>{
        this.setState({
            dipararErorr : true
        })
        
    }
    render() {
        if(this.state.dipararErorr){
            throw new Error('El preceso fallo')
        }

        return (
            <button onClick={this.dispatchError}>

                Bonton con bug
            </button>
        );
    }
}

class ControlErrores extends Component {
    state = { tieneError : false }

    componentDidCatch() {
        this.setState({
            tieneError : true
        })
        
    } 

    render() {

        if (this.state.tieneError) {
            return (
                <div>
                    Algo salio mal muy mal 
                </div>
            )
        }
        return this.props.children
    }
}


class App18 extends Component {
    state = {  }


    render() {
        return (
            <div>
                <ControlErrores>
                 <Boton />
                </ControlErrores>
                
            </div>
        );
    }
}

export default App18;