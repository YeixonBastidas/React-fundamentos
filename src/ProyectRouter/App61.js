import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
const isAuth = true;

const Home = () => {
    return (
    <h1>
        Home
    </h1>
    )   
}

const Perfil = () => {
    return isAuth ? (
        <h1>
            Perfil
        </h1>
        ) 
    :  <Redirect to='/login'/>
}

const Login = () => {
    return (
    <h1>
        Login
    </h1>
    )   
}

const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    lineHeight: 3
}

const routerActive = {
    color: 'orange'
}

const NavegacionImperativa = ({history}) => {
    return(
        <div>
            <button onClick={history.goBack}>
                Atras
            </button>
            <button onClick={history.goForward}>
                Adelante
            </button>
        </div>
    )
}

const Navegation = () => (
    <nav style={navStyles}>
        <NavLink to='/'exact activeStyle={routerActive}>Home </NavLink>
        <NavLink to='/perfil' activeStyle={routerActive}>Perfil </NavLink>        
        <NavLink to='/login'  activeStyle={routerActive}>Login </NavLink>
    </nav>
)

const App61 = ()  => {
    return (
        <BrowserRouter>
            <Navegation/>
                <Route render={NavegacionImperativa} /> 
                <Route path='/' exact render={Home}/>
                <Route path='/perfil' render={Perfil}/>
                <Route path='/login' render={Login}/>               
                     
        </BrowserRouter> 
    );
    
}

export default App61;