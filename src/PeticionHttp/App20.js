import React, { Component } from 'react';
import Axios from 'axios';

class App20 extends Component {
    state = { 
        movie : {}

     }

    handlerSubmit = async (event) => {
        event.preventDefault();
        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=920e7b5c';
        await Axios.get(url,{
            params:{
                t:title
            }
        }).then(result => {
            this.setState({ movie: result.data})
        })
         
    }

    render() {
        const { movie } = this.state;
        return (
            <div>
                <h2>Buscador de peliculas</h2>
                <form onSubmit={this.handlerSubmit}>
                    <input 
                        type="text"
                        placeholder = "Nombre de la Pelicula"
                    />

                    <button>Buscar</button>
                </form>

                <div>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                    <img src={movie.Poster} alt='Poster'/>
                    
                </div>
            </div>
        );
    }
}

export default App20;