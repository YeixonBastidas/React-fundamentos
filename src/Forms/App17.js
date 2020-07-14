import React, { Component } from 'react';
import { controllers } from 'chart.js';


class InputNoControlado extends Component {
    
    
    handleSubmit = (event) =>{
        event.preventDefault();
        const nombre = event.target[0].value;
        const email = event.target[1].value;

        this.props.onSend({nombre, email});
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='name' >Nombre </label>
                    <input type="text" id="name" placeholder='nombre'/>
                </p>
                <p>
                    <label htmlFor='email'>Email </label>
                    <input type="text" id="email" placeholder='email'/>
                </p>                
               
                <button>
                    Click
                </button>
            </form>
        )
    }
}

class InputsControlados extends Component {
    state = { 
        text : '',
        tieneError: false
     }

    actualizatext = (event) =>{
        const text = event.target.value;
        const tieneError = text !== '' && text.length < 5

        console.log(text)
        this.setState({text, tieneError})

        // obteniendo datos del padre

        this.props.onChange(this.props.name, text)
    }

    render() {
        const styles = {
            border :  this.state.tieneError ? '1px solid red' : '1px solid #E8E8E8',
            padding : '0.3em 0.6em',
            outline : 'none'
        }

        return (
            <div>
                <input type="test" 
                       value={this.state.text}
                       onChange={this.actualizatext}
                       style={styles}
                       placeholder={this.props.placeholder}
                       />
            </div>
        );
    }
}

class Options extends Component {
    state = {
        techs: ['React']
     }

    handleChange = (event)=> {
        const techs = Array.from(
            event.target.selectedOptions
        ).map(x => x.value)

         this.setState({
            techs 
        })
        
       console.log(techs)
    }

    render() {
        return (
            <div>

                <h1>Select {this.state.techs}</h1>

                <form>
                    <select 
                        value={this.state.techs} 
                        onChange={this.handleChange}
                        multiple
                        >
                        <option value='Angular'>Angular</option>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Vanilla'>Vanilla</option>
                    </select>
                </form>

                <ul>
                    {
                        this.state.techs.map(x => (
                            <li key={x}>
                                {x}
                            </li>
                        ))
                    }
                   
                </ul>

            </div>
        );
    }
}

class CheckBox extends Component {
    state = { 
        active : false
     }

     handleChange = (event) =>{
        this.setState({
            active : event.target.checked
        })
     }

    render() {
        return (
            <div>
                <h1>CheckBox</h1>

                <form>
                    <input type="checkbox" 
                            checked={ this.state.active}
                            onChange={this.handleChange}/>
                </form>                
            </div>
        );
    }
}


class App17 extends Component {
    state = { 
        name: '',
        email: ''
     }

    send = (data) => {
        console.log(data)
    }

    actualizar = (name, text) => {

        this.setState({
            [name] : text
        })

        console.log(text)
    }

    render() {
        return (
           <div>
               <h3>Inputs No controlados</h3>
                <InputNoControlado 
                        onSend={this.send}
                />
                <hr/>
               <br />

               <h3>Inputs controlados</h3>
                <InputsControlados 
                        onChange={this.actualizar}
                        name='name'
                        placeholder='Nombre completo'
                    />
                <InputsControlados 
                        onChange={this.actualizar}
                        name='email'
                        placeholder='Tu Email'
                    />
                    <h3>Name: {this.state.name}</h3>
                    <h3>Email: {this.state.email}</h3>
                <hr/>
               <br />               
               <Options />
               <hr/>
               <br />
               <CheckBox />

           </div> 
        );
    }
}

export default App17;