import React, { Component } from 'react';

class EjemContructor extends Component {
    constructor(props){
        super(props) // siempre se pasan las props para que funcionen correctamente 

        this.state = {
            name : props.name
        }       

    }

   
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p ref={this.p}></p>
            </div>
        );
    }
}

class EjemDidMoun extends Component {
    // es especial apra peticiones HTTP 
    // tabmien se usa para Event listener
    // es similar al OnInit
    // se ejecuta una sola vez despues de que se contruye todo el dom
    componentDidMount() {
        window.addEventListener('resize', ()=> {
            console.log(window.innerHeight)
        })
    }
    
    render() {
        return (
            <div>
                <h1>DivMOunt</h1>
            </div>
        );
    }
}

class EjemDidUpdate extends Component {
    state = { id : 0 }

    // se ejecuta cuando el componente sufre algun cambio
    // tener cuidado por q se puede generar un bluque infinito
    componentDidUpdate(prevProps, preState){
        console.log(prevProps, preState)
        if(prevProps != preState){
            alert("cambios")
        }
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
                <p>{this.state.id}</p>
            </div>
        );
    }
}

class EjemWillUnMOunt extends Component {
    state = {  }

    // se ejecuta cuando se destruye el componente 
    

    render() {
        return (
            <div>

            </div>
        );
    }
}


class App21 extends Component {
   
    state = {
        id : 1
    }

    aumentar = () => {
       this.setState( state =>({
           id: state.id + 1
       })) 
    }
   render() {

        return (
            <div>
                <h1>Ciclos de vida</h1>
                <EjemContructor name='PruebaCOnstructos'/>
                <hr/>
                <EjemDidMoun/>
                <hr/>
                <button onClick={this.aumentar}>aumentar</button>
                <EjemDidUpdate idUser={this.state.id}/>
            </div>
        );
    }
}

export default App21;