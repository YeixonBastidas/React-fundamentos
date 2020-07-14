import React, { Component } from 'react';
import propTypes from 'prop-types';

const styles = {
    border : "1px solid black",
    padding: '2em'
}


class List extends Component {
    state = {  }
    render() {
        const {list, render} = this.props
        return (
            <div style={styles}>
                {
                    list.map((x, index) => {
                        if(render)
                            return render(x, index)

                        return (
                            <li key={x.name}>
                                x.name
                            </li>
                        )
                    })
                }
            </div>
        );
    }
}

class Resize extends Component {
    static propTypes = {
        render: propTypes.func.isRequired
    }
    state = { width : window.innerWidth, heigth: window.innerHeight }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }

    componentWillMount(){
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({
            width : window.innerWidth, 
            heigth: window.innerHeight
        })
    }

    render() {
        const { render } = this.props
        const { width, heigth } = this.state
        return render( { width, heigth });
    }
}

class App24 extends Component {
    state = { 
        fruits: [
            { name: 'Fresa', price: 22 },
            { name: 'Mango', price: 18 },
            { name: 'Sandia', price: 24 },
            { name: 'Manzana', price: 12 },
        ]
     }

    render() {
        const { fruits } = this.state
        return (
            <div style={styles}>
                <List
                    list={fruits}
                    render={(data, index)=>(
                        <div>{index} - {data.name}</div>
                    )}
                />
                <hr/>
                <Resize
                    render={(data) => {
                        return(                            
                            <div>
                                width: { data.width }
                            </div>
                        )
                    }}
                />
            </div>
        );
    }
}

export default App24;

