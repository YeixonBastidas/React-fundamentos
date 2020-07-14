import React from 'react';

class App5 extends React.Component {
    state = {
        text : ''
    }

    manejador = (event) => {
        this.setState({
           text : event.target.value
        })
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    onChange={ this.manejador }
                >
                
                </input>
            <h1>{ this.state.text }</h1>
            </div>
        )
    }
}

 export default App5