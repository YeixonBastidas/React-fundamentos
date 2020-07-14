import React, { Component } from 'react';
import PubSub from 'pubsub-js'; // esta libreria comunica componentes bisnietos a componentes padres

const styles = {
    border : "1px solid black",
    padding: '2em'
}

class Hijo extends Component {
    state = {  }

    dispatchAlert = (e, message = 'Alerta desde el hijo 1') => {
        alert(message)
    }

    render() {
        const { num } = this.props
        return (
            <div style={styles}>
                <button onClick={this.dispatchAlert}>
                    Ejecutar funcion hijo
                </button>
                <br/>
                <br/>
                <button onClick={this.props.onAdd}>
                    Componente 1 ({num})
                </button>
            </div>
        );
    }
}

class Hijo2 extends Component {
    state = {  }

  
    render() {
        const { num } = this.props
        return (
            <div style={styles}>
                
                <button onClick={this.props.onAdd}>
                    Componente 2 ({num})
                </button>
            </div>
        );
    }
}

class Hijo3 extends Component {
    state = {  }
    render() {
        return (
            <div style={styles}>
                <h4>Hijo</h4>
                <Nieto/>
            </div>
        );
    }
}


class Nieto extends Component {
    state = {  }
    render() {
        return (
            <div style={styles}>
                <h4>Nieto</h4>
                <BisNieto/>
            </div>
        );
    }
}

class BisNieto extends Component {
    state = {  }

    handleBisnieto = () => {
        PubSub.publish('saludo', 'Hola desde el Bisnieto hasta el padre')

        alert(window.title)
    }
    componentDidMount() {
        PubSub.subscribe('saludoPadre', (e, data) => {
            alert(data)
        })
    }
    
    componentWillMount(){
        PubSub.unsubscribe('saludoPadre')
    }

    render() {
        return (
            <div style={styles}>
                <h4>Nieto</h4>
                <button onClick={this.handleBisnieto}>
                    Bisnieto
                </button>
            </div>
        );
    }
}

class App22 extends Component {
    state = { count1: 0, count2: 0 }
    hijo = React.createRef();

    handlerClick = () => {
        this.hijo.current.dispatchAlert(null, 'Hola desde el padre')
    }

    handleAdd1 = () => {
        this.setState({
            count1 : this.state.count1 + 1
        })
    }

    handleAdd2 = () => {
        this.setState({
            count2 : this.state.count2 + 2
        })
    }

    componentDidMount() {
        PubSub.subscribe('saludo', (e, data) => {
            alert(data)
        })

        window.title = 'Esta es la variable global'
    }

    handlePadre = () => {
        PubSub.publish('saludoPadre', 'Hola desde el padre hasta el bisnieto');
    }

    componentWillMount(){
        PubSub.unsubscribe('saludo')
    }

    render() {      
        
        const { count1, count2 }= this.state
        return (
            <div style={styles}>                
                <Hijo ref={this.hijo} num={count1} onAdd={this.handleAdd2}/>
                <br/>
                <Hijo2 ref={this.hijo2} num={count2} onAdd={this.handleAdd1}/>
                <br/>
                {/* ejecuta una funcion desde el padre hasta el hijo */}
                <button onClick={this.handlerClick}>Ejecutar funcion de hijo</button> 

                <hr/>

                <Hijo3/>
                <button onClick={this.handlePadre}>
                    Saludadon al Bisnieto
                </button>
                
            </div>
        );
    }
}

export default App22;