import React, { Component } from 'react';

const styles = {
    border : "1px solid black",
    padding: '2em'
}

const withCounter = (Comp, confi) =>{
    return class extends Component{
        state = {
            num : confi.clicks
        }

        add = () => {
            this.setState({
                num : this.state.num + 1
            })
        }

        render() {
            return(
                <Comp
                    num={this.state.num}
                    add={this.add}
                />
            )
        }

    }
}

class App25 extends Component {
    state = {  }
    render() {
        const {num, add} = this.props
        return (
            <div style={styles}>
                <h1>HOC</h1>
                <h2>{num}</h2>
                <button onClick={add}>
                    Incrementar
                </button>
            </div>
        );
    }
}

export default withCounter(App25, {
    clicks: 100
});