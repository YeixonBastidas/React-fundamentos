import React, { Component } from 'react';


const frutas = [
    'fresas',
    'Manzana',
    'Sandia',
    'Kiwi',
    'Durazno',
    'Mango',
    'Piña'
]

const people =[
    {
        id : 1,
        name: 'Yeixon',
        color: ['Blanco', 'Moreno', 'Oscuro'],
        tamano: 175
    },
    {
        id : 2,
        name: 'Arley',
        color: ['Naranja', 'Rojo', 'Amarrillo'],
        tamano: 180
    }
]

const contact = [
    {id : 1, name: 'Yeixon', age: 25, color: 'Red'},
    {id : 2, name: 'Arley', age: 26, color: 'Blue'},
    {id : 3, name: 'Bogota', age: 27, color: 'Black'},
]

const images = [
    {
        author: {
            name: 'Yeixon',
            avatar: 'https://co.pinterest.com/pin/815010863786753811/?nic_v1=1aW9s932uWEdX18rDHuzXjzgg4VtSaKJMGVv5ImAH%2FNtFNyhHtcgYO3FFd%2FawUh5fg'
        },
        source: 'https://i.pinimg.com/736x/2f/50/09/2f50092b28f6dd89da3502ee448051f1.jpg',
        views: 153,
        id: 1
    },
    {
        author: {
            name: 'Arley',
            avatar: 'https://co.pinterest.com/pin/815010863786753811/?nic_v1=1aW9s932uWEdX18rDHuzXjzgg4VtSaKJMGVv5ImAH%2FNtFNyhHtcgYO3FFd%2FawUh5fg'
        },
        source: 'https://i.pinimg.com/736x/2f/50/09/2f50092b28f6dd89da3502ee448051f1.jpg',
        views: 153,
        id: 1
    }
]

const salesFuits = [
    {name: 'Mango', price: 500},
    {name: 'Fresa', price: 600},
    {name: 'Banano', price: 700},
    {name: 'Uva', price: 800}
]

const ImagesComponent = (props) => (
    <div>
        <img src={props.image.source}/>
    </div>
)

class App15 extends Component {
    state = { 
        user : {
            name: 'Yeixon Bastidas',
            country: 'Colombia',
            twitter: 'www.twitter.com',
            youtube: 'www.youtube.com'
        } 
     }

    selectFruit(item) {
        console.log(item)
    }

    render() {
        const { user } = this.state;
        const keys = Object.keys(user);

        return (
         <div>
            <div>
                 <h1>Listas Simples</h1>
                 <ul>
                    {
                        frutas.map((itemF) => (                        
                            <li>{ itemF }</li>                        
                        ))
                    }
                 </ul>                 
             </div>
            <br/>
            <div>
                <h1>Listas de objectos</h1>
                <div>
                    {
                        people.map((item) => (
                                <ul><li>{item.name}</li>
                                    <ul>
                                        {item.color.map((child) => (
                                                <li>{child}</li>                                                
                                            ))
                                        }
                                    </ul>
                                </ul>
                                
                        ))
                    }
                </div>
            </div>
            
            <di>
                <h3>Acceder a los valores de las listas</h3>
                
                <ul>
                    {
                        salesFuits.map((item) =>(
                            <li key={item.name}
                                onClick={this.selectFruit.bind(this, item)}
                            >
                                {item.name} - ${item.price}                                
                            </li>
                        ))
                    }
                </ul>

            </di>        

            <div>
                <h3>
                    Iterando propiedades de las lsitas de objetos
                </h3>
                <ul>
                    {
                        keys.map((items) => (
                                <li>
                                    { items }: { user[items]  }
                                </li>                                                    
                        ))
                    }
                    
                </ul>
            </div>
            
            <div>
                <h3> Keys en listas </h3>
                <ul>
                    {
                        contact.map((item) => (
                            <li id={item.id}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <h3>Componente hijo</h3>
                {
                    images.map((item)=>(
                        
                        <ImagesComponent
                            image={item}
                        />
                    ))
                }                
            </div>
         </div>   
        );
    }
}

export default App15;