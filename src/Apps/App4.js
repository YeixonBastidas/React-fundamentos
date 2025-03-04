import React from 'react';

const styles = {
    height : '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}

class App4 extends React.Component {

    state = {
        x: 0,
        y: 0
    }

    manejador = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return(
            <div style={styles}
                onMouseMove={this.manejador}
            >
                <div>x: { this.state.x }</div>
                <div>Y: { this.state.y }</div>
            </div>
        )
    }
}



export default App4