import React, { Component } from 'react';
import Chart from 'chart.js';

class Graficas extends Component {
    state = {  }
    grafica = React.createRef();

    componentDidMount() {
        var ctx = this.grafica.current.getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {

        return (
            <div>
                <canvas width="400" height="400" ref={this.grafica}></canvas>
            </div>
        );
    }
}

class Entrada extends Component {
    constructor(){
        super()

        this.entrada = React.createRef()
    }

    componentDidMount(){
        this.focus();
    }
    
    state = {  }
    
    focus = () => {
        this.entrada.current.focus();
    }

    blur = () => {
        this.entrada.current.blur();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.entrada}/>
                <button onClick={this.focus}>
                    Focus
                </button>
                <button onClick={this.focus}>
                    Blur
                </button>
            </div>
        );
    }
}

// pasar ref a componentes Hijos, solo funciona para componentes funcionales y no sabsdos en clases
const FancyInput =React.forwardRef((props, ref) => (
    <div>
        <input type="text" ref={ref} />
    </div>
))

class App16 extends Component {
    state = {  }
    refEntrada = React.createRef();

    componentDidMount() {
        console.log(this.refEntrada)
    }
    render() {
        return (
            <div>
                <h3>Uso de la Ref</h3>
                <hr/>
                <Entrada/>
                <h3>Reenvio de las Ref</h3>
                <hr/>
                <FancyInput ref={this.refEntrada}/>
                <h3>Uso de la Ref con libreria de terceros</h3>
                <hr/>
                <Graficas/>
                
            </div>
        );
    }
}

export default App16;