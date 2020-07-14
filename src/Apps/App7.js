import React, { Component } from 'react';


class PressitenciaEventos extends Component {
    state = { color: 'red' }

    handlerchange = (event) => {
        const color = event.target.value;
        this.setState(state => ({
            color
        }))
    }

    render() {
        return (
            <div>
             <input
                type="text"
                onChange={this.handlerchange}
             />

             <h1
                style= {{color : this.state.color }}
             >
                 { this.state.color }
             </h1>

            </div>
        );
    }
}

const App7 = () => (
    
    <div>
        <PressitenciaEventos/>
    </div>
)

export default App7;

