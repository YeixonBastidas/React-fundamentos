import React, { Component } from 'react';

const Title = (props) => {
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: props.uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }
    console.log(props.children)
    return(
        <h1 style={styles}>{props.children}</h1>        
    )
}

class App11 extends Component {
    state = { uiColor: 'purple' }
    render() {
        const { uiColor } = this.state
        return (
            <div>
                <Title uiColor={uiColor} 
                >
                    Json <em>Bogota</em>
                </Title>  
            </div>
        );
    }
}

export default App11;