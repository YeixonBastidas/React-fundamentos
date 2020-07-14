import React, { Component } from 'react';
import './Commun/Variables';

class Login extends Component {
    state = { error : false }

    handleSubmit = (event) =>{
        event.preventDefault();
        if(event.target[0].value == '' && event.target[1].value == '') {
            this.setState({error:true})
            return
        }
        const user = event.target[0].value;
        const password = event.target[1].value;

        this.props.onSend({user, password});
    }

    render() {
        const styleError = {
            color :  'red',
        }

        return (            
           <div>
               <h1>
                    ArandaSoft
               </h1>

               <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor='user' >Usuario * </label></td>
                                <td><input type="text" id="user" maxLength='30' placeholder='Usuario'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='password'>Contraseña * </label></td>
                                <td><input type="password" id="password" maxLength='7' placeholder='*******'/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> <button> Iniciar Sesión </button> </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>  { this.state.error ? <p style={styleError}>Por favor digite los campos requeridos *</p> : null}  </td>
                            </tr>
                        </tbody>
                    </table>             
                
                    
                </form> 
           </div>
        );
    }
}

const Header = (prop) => { 
    const { userAddress, userAge, userEstatus, userId, userLoginName, userMail, userNames, userPhone, profileId} = prop.data;
    const styleTable = {
        border: '1px solid black',
        borderCollapse: 'collapse',
        width: '100%',
        textAlign: 'left'
    }
    return(
        <table style={styleTable}>
            <thead>
                <tr>
                    <td><b>Usuario</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Dirección</b></td>
                    <td><b>Teléfono</b></td>
                    <td><b>Email</b></td>
                    <td><b>Edad</b></td>
                    <td><b>Rol</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{userLoginName}</td>
                    <td>{userNames}</td>
                    <td>{userAddress}</td>
                    <td>{userPhone}</td>
                    <td>{userMail}</td>
                    <td>{userAge}</td>
                    <td>{profileId}</td>            
                </tr>
            </tbody>
        </table> 
        
        )
}

const Welcome = (prop) => {
    const styles = {
        textAlign : 'center'
    }
    if(prop.data != null){
        
        return(
            <div>
                <hr/>
                <h1 style={styles}>
                    Bienvenido
                </h1>
            </div>
        )
    }

    return(
        <div></div>
    )
}

class CrudUsers extends Component {
    state = { allUsers : [],  allUsersBackup : [], userUpdate : null, IscreateUser : false, IsupdateUser: false }

    getAllUsers(){
        fetch(`${global.config.Url}${global.config.ControllerUser}`)
        .then((result) => {
            result.json()
                 .then(users => {
                    if(!users.dataError) {
                        this.setState({
                            allUsersBackup : users['objectResult'],
                            allUsers :  users['objectResult']
                         })                         
                    } else {
                        this.setState({
                            allUsersBackup : [],
                            allUsers :  []
                         })
                        alert("No se encontraron usuarios");
                    }     
                 })
        })
    }

    componentDidMount() {   
        this.getAllUsers();
    }

    SendData = (data) => {              
        this.setState({
            userUpdate : data,
            IscreateUser : false,
            IsupdateUser : true
        })
    }

