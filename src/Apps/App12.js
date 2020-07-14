import React, { Component } from 'react';

const Computacion = () => (
    <React.Fragment>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Teclado</li>
    </React.Fragment>
)

const Ropa = () => (
    <React.Fragment>
        <li>Playera</li>
        <li>Jeans</li>
        <li>Shorts</li>
    </React.Fragment>
)


class App12 extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Computacion/>
                <Ropa/>
            </div>
        );
    }
}

export default App12;