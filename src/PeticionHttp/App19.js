import React, { Component } from 'react';

class App19 extends Component {
    state = {
        users : [],
        cargando: true
      }

    componentDidMount() {
        

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((result) => {
            result.json()
                 .then(users => {
                     this.setState({
                        users,
                        cargando : false
                     })
                 })
        })

    }
    render() {
        if(this.state.cargando){
            return <h1>cargando info...</h1>
        }

        return (
            <div>
                <h1>
                    Peticiones HTTP
                </h1>
                <h2>{this.state.text}</h2>
                <ul>
                    {
                        this.state.users.map(x =>(
                            <li key={x.id}>
                                { x.name }
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default App19;