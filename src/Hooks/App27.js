import React, { Component } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook UseEfect</h1>
        </div>
    )
}

// como funciona un Hook
const UseEfect_Basico = () => {
const [clicks, setClicks] = React.useState(0);

    // simula los ciclos de vida de los componentes basados en clase
    // este hook equivale al componente componentDodMount y componentDidUpdate
    React.useEffect(()=>{
        console.log('dentro de useEfect', clicks);
        console.log('%c--------------------------------', 'color:red');


        // para simular el componente componentWillUnmount
        return () => {
            console.log('Return de useEfect', clicks);
        }
    });


    return(
        <div>

            <button onClick={() => {
                setClicks(clicks + 1)
            }}>
                Clicks ({clicks})
            </button>
        </div>
    )
}

// usando el hook con los tres ciclos de vida
const Ejemplo1 = () =>{

    const [ mousex, setMouseX ] = React.useState(0);
    const [ mousey, setMouseY ] = React.useState(0);

   const handlemove = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    }

    React.useEffect(() => {
        window.addEventListener('mousemove', handlemove)

        return () => {
            window.removeEventListener('mousemove', handlemove)
        }
    })

    return(
        <div>
            <h2>
               X: {mousex}
               Y: {mousey}
            </h2>
        </div>
    )
}

// controlar en que momento se debe de ejecutar el Hook
const Ejemplo2 = () =>{

    const [ num, setNum ] = React.useState(0);
    const [ emoji, setEmoji ] = React.useState('A');


    const addNum = () => setNum(num + 1);

   const toggleEmoji = () => {
       const nextEmoji = emoji === 'A' ? 'B' : 'A';
       setEmoji(nextEmoji)
   }

    React.useEffect(() => {
      alert('Hook')
    }, [num]) // ejecuta el ciclo de vida solo cuando alteramos num 

    return(
        <div>
            <button onClick={addNum}>
                Click ({num})
            </button>
            <br/>
            <button onClick={toggleEmoji}>
                Alternar Emoji
            </button>
            <h2>
                {emoji}
            </h2>
        </div>
    )
}

//
const Ejemplo3 = () =>{

    let [ users, setUsers ] = React.useState([]);

   

    React.useEffect(() => {
     
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => 
        x.json().then(result => {
            users = setUsers(result)
        })
     )

    }, []) // si pasamos el array basio solo se ejecuta una vez la peticion

    return(
        <div>
            <ul>
                {
                    users.map(x => (
                        <li key={x.id}>
                            {x.username}
                        </li>
                    ))
                }
            </ul>           
        </div>
    )
}


class App27 extends Component {
     render() {
        return (
            <div>
                <Header/>
                <hr/> 
                {/* <UseEfect_Basico/> */} 
                <hr/> 
                {/* <Ejemplo1/> */}
                <hr/> 
                {/* <Ejemplo2/> */}
                <hr/> 
                <Ejemplo3/> 
            </div>
        );
    }
}

export default App27;