    DeleteUser = (UserId) => {
        fetch(`${global.config.Url}${global.config.ControllerUser}/?userId=${UserId}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((result) => {
            result.json()
                 .then(users => {
                    if(!users.dataError) {
                        this.setState({
                            IsupdateUser : false,
                            IscreateUser: false
                        })  
                        alert("Usuario Eliminado");    
                        this.getAllUsers();             
                    } else {                        
                        alert("No se encontro el usuario que desea Eliminar");
                    }     
                 })
        })
    }

    updateUser = (data) => {     
        const formsIsValid = this.validateObject(data); 
        if(formsIsValid != '') {
            alert(`Por favor digite la siguiente información: ${formsIsValid}`);
            return;
        }        
        data.userEstatus = parseInt(data.userEstatus);
        data.profileId = parseInt(data.profileId);

        fetch(`${global.config.Url}${global.config.ControllerUser}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((result) => {
            result.json()
                 .then(users => {
                    if(!users.dataError) {
                        alert("Usuario Actualizado");  
                        this.setState({
                            IsupdateUser : false
                        })    
                        this.getAllUsers();       
                    } else {                        
                        alert("No se encontro el usuario que desea actualizar");
                    }     
                 })
        })

    }

    ActivateCreateUser = () => {
        this.setState({
            IscreateUser : true,
            IsupdateUser : false
        })
    }  

    validateObject(data) {
        let error = '';
        if(data.userLoginName == '') {
            error = `${error}, Usuario`;
        }

        if(data.userNames == '') {
            error = `${error}, Nombres`
        }

        if(data.userAddress == '') {
            error = `${error}, Dirección`
        }
        
        if(data.userPhone == '') {
            error = `${error}, Teléfono`
        }

        if(data.userMail == '') {
            error = `${error}, Email`
        }
       
        if(data.userAge == '') {
            error = `${error}, Edad`           
        }
        
        if(data.userPassword == '') {
            error = `${error}, Contraseña`  
        }
        

        if(data.profileId == '-1') {
            error = `${error}, Rol` 
        }
        

        if(data.userEstatus == '-1') {
            
            error = `${error}, Estado` 
        }
        
        return error;
    }

    CreateUser = (data) => {debugger
        const formsIsValid = this.validateObject(data); 
        if(formsIsValid != '') {
            alert(`Por favor digite la siguiente información: ${formsIsValid}`);
            return;
        }        
        data.userEstatus = parseInt(data.userEstatus);
        data.profileId = parseInt(data.profileId);

        fetch(`${global.config.Url}${global.config.ControllerUser}`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((result) => {
            result.json()
                .then(users => {
                    if(!users.dataError) {
                        alert("Usuario Creado");    
                        this.setState({
                            IscreateUser : false
                        })
                        this.getAllUsers();         
                    } else {                        
                        alert("El usuario ya existe");
                    }     
                })
        }).catch(err => {
            console.log(err)
        })
    }

    filterData = (event) => {
        
        if(event.target.value.length > 2) {
            let arraryKeys = [];

            this.state.allUsers.forEach(x => {
                if(x.userLoginName.includes(event.target.value)) {
                    arraryKeys.push(x)
                }                
            })       
            
            this.setState({
                allUsers : arraryKeys
            })
        } else {
            this.setState({
                allUsers : this.state.allUsersBackup
            })
        }
    }

    render() {
        const styleTable = {
            border: '1px solid black',
            borderCollapse: 'collapse',
            width: '100%',
            textAlign: 'left'
        }
        return (
            <div>   
                {
                    this.props.user.profileId === 1 ? 
                    <button onClick={this.ActivateCreateUser}>
                        Crear Usuario +
                    </button> : null  
                }   
                <hr/> 
                <br/>  
                {
                    this.props.user.profileId !== 2 ? 
                    <div>
                        <p>Buscar </p> 
                        <input type="search" onChange={this.filterData} name="busquedamusica" placeholder="Nombre, Rol..." />
                    </div>
                    
                    : null
                }
                <br/>  

                <table style={styleTable}>
                    <thead>
                        <tr>
                            <td><b>Usuario</b></td>
                            <td><b>Nombre</b></td>
                            <td><b>Dirección</b></td>
                            <td><b>Teléfono</b></td>
                            <td><b>Email</b></td>
                            <td><b>Edad</b></td>
                            <td><b>Rol</b></td>
                            <td><b>Actualizar</b></td>
                            <td><b>Eliminar</b></td>
                        </tr>
                    </thead>
                    <tbody>                        
                            {
                                this.state.allUsers.map(x => (
                                    <tr key={x.userId}>     
                                        <td>{x.userLoginName}</td>
                                        <td>{x.userNames}</td>
                                        <td>{x.userAddress}</td>
                                        <td>{x.userPhone}</td>
                                        <td>{x.userMail}</td>
                                        <td>{x.userAge}</td>
                                        <td>{x.profileId}</td>    
                                        <td>
                                            {
                                                (this.props.user.profileId === 1 || this.props.user.profileId === 4) ?
                                                    <button 
                                                    onClick={() => this.SendData(x)}>
                                                    Actualizar</button> : <p>Sin permisos</p>
                                            }
                                            
                                        </td> 
                                        <td>
                                            {
                                                (this.props.user.profileId === 1) ? 
                                                <button 
                                                  onClick={() => this.DeleteUser(x.userId)}>
                                                  Eliminar</button> : <p>Sin permisos</p>
                                            }
                                            
                                        </td>   
                                    </tr>
                                ))
                            }
                                    
                        
                    </tbody>
                </table>   
              
                {
                   this.state.IsupdateUser ?       
                        <UpdateUser 
                            userUpdate={this.state.userUpdate} 
                            onSend={this.updateUser}/> 
                    :
                    null 
                }

                {
                   this.state.IscreateUser ?       
                        <CreateUser 
                            onSendNewUser={this.CreateUser}
                        />    
                    :
                    null 
                }      
                      
            </div>
        );
    }
}

class UpdateUser extends Component {
    state = { profiles : [], 
              profileidTemp : this.props.userUpdate.profileId, 
              statustemp: this.props.userUpdate.userEstatus ? 1 : 0 }

    componentDidMount() {
        
        fetch(`${global.config.Url}${global.config.ControllerProfile}`)
        .then((result) => {
            result.json()
                 .then(users => {
                    if(!users.dataError) {
                        this.setState({
                            profiles : users['objectResult']
                         })                         
                    } else {
                        this.setState({
                            allUsers : []
                         })
                        alert("No se encontraron Roles");
                    }     
                 })
        })        
    }

    handleSubmit = (event) =>{debugger
        event.preventDefault();

        this.props.onSend({
            userLoginName: event.target[0].value,
            userNames: event.target[1].value,
            userAddress: event.target[2].value,
            userPhone: event.target[3].value,
            userMail: event.target[4].value,
            userAge: event.target[5].value,
            userPassword: event.target[6].value,         
            profileId: this.state.profileidTemp,
            userEstatus: this.state.statustemp,
            userId: this.props.userUpdate.userId });
    }

    changeStatus = (event) =>{
        console.log(event.target.value)
        this.setState({
            statustemp : event.target.value
        })
    }

    changeProfile = (event) => {
        console.log(event.target.value)
            this.setState({
                profileidTemp : event.target.value       
                    })
    }

    render() {
        return (
            <div>
                <h2>Actualizar Usuario</h2>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor='userLoginName' >Usuario</label></td>
                                <td><input type="text" id="userLoginName" defaultValue={this.props.userUpdate.userLoginName} maxLength='80' placeholder='Usuario'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userNames'>Nombre </label></td>
                                <td><input type="text" id="userNames" defaultValue={this.props.userUpdate.userNames} maxLength='100' placeholder='Nombre Completo'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userAddress'>Dirección </label></td>
                                <td><input type="text" id="userAddress" defaultValue={this.props.userUpdate.userAddress} maxLength='100' placeholder='Dirección'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userPhone'>Teléfono </label></td>
                                <td><input type="text" id="userPhone" defaultValue={this.props.userUpdate.userPhone}  maxLength='20' placeholder='Teléfono'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userMail'>Email </label></td>
                                <td><input type="email" id="userMail" defaultValue={this.props.userUpdate.userMail} maxLength='100' placeholder='Email'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userAge'>Edad </label></td>
                                <td><input type="number" id="userAge" defaultValue={this.props.userUpdate.userAge} min="18" max="90" placeholder='Edad'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='contrasena'>Contraseña </label></td>
                                <td> <input type="password" id="contrasena" defaultValue={this.props.userUpdate.userPassword} maxLength='7' placeholder='*******'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='profileId'>Rol </label></td>
                                <td>
                                    <select value={this.state.profileidTemp} onChange={this.changeProfile}>
                                        <option value='-1'>Seleccione</option>
                                        {
                                            this.state.profiles.map(x => (
                                                <option key={x.profileId} value={x.profileId}>
                                                    {x.profileName}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userEstatus'>Estado </label></td>
                                <td>
                                    <select value={this.state.statustemp} onChange={this.changeStatus}>
                                        <option value='-1'>Seleccione</option>
                                        <option value='1'>Activo</option>
                                        <option value='0'>Inactivo</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>  <button> Actualizar </button>  </td>
                            </tr>
                        </tbody>
                    </table>                            
                   
                    
                </form>
            </div>
        );
    }
}

class CreateUser extends Component {
    state = { profiles: [] }


    componentDidMount() {
        
        fetch(`${global.config.Url}${global.config.ControllerProfile}`)
        .then((result) => {
            result.json()
                 .then(users => {
                    if(!users.dataError) {
                        console.log(users['objectResult'])
                        this.setState({
                            profiles : users['objectResult']
                         })                         
                    } else {
                        this.setState({
                            allUsers : []
                         })
                        alert("No se encontraron Roles");
                    }     
                 })
        })        
    }

    handleSubmit = (event) =>{debugger
        event.preventDefault();     
         

        this.props.onSendNewUser({
            userLoginName: event.target[0].value,
            userNames: event.target[1].value,
            userAddress: event.target[2].value,
            userPhone: event.target[3].value,
            userMail: event.target[4].value,
            userAge: event.target[5].value,
            userPassword: event.target[6].value,
            profileId: event.target[7].value,
            userEstatus: event.target[8].value });
    }

    render() {
        
        return (
            <div>
                <h2>Crear Usuario</h2>
                <form onSubmit={this.handleSubmit}>
                <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor='userLoginName' >Usuario</label></td>
                                <td><input type="text" id="userLoginName" maxLength='80' placeholder='Usuario'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userNames'>Nombre </label></td>
                                <td><input type="text" id="userNames" maxLength='100' placeholder='Nombre Completo'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userAddress'>Dirección </label></td>
                                <td><input type="text" id="userAddress" maxLength='100' placeholder='Dirección'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userPhone'>Teléfono </label></td>
                                <td><input type="text" id="userPhone" maxLength='20' placeholder='Teléfono'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userMail'>Email </label></td>
                                <td><input type="email" id="userMail" maxLength='100' placeholder='Email'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userAge'>Edad </label></td>
                                <td><input type="number" id="userAge" min="18" max="90" placeholder='Edad'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='contrasena'>Contraseña </label></td>
                                <td><input type="password" id="contrasena" maxLength='7' placeholder='*******'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='profileId'>Rol </label></td>
                                <td>
                                    <select>
                                        <option value='-1'>Seleccione</option>
                                        {
                                            this.state.profiles.map(x => (
                                                <option key={x.profileId} value={x.profileId}>
                                                    {x.profileName}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor='userEstatus'>Estado </label></td>
                                <td>
                                    <select>
                                        <option value='-1'>Seleccione</option>
                                        <option value='1'>Activo</option>
                                        <option value='0'>Inactivo</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button>Crear nuevo Usuario </button>  </td>
                            </tr>
                        </tbody>
                    </table>     
                </form>
            </div>
        );
    }
}

class App extends Component {
    state = {
        user : null,
        cargando: false
      }

    submitLogin = (data) => {
        this.setState({
            cargando : true
         })
        
        fetch(`${global.config.Url}${global.config.ControllerLogin}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((result) => {
            result.json()
                 .then(user => {
                    if(!user.dataError) {
                        this.setState({
                            user : user['objectResult'],
                            cargando : false
                         })
                         console.log(user['objectResult'])
                    } else {
                        this.setState({
                            cargando : false
                         })
                        alert("Usuario Incorrecto");
                    }                     
                 })
        }).catch(() => {
            this.setState({
                cargando : false
             })
            alert("Se presento un error, por favor comuniquese con el administrador");
            return;
        })
    }
   

    render() {
        if(this.state.cargando){
            return <h1>cargando info...</h1>
        }        

        return (
            <div>                
                { this.state.user ? null : <Login onSend={this.submitLogin}/> }               
                { this.state.user ? <Header data={this.state.user}/> : null }
                { this.state.user ? <Welcome data={this.state.user}/> : null }
                { this.state.user ? this.state.user.profileId != 2 ? <CrudUsers user={ this.state.user } />  : null : null }                
            </div>
        );
    }
}

export default App;