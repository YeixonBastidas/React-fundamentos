import React, { useMemo } from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook Ejemplo Memo</h1>
        </div>
    )
}

const SuperList = ({list, log}) => {
    console.log('%cRender <Superlist/>' + log, 'color:green')
    return(
        <div>
            <ul>
                {
                    list.map(item => (
                        <li key={item}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


const App36 = () => {
    let [count, setState] = React.useState(0);
    const add = () => setState(count + 1);

    // guarda en memoria un componente, pero tambien puede ser una variable u otra cosa
    const memoList = useMemo(() => {
        return(
            <SuperList
                list={
                    [
                       1 ,
                       2,
                       3,
                       4
                    ]
                }
                log='Memorizado'
             />
        )
    }, [])

    return(
        <div>
            <Header/>
            <hr/>
             <button onClick={add}>
                    Add ({count})
             </button>

             <SuperList
                list={
                    [
                       'uno' ,
                       'dos',
                       'tres',
                       'cuatro'
                    ]
                }
                log='normal'
             />
               
               {memoList}
            <hr/>
        </div>
    )  
}


export default App36;