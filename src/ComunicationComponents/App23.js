import React, { Component } from 'react';

// {provider, cosumer}
const { Provider, Consumer} = React.createContext();

const styles = {
    border : "1px solid black",
    padding: '2em'
}

class Hijo extends Component {
    state = {  }

    

    render() {
        return (
            <div style={styles}>
                <p>Hijo</p>
                <Nieto/>
            </div>
        );
    }
}

class Nieto extends Component {
    state = {  }

    handleClick = () => {

    }

    render() {
        return (
            <Consumer>
                { (context) => (
                        <div style={styles}>
                            <p>Hijo</p>
                            <button onClick={context.addClick}>
                                Disparar ({context.click})
                            </button>
                            <br/>
                        </div>
                    )
                }
            </Consumer>            
        );
    }
}

class App23 extends Component {
    state = { click : 0 }

    addClick = () => {
        this.setState({
            click : this.state.click + 1
        })
    }

    render() {
        return (
            <Provider value={{
                    click : this.state.click,
                    addClick : this.addClick
            
                }}>
                <div style={styles}>
                    <Hijo/>
                </div>
            </Provider>
           
        );
    }
}

export default App23;