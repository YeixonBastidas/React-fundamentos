import React from 'react';

const Header = () => {
    return(
        <div>
            <h1>Hook UseLayoutEffect</h1>
        </div>
    )
}

const Ejemplo1 = () => {
    let [count, setState] = React.useState(0);

    const add = () => setState(count + 1);

    React.useEffect(() => {
        console.log('Use effect 1')
    }, [count])

    React.useLayoutEffect(() => {
        console.log('Use Layout Effect 2')
    }, [count])

    return(
        <div>
           <button onClick={add}>
               Add ({count})
           </button>
        </div>
    )
}

const App28 = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Ejemplo1/>
            <hr/>
        </div>
    )
}

export default App28;