import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import queryString from 'query-string'
import './AppStyle.css'

const Hola= () => (
    <h1>
        Hi World
    </h1>
)

const Prodcutos= () => (
    <div>
        <h1>
            Productos
        </h1>
        <Link to='/productos/Gamer'>Gamers </Link>
        <br/>
        <Link to='/productos/Hogar/50'>Hogar</Link>
    </div>
    
)

const Home = (props) => {
    console.log(props)
    return (
    <h1>
        Home
    </h1>
    )   
}

const Categoria = ({match}) => {
    return (
    <h1>
        Categoria: {match.params.categoria} y el Id es: {match.params.id}
    </h1>
    )   
}

const Ropa = (props) => {
    console.log(props)
    //estos parametros son pasados po query string : http://localhost:3000/ropa?color=red&talla=M
    // const query = new URLSearchParams(props.location.search) //esta es la forma nativa para obtener los parametros
    // const color = query.get('color')
    // const talla = query.get('talla')
    const {color, talla} = queryString.parse(props.location.search) // uso de una libreria de terceros
    

    return (
        <div>
            <h1>
                Ropa                 
            </h1>
            <p>
                Color: {color}
            </p>
            <p>
                Talla: {talla}
            </p>
        </div>
    )   
}

const navStyles = {
    display: 'flex',
    justifyContent: 'space-around'
}

const routerActive = {
    color: 'orange'
}

const Navegation = () => (
    <nav style={navStyles}>
        <NavLink 
            to={{
                pathname: '/',
                search: '?ordenar=nombre',
                hash: '#hash-otro',
                state: {
                    name: 'JSON',
                    age: 25
                }
            }} 
            exact 
            activeStyle={routerActive}>
                Home 
        </NavLink>
        <NavLink 
            to='/hola' 
            activeClassName='navActive'>
                Hola 
        </NavLink>        
        <NavLink 
            to='/productos' 
            activeStyle={routerActive}>
                Productos 
        </NavLink>
        <NavLink 
            to='/ropa' 
            activeStyle={routerActive}>
                Ropa 
        </NavLink>
    </nav>
)

const App60 = ()  => {
    return (
        <BrowserRouter>
            <Navegation/>
            <Route path='/' exact component={Home}/>
            <Route path='/hola'  render={Hola}/>
            <Route exact path='/productos'>
                {({match}) => {
                    if(!match) return null; // permite q no renderice el componente hijo
                    return(
                        <Prodcutos/>
                    )
                }}
                
            </Route>
            <Route path='/productos/:categoria/:id?' render={Categoria}/>
            <Route path='/ropa' render={Ropa}/>
        </BrowserRouter> 
    );
    
}

export default App60;